// auth.ts
import type { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma";

export const authOptions: AuthOptions = {
	  adapter: PrismaAdapter(prisma),
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
		}),
		CredentialsProvider({
			name: "Регистрация",
			credentials: {
				username: {
					label: "Username",
					type: "text",
					placeholder: "jsmith",
				},password: { label: "Password", type: "password" },},
			async authorize(credentials, req) {
				const user = {
					id: "1",
					name: "J Smith",
					email: "jsmith@example.com",
				};
				if (user) {return user;} else {return null;}
			},
		}),
	],
};
