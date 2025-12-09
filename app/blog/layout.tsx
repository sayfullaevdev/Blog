import Link from "next/link";
import React from "react";

interface layoutProps {
	children: React.ReactNode;
}

export default function layout({ children }: layoutProps) {
	
	return (
			<div className="mx-auto max-w-6xl px-4 py-8 md:flex md:gap-8">
				<aside className="md:w-64 w-full mb-6 md:mb-0">
					<div className="rounded-2xl overflow-hidden shadow-sm">
						<div className="p-6 bg-[#C9DDEE]">
							<div className="flex items-center gap-4">
								<div
									className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold"
									style={{ background: "linear-gradient(135deg,#47A1C4 0%, #27568B 100%)" }}
								>
									B
								</div>

								<div>
									<div className="text-sm font-semibold text-[#27568B]">My Blog</div>
									<div className="text-xs text-[#27568B]/70">Статьи и разборы</div>
								</div>
							</div>

							<nav className="mt-6 flex flex-col gap-2">
								<Link href="/blog" className="block px-3 py-2 rounded-md text-[#27568B] hover:bg-[#47A1C4]/10 transition-colors">
									Home
								</Link>
								<Link href="/blog/posts" className="block px-3 py-2 rounded-md text-[#27568B] hover:bg-[#47A1C4]/10 transition-colors">
									Posts
								</Link>
							</nav>

							<div className="mt-6">
								<Link
									href="/blog/posts/new"
									className="inline-block w-full text-center px-3 py-2 rounded-md bg-[#B68250] text-white hover:opacity-95 transition"
								>
									Создать пост
								</Link>
							</div>
						</div>

						<div className="p-4 bg-white border-t">
							<div className="text-xs text-[#27568B]/80">© {new Date().getFullYear()} My Blog</div>
						</div>
					</div>
				</aside>

				<main className="flex-1">
					<div className="bg-white rounded-2xl shadow-lg p-6">{children}</div>
				</main>
			</div>

	);
}

// presentation
// parallel routes
// sql - no sql // relation // geo-sql //
// self hosted system
// OAuth
// ORM // prisma and others
// ISG ISR etc
