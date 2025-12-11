import React from "react";
interface PageProps {
	params: {
		id: string;
	};
}

const page: React.FC<PageProps> = async ({ params }) => {
	const { id } = params;
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
		next: { revalidate: 3600 },
	});

	if (!res.ok) {
		return <div>Error: Failed to fetch user data.</div>;
	}

	const user = await res.json();
	return (
		<div>
			<h1>User Detail Page</h1>
			{user.name ? (<h2>{user.name}</h2>) : (<h2>User not found.</h2>)}
			<p>ID: {id}</p>
		</div>
	);
};

export default page;