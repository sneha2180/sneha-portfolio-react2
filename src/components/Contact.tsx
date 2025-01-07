"use client"; // Add this directive at the top

import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS SDK

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_mken2qn", // Replace with your service ID
        "template_0nmq8yb", // Replace with your template ID
        formData,
        "fMDUo0xmUYuviC-5W" // Replace with your user ID
      );
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section id="contact" className="py-16 flex flex-col items-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Contact Me
        </h2>
        {isSubmitted ? (
          <p className="text-center text-green-600">Your message has been sent successfully!</p>
        ) : (
          <form
            className="bg-white p-6 rounded-lg space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-slate-600"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-slate-600"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-slate-600"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-slate-400 text-white px-6 py-3 rounded-lg shadow hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
