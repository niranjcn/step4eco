import React from 'react';
import { Clock3 } from 'lucide-react'; // Icon for clock
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Social media icons from react-icons

export default function OpeningTimes() {
  return (
    // Main container with a dark, sophisticated background, responsive padding.
    <div className="w-full bg-gray-900 text-white text-sm flex flex-col sm:flex-row justify-between items-center px-6 md:px-10 py-3 font-inter">
      {/* Opening times section */}
      <div className="flex items-center gap-3 mb-2 sm:mb-0">
        {/* Clock icon with a vibrant green color */}
        <Clock3 size={18} className="text-emerald-400" />
        {/* Text for opening times */}
        <span className="text-gray-200 text-sm md:text-base">
          Opening Times: Mon–Thurs 8am–4.30pm, Fri 8am–3.30pm, Sat & Sun – Closed.
        </span>
      </div>

      {/* Social media follow section (hidden on very small screens) */}
      <div className="hidden sm:flex gap-6 items-center">
        <span className="text-gray-300 text-sm md:text-base">Follow Us:</span>
        {/* Facebook icon with hover effect */}
        <a href="#" className="hover:text-emerald-300 transform hover:scale-110 transition-all duration-200" aria-label="Facebook">
          <FaFacebookF size={18} className="text-emerald-400" />
        </a>
        {/* Instagram icon with hover effect */}
        <a href="#" className="hover:text-emerald-300 transform hover:scale-110 transition-all duration-200" aria-label="Instagram">
          <FaInstagram size={18} className="text-emerald-400" />
        </a>
        {/* Twitter icon with hover effect */}
        <a href="#" className="hover:text-emerald-300 transform hover:scale-110 transition-all duration-200" aria-label="Twitter">
          <FaTwitter size={18} className="text-emerald-400" />
        </a>
      </div>
    </div>
  );
}
