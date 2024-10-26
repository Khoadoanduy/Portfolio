// /src/app/api/hello/route.js

export async function GET(request) {
    return new Response(JSON.stringify({ message: "Hello, world!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  
  // Add other methods as needed, e.g., POST, PUT, DELETE, etc.
  