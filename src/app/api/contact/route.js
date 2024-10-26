import { MongoClient } from "mongodb";

// Replace with your MongoDB connection string
const uri = process.env.MONGODB_URI;

export async function POST(req) {
  const { firstName, lastName, email, message } = await req.json();

  try {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db("users");
    const collection = db.collection("user");

    // Insert data into the specified MongoDB collection
    await collection.insertOne({
      name: `${firstName} ${lastName}`,
      email,
      message,
      createdAt: new Date(),
    });

    client.close();
    return new Response(JSON.stringify({ message: "Message sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database Error:", error); // Log the exact error
    return new Response(JSON.stringify({ error: "Failed to send message." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
