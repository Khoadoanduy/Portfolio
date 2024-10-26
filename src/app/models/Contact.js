// src/app/models/Contact.js
import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: "" },
  message: { type: String, required: true },
});

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema, "user");
