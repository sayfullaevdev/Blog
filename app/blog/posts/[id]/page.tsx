import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
	const id = Number((await params).id);

	const post = await prisma.post.findUnique({
		where: { id },
		include: { author: true },
	});

	if (!post) return notFound();

	return (
		<div className="max-w-4xl mx-auto px-4 py-12">
			<div className="bg-[#C9DDEE] rounded-2xl p-1 shadow-lg">
				<article className="bg-white rounded-2xl p-8">
					<div className="flex items-start justify-between mb-6">
						<div>
							<h1 className="text-3xl md:text-4xl font-extrabold text-[#27568B] mb-2">{post.title}</h1>
							<div className="text-sm text-[#47A1C4]/90">by {post.author?.name ?? "Автор"}</div>
						</div>

						<div className="flex items-center gap-3">
							<Link href="/blog/posts" className="text-sm text-[#47A1C4] hover:text-[#27568B]">
								← К списку
							</Link>
							<span className="px-3 py-1 rounded-md bg-[#B68250] text-white text-sm">Post #{post.id}</span>
						</div>
					</div>

					<div className="prose prose-sm max-w-none text-[#27568B]">
						{post.content ? (
							// Если контент хранится как plain text — выводим в параграфах
							post.content.split("\n\n").map((p, i) => (
								<p key={i}>{p}</p>
							))
						) : (
							<p className="text-[#27568B]/80">Содержимое отсутствует.</p>
						)}
					</div>
				</article>
			</div>
		</div>
	);
}


// SHA256:sMkzJQs0VrVcb0sz1XRZFZ6KsBo+eHqObchAAG/8mZE=