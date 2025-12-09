// // ИСПОЛЬЗУЙТЕ СТАНДАРТНЫЙ ИМПОРТ
// import { PrismaClient } from "@prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";

// const globalForPrisma = global as unknown as {
// 	prisma: PrismaClient;
// };

// const adapter = new PrismaPg({
// 	connectionString: process.env.DATABASE_URL,
// });

// const prisma =
// 	globalForPrisma.prisma ||
// 	new PrismaClient({
// 		adapter,
// 	});

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// export default prisma;
// src/lib/prisma.ts (ОТКАТ НА СТАНДАРТНЫЙ PRISMA CLIENT)

import { PrismaClient } from "@prisma/client"; // СТАНДАРТНЫЙ ИМПОРТ

// Удаляем импорт PrismaPg
// import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = global as unknown as {
    prisma: PrismaClient;
};

// Удаляем инициализацию адаптера
// const adapter = new PrismaPg({
//     connectionString: process.env.DATABASE_URL,
// });

const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        // Удаляем адаптер
        // adapter, 
    });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;