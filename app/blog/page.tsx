import prisma from "@/lib/prisma";

export default async function Home() {
	const users = await prisma.user.findMany();

	return (
		<div>
			<h1 className="text-4xl font-bold mb-8 font-(family-name:--font-geist-sans) text-[#333333]">
				Superblog
			</h1>
			<p className="text-2xl  mb-8 font-(family-name:--font-geist-sans) text-[#212121]">
				Добро пожаловать в наш блог — место, где каждый найдёт что-то интересное!
				Здесь мы делимся свежими новостями, глубокими статьями и полезными материалами по технологиям, креативу и жизни в цифровом мире.
				Следите за обновлениями, оставляйте комментарии и делитесь своими мыслями — вместе мы сделаем этот блог живым и увлекательным.
			</p>
		</div>
	);
}
