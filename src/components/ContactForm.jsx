import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) newErrors.email = "Please enter your email address";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject";
    if (!formData.message.trim()) newErrors.message = "Please enter your message";
    if (!formData.consent) newErrors.consent = "You must accept the terms";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        formData,
        "your_user_id"
      )
      .then(
        () => {
          setSent(true);
          setFormData({ name: "", email: "", subject: "", message: "", consent: false });
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00040f] via-[#001d3d] to-[#003566] flex justify-center items-center px-4 py-10">
      <form
        onSubmit={sendEmail}
        className="w-full max-w-3xl space-y-6 text-white"
      >
        <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className={`w-full p-4 bg-transparent border-b-2 ${
                errors.name ? "border-red-500" : "border-blue-300"
              } text-white placeholder-gray-300 focus:outline-none focus:ring-0 transition`}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className={`w-full p-4 bg-transparent border-b-2 ${
                errors.email ? "border-red-500" : "border-blue-300"
              } text-white placeholder-gray-300 focus:outline-none focus:ring-0 transition`}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="animate-slide-up delay-100">
          <input
            type="text"
            placeholder="Subject"
            className={`w-full p-4 bg-transparent border-b-2 ${
              errors.subject ? "border-red-500" : "border-blue-300"
            } text-white placeholder-gray-300 focus:outline-none focus:ring-0 transition`}
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
        </div>

        <div className="animate-slide-up delay-200">
          <textarea
            placeholder="Enter your message..."
            rows="6"
            className={`w-full p-4 bg-transparent border-b-2 ${
              errors.message ? "border-red-500" : "border-blue-300"
            } text-white placeholder-gray-300 focus:outline-none focus:ring-0 transition`}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <div className="flex items-start space-x-3 animate-fade-in delay-300">
          <input
            type="checkbox"
            className="mt-1 accent-blue-500"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          />
          <label className="text-sm text-gray-200">
            I accept the use of my details in accordance with the STEP4ECO Contractors
            <a href="#" className="underline ml-1 text-blue-300">Privacy Policy</a>
          </label>
        </div>
        {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

        <div className="text-center">
          <button
            type="submit"
            className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg hover:bg-blue-200 transition-transform transform hover:scale-105 duration-200"
          >
            Send Message
          </button>
        </div>

        {sent && (
          <p className="text-green-400 text-center text-lg animate-fade-in">
            Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
