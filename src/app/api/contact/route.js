import connectToDatabase from "/src/app/lib/mongodb";
import Contact from "/src/app/models/Contact";

export async function POST(req) {
  try {
    await connectToDatabase();
    const { name, email, phone } = await req.json(); // Retrieve JSON data

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const newContact = new Contact({ name, email, phone });
    await newContact.save();

    return new Response(
      JSON.stringify({ message: "Contact saved successfully." }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Server error." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
