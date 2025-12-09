'use server'

import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";

export async function updateProfile(formData: FormData) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.email) { throw new Error("Не авторизован"); }
    const name = formData.get("name") as string;
    await prisma.user.update({
        where: { email: session.user.email },
        data: { name: name },
    });
    revalidatePath("/profile");
}





export async function updatePost(postId: number, formData: FormData) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.email) throw new Error("Not authenticated");

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const user = await prisma.user.findUnique({ where: { email: session.user.email } });

    if (!user) throw new Error("User not found");
    const result = await prisma.post.updateMany({
        where: {
            id: postId,
            authorId: user.id
        },
        data: { title, content }
    });
    if (result.count === 0) { throw new Error("Не удалось обновить пост (возможно, у вас нет прав)"); }
    revalidatePath("/profile");
}







export async function deletePost(postId: number) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.email) throw new Error("Not authenticated");

    const user = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (!user) throw new Error("User not found");

    await prisma.post.deleteMany({
        where: {
            id: postId,
            authorId: user.id
        }
    });

    revalidatePath("/profile");
}