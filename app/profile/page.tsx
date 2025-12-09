import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma"; 
import ProfileForm from "@/components/ProfileForm";
import PostCard from "@/components/PostCard";
import { authOptions } from "../api/auth/[...nextauth]/auth";

export default async function ProfilePage() {
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.email) {redirect("/api/auth/signin");}
    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        include: {posts: {orderBy: { id: 'desc' }}}
    });

    if (!user) return <div className="p-10">Пользователь не найден</div>;

    return (
        <main className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Личный кабинет</h1>
            <ProfileForm user={user} />
            <div>
                <h2 className="text-2xl font-bold mb-6">Ваши посты ({user.posts.length})</h2>
                {user.posts.length === 0 ? (
                    <p className="text-gray-500 italic">У вас пока нет постов.</p>) : (
                    <div>{user.posts.map((post) => (<PostCard key={post.id} post={post} />))}</div>
                )}
            </div>
        </main>
    );
}