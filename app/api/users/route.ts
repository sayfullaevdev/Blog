
export async function GET(request: Request) {
    return new Response(JSON.stringify({ message: 'Hello from API!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(request: Request) {
    const data = await request.json();
    return new Response(JSON.stringify({ received: data }), { status: 201 });
}
