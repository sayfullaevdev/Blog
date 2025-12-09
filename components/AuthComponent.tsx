"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function AuthComponent() {
	const { data: session } = useSession();

	if (session) {
		const user = session.user;

		return (
			<div className="flex items-center gap-3">
				<Avatar className="w-10 h-10 ring-2 ring-[#47A1C4]">
					<AvatarImage src={user?.image || ""} />
					<AvatarFallback>
						{user?.name
							?.split(" ")
							.map((n) => n[0])
							.join("")
							.slice(0, 2)
							.toUpperCase() || "US"}
					</AvatarFallback>
				</Avatar>

				<div className="flex flex-col min-w-0">
					<span className="text-sm font-semibold text-[#27568B] truncate">{user?.name || "Имя"}</span>
					<span className="text-xs text-[#27568B]/70 truncate hidden sm:block">{user?.email}</span>
				</div>

				<Button
					onClick={() => signOut()}
					className="ml-2 bg-[#B68250] hover:bg-[#9a622f] text-white whitespace-nowrap"
				>
					Выйти
				</Button>
			</div>
		);
	}

	return (
		<div>
			<Button onClick={() => signIn()} className="px-4 py-2 bg-[#47A1C4] hover:bg-[#3895b0] text-white">
				Войти
			</Button>
		</div>
	);
}
