// pages/api/contact.js
import connectToDatabase from "@/lib/mongodb";
import Contact from "@/models/Contact";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectToDatabase();
      const { name, email, phone } = req.body;

      if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required." });
      }

      const newContact = new Contact({ name, email, phone });
      await newContact.save();

      return res.status(201).json({ message: "Contact saved successfully." });
    } catch (error) {
      return res.status(500).json({ error: "Server error." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
