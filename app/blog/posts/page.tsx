import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Posts() {
	const posts = await prisma.post.findMany({
		include: { author: true },
		orderBy: { id: "desc" },
	});

	return (
		<div>

			{posts.length === 0 ? (
				<div className="p-8 bg-[#C9DDEE] rounded-2xl text-center text-[#27568B]">Нет опубликованных постов.</div>
			) : (
				<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{posts.map((post) => (
						<article key={post.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
							<div className="h-35 bg-linear-to-r from-[#47A1C4] to-[#27568B] flex items-end">
								<div className="p-4 text-white text-[14px] font-bold">{post.title}</div>
							</div>

							<div className="p-4">
								<p className="text-sm text-[#27568B]/85 mb-4 h-7 overflow-hidden">
									{post.content ? post.content.slice(0, 140) + (post.content.length > 140 ? "..." : "") : "Описание отсутствует."}
								</p>

								<div className="flex items-center justify-between">
									<div className="text-xs text-[#27568B]/80">{post.author?.name ?? "Автор"}</div>
									<div className="flex items-center gap-2">
										<Link href={`/blog/posts/${post.id}`} className="text-sm text-[#47A1C4] hover:text-[#27568B]">
											Читать
										</Link>
									</div>
								</div>
							</div>
						</article>
					))}
				</div>
			)}
		</div>
	);
}
