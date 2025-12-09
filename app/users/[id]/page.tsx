interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const id = params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return (
    <div>
      <h1>Users page</h1>
      <h2>{user.name}</h2>
    </div>
  );
}
