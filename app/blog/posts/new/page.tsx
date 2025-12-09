import Form from "next/form";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import AuthComponent from "@/components/AuthComponent";

export default async function NewPost() {
	const session = await getServerSession(authOptions);
	if(!session) return <AuthComponent/>


	async function createPost(formData: FormData) {
		"use server";

		const title = (formData.get("title") as string) || "Без названия";
		const content = (formData.get("content") as string) || null;

		await prisma.post.create({
			data: {
				title,
				content,
				authorId: 1,
			},
		});

		revalidatePath("/blog/posts");
		redirect("/blog/posts");
	}

	return (
		<div className="max-w-3xl mx-auto px-4 py-12">
			<div className="bg-[#C9DDEE] rounded-2xl p-1 shadow-lg">
				<div className="bg-white rounded-2xl p-8">
					<div className="flex items-center justify-between mb-6">
						<div>
							<h1 className="text-2xl font-bold text-[#27568B]">Создать пост</h1>
							<p className="text-sm text-[#27568B]/80">Напишите интересную статью и опубликуйте её в блоге.</p>
						</div>

						<Link href="/blog/posts" className="text-sm text-[#47A1C4] hover:text-[#27568B]">
							← Назад к постам
						</Link>
					</div>

					<Form action={createPost} className="space-y-6">
						<div>
							<label htmlFor="title" className="block text-sm font-medium text-[#27568B] mb-2">
								Заголовок
							</label>
							<input
								type="text"
								id="title"
								name="title"
								placeholder="Введите заголовок поста"
								className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47A1C4]"
							/>
						</div>

						<div>
							<label htmlFor="content" className="block text-sm font-medium text-[#27568B] mb-2">
								Контент
							</label>
							<textarea
								id="content"
								name="content"
								placeholder="Напишите содержимое поста..."
								rows={8}
								className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47A1C4]"
							/>
						</div>

						<div className="flex gap-3">
							<button
								type="submit"
								className="flex-1 px-4 py-3 rounded-md bg-[#B68250] text-white hover:brightness-95 transition">
								Создать
							</button>

							<Link
								href="/blog/posts"
								className="px-4 py-3 rounded-md border border-[#27568B] text-[#27568B] hover:bg-[#27568B]/5 transition">
								Отмена
							</Link>
						</div>
					</Form>
				</div>
			</div>
		</div>
	);
}
