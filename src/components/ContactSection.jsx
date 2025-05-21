import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-gray-100 py-10 px-4 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto text-center px-2 sm:px-4">
        <div className="mb-6">
          <h3 className="text-gray-500 tracking-widest uppercase text-sm sm:text-base">Reach Out</h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2">Contact Information</h2>
          <p className="text-sm sm:text-base mt-3 text-gray-600 italic">
            Get in touch for any queries or collaboration opportunities.
          </p>
        </div>

        <div className="border-2 border-green-400 p-6 sm:p-8 rounded-xl bg-white shadow-md transition-all duration-500 hover:shadow-xl">
          <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between">
            {/* Email */}
            <div className="flex items-start sm:items-center gap-4">
              <Mail className="text-green-500 w-6 h-6 sm:w-7 sm:h-7 animate-pulse" />
              <div className="text-left">
                <p className="text-gray-700 text-sm font-medium">Email Us</p>
                <p className="text-base sm:text-lg font-semibold text-gray-900 break-all">contact@greenfuture.org</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start sm:items-center gap-4">
              <Phone className="text-green-500 w-6 h-6 sm:w-7 sm:h-7 animate-pulse" />
              <div className="text-left">
                <p className="text-gray-700 text-sm font-medium">Call Us</p>
                <p className="text-base sm:text-lg font-semibold text-gray-900">+44 1234 567890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
