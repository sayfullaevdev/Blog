// import Link from "next/link";
// import React from "react";

// interface layoutProps {
// 	children: React.ReactNode;
// }

// export default function layout({ children }: layoutProps) {
// 	return (
// 		<div className="flex min-h-screen">
// 			<aside className="w-64 bg-gray-100 p-6 space-y-4">
// 				<nav className="flex flex-col space-y-3">
// 					<Link
// 						href="/about"
// 						className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
// 					>
// 						Overview
// 					</Link>
// 					<Link
// 						href="/about/team"
// 						className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
// 					>
// 						Explore our team mates
// 					</Link>
// 					<Link
// 						href="/about/history"
// 						className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
// 					>
// 						Explore our big history
// 					</Link>
// 				</nav>
// 			</aside>
// 			<main className="flex-1 p-6">{children}</main>
// 		</div>
// 	);
// }

// ...existing code...
"use client";

import Link from "next/link";
import React, { useState } from "react";

interface layoutProps {
    children: React.ReactNode;
}

export default function layout({ children }: layoutProps) {
    const [open, setOpen] = useState(false);

    return (
        // <div className="h-[100px] bg-[#F8FBFF]">
            <div className="  mx-auto max-w-6xl px-4 py-6">
                <div className="flex items-center justify-between md:hidden mb-4">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-10 h-10 rounded-md flex items-center justify-center text-white font-bold"
                            style={{ background: "linear-gradient(135deg,#47A1C4 0%, #27568B 100%)" }}
                        >
                            B
                        </div>
                        <span className="text-lg font-semibold text-[#27568B]">About</span>
                    </div>

                    <button
                        aria-label="Toggle menu"
                        onClick={() => setOpen((s) => !s)}
                        className="p-2 rounded-md bg-white shadow-sm text-[#27568B]"
                    >
                        {open ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z" clipRule="evenodd" />
                            </svg>
                        )}
                    </button>
                </div>

                <div className="md:flex md:items-start md:gap-8">
                    {/* Sidebar */}
                    <aside className={`md:w-64 w-full md:block ${open ? "block" : "hidden"} mb-6 md:mb-0`}>
                        <div className="rounded-2xl overflow-hidden shadow-sm">
                            <div className="p-6 bg-[#C9DDEE]">
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold"
                                        style={{ background: "linear-gradient(135deg,#47A1C4 0%, #27568B 100%)" }}
                                    >
                                        B
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-[#27568B]">My Blog</div>
                                        <div className="text-xs text-[#27568B]/70">Блог о разработке</div>
                                    </div>
                                </div>

                                <nav className="mt-6 flex flex-col gap-2">
                                    <Link href="/about" className="block px-3 py-2 rounded-md text-[#27568B] hover:bg-[#47A1C4]/10 hover:text-[#27568B] transition-colors">
                                        Overview
                                    </Link>
                                    <Link href="/about/team" className="block px-3 py-2 rounded-md text-[#27568B] hover:bg-[#47A1C4]/10 transition-colors">
                                        Team
                                    </Link>
                                    <Link href="/about/history" className="block px-3 py-2 rounded-md text-[#27568B] hover:bg-[#47A1C4]/10 transition-colors">
                                        History
                                    </Link>
                                </nav>

                                <div className="mt-6">
                                    <Link
                                        href="/contact"
                                        className="inline-block w-full text-center px-3 py-2 rounded-md bg-[#B68250] text-white hover:opacity-95 transition"
                                    >
                                        Связаться
                                    </Link>
                                </div>
                            </div>

                            <div className="p-4 bg-white border-t">
                                <div className="text-xs text-[#27568B]/80">© {new Date().getFullYear()} My Blog</div>
                            </div>
                        </div>
                    </aside>

                    {/* Content */}
                    <main className="flex-1">
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        // </div>
    );
}
// ...existing code...

// presentation
// parallel routes
// sql - no sql // relation // geo-sql //
// self hosted system
// OAuth
// ORM // prisma and others
// ISG ISR etc
