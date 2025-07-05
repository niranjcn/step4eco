import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; // Social media icons
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"; // Material Design icons for contact info
import logo from '../assets/images/logo.jpg'; // Assuming logo.jpg is an appropriate logo

export default function Footer() {
  return (
    // Footer with a dark, earthy background, generous padding, and modern sans-serif font.
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-20 font-inter">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8 max-w-7xl mx-auto">
        {/* Left Section: Logo and About Us */}
        <div>
          {/* Logo with slightly adjusted width for better visual balance */}
          <img src={logo} alt="Step4Eco Logo" className="w-40 mb-5 rounded-lg shadow-md" />
          <p className="text-sm text-gray-300 leading-relaxed">
            Step4Eco is a lead generation company specializing in connecting clients with top-tier installation teams across the UK
            through various fully funded free government grants. We are dedicated to empowering communities with sustainable
            solutions through innovative energy practices and eco-conscious technologies.
          </p>
          {/* Social media icons with larger size and hover effects */}
          <div className="flex space-x-6 mt-6 text-2xl text-emerald-400">
            <a href="#" className="hover:text-emerald-300 transform hover:scale-110 transition-transform duration-300" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-emerald-300 transform hover:scale-110 transition-transform duration-300" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-emerald-300 transform hover:scale-110 transition-transform duration-300" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Center Section: Contact Information */}
        <div>
          <h2 className="text-xl font-bold mb-5 text-emerald-300 uppercase tracking-wide">Contact Us</h2>
          <div className="text-gray-300 text-sm space-y-3">
            <p className="flex items-start">
              <MdLocationOn className="text-emerald-500 mt-1 mr-3 text-xl" />
              86 Llandaff Drive LL19 8TT<br />United Kingdom
            </p>
            <p className="flex items-center">
              <MdPhone className="text-emerald-500 mr-3 text-xl" /> 07554463387
            </p>
            <p className="flex items-center">
              <MdEmail className="text-emerald-500 mr-3 text-xl" />
              info.step4eco@gmail.com
            </p>
          </div>
        </div>

        {/* Right Section: Services List */}
        <div>
          <h2 className="text-xl font-bold mb-5 text-emerald-300 uppercase tracking-wide">Services</h2>
          <ul className="space-y-3 text-emerald-400 text-sm">
            <li className="hover:text-emerald-300 cursor-pointer transition-colors duration-200">Solar Panel System</li>
            <li className="hover:text-emerald-300 cursor-pointer transition-colors duration-200">Wall Insulation</li>
            <li className="hover:text-emerald-300 cursor-pointer transition-colors duration-200">Roof Insulation</li>
            <li className="hover:text-emerald-300 cursor-pointer transition-colors duration-200">Heat Pumps</li>
            {/* Add more services here if needed */}
          </ul>
        </div>
      </div>

      {/* Bottom Bar: Copyright and Policy */}
      <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Step4Eco | <span className="hover:text-emerald-400 cursor-pointer transition-colors duration-200">Privacy Policy</span> | Website by <span className="text-white font-semibold">Niranj C N</span>
      </div>
    </footer>
  );
}
