"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConfirmationMessage("Thank you! Your submission has been received.");
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Contact Information Section */}
      <div className="bg-gray-900 text-white p-6 rounded-l-md w-full md:w-1/3">
        <h2 className="text-xl font-bold mb-2">Contact Information</h2>
        <p className="mb-4 text-sm">Fill up the form and our Team will get back to you within 24 hours.</p>
        <div className="flex items-center mb-4">
          <span className="mr-2">📞</span>
          <p>+1(424) 535 3523</p>
        </div>
        <div className="flex items-center mb-4">
          <span className="mr-2">📧</span>
          <p>hello@mail.com</p>
        </div>
        <div className="flex items-center">
          <span className="mr-2">🎫</span>
          <a href="#" className="underline">Open Support Ticket</a>
        </div>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-r-md w-full md:w-2/3 shadow-md"
        data-netlify="true"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Contact Kevin Doan</h2>

        {confirmationMessage && <p className="mb-4 text-center text-sm text-gray-700">{confirmationMessage}</p>}

        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
