"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data for URL encoding
    const formElement = e.target;
    const formData = new FormData(formElement);
    const encodedData = new URLSearchParams(formData).toString();

    try {
      // Send AJAX request with URL-encoded data
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodedData,
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        formElement.reset(); // Reset form after successful submission
      } else {
        setStatus("An error occurred. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-500 mx-auto w-full lg:w-5/12">
          Ready to get started? Feel free to reach out through the contact form, and let's embark on a journey of innovation and success.
        </p>
      </div>
      <div className="container mx-auto border border-gray-300 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Information</h2>
        <p className="text-gray-500 mb-8">Fill up the form and our team will get back to you within 24 hours.</p>

        <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full md:w-auto bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold"
          >
            Send message
          </button>
          {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
        </form>
        <div className="text-center mt-6">
          <a
            href="/Kevin_Doan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
