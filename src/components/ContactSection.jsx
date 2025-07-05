import React from 'react';
import { Mail, Phone } from 'lucide-react'; // Lucide icons for clean, modern look

const ContactSection = () => {
  return (
    // Section with a light, natural background color and generous padding.
    <section className="bg-stone-50 py-12 px-4 sm:py-16 md:py-20 lg:py-24 font-inter">
      <div className="max-w-4xl mx-auto text-center px-2 sm:px-4">
        {/* Section header with subtle text and bold title */}
        <div className="mb-10">
          <h3 className="text-emerald-600 tracking-widest uppercase text-sm sm:text-base font-semibold">Reach Out</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mt-3 leading-tight">
            Contact Information
          </h2>
          <p className="text-base sm:text-lg mt-4 text-gray-600 italic max-w-2xl mx-auto">
            Get in touch for any queries, collaboration opportunities, or to learn more about our eco-friendly solutions.
          </p>
        </div>

        {/* Contact information card with enhanced border, shadow, and hover effects */}
        <div className="border-2 border-emerald-400 p-8 sm:p-10 rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-emerald-500 transform hover:-translate-y-1">
          <div className="flex flex-col gap-8 sm:gap-10 md:flex-row md:items-center md:justify-around">
            {/* Email contact block */}
            <div className="flex items-start sm:items-center gap-5 group cursor-pointer">
              {/* Mail icon with vibrant green color and subtle pulse animation */}
              <Mail className="text-emerald-500 w-8 h-8 sm:w-9 sm:h-9 animate-pulse group-hover:text-emerald-700 transition-colors duration-300" />
              <div className="text-left">
                <p className="text-gray-700 text-sm font-medium uppercase tracking-wide">Email Us</p>
                {/* Email address with strong styling and hover effect */}
                <p className="text-lg sm:text-xl font-bold text-gray-900 break-all group-hover:text-emerald-800 transition-colors duration-300">info.step4eco@gmail.com</p>
              </div>
            </div>

            {/* Phone contact block */}
            <div className="flex items-start sm:items-center gap-5 group cursor-pointer">
              {/* Phone icon with vibrant green color and subtle pulse animation */}
              <Phone className="text-emerald-500 w-8 h-8 sm:w-9 sm:h-9 animate-pulse group-hover:text-emerald-700 transition-colors duration-300" />
              <div className="text-left">
                <p className="text-gray-700 text-sm font-medium uppercase tracking-wide">Call Us</p>
                {/* Phone number with strong styling and hover effect */}
                <p className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-emerald-800 transition-colors duration-300">07554463387</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
