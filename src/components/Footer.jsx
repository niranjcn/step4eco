import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import logo from '../assets/images/logo.jpg'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        {/* Left: Logo and About */}
        <div>
          {/* Replace src below with your actual logo path */}
          <img src= {logo} alt="Step4Eco Logo" className="w-36 mb-4" />
          <p className="text-sm text-gray-300">
            Step4Eco is a lead generation company specialising 
            in connecting clients with top-tier installation teams across UK
             through various fully  funded free government grants. 
            Step4Eco is dedicated to empowering communities with sustainable
            solutions through innovative energy practices and eco-conscious
            technologies.
          </p>
          <div className="flex space-x-4 mt-4 text-xl text-green-500">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

        {/* Center: Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Contact Us</h2>
          <div className="text-gray-300 text-sm space-y-2">
            <p className="flex items-start">
              <MdLocationOn className="text-green-500 mt-1 mr-2" />
              86 Llandaff Drive LL19 8TT<br />United Kingdom
            </p>
            <p className="flex items-center">
              <MdPhone className="text-green-500 mr-2" /> 07554463387
            </p>
            <p className="flex items-center">
              <MdEmail className="text-green-500 mr-2" />
              info.step4eco@gmail.com
            </p>
          </div>
        </div>

        {/* Right: Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Services</h2>
          <ul className="space-y-2 text-green-400 text-sm">
            <li>Solar Panel System</li>
            <li>Wall Insulation</li>
            <li>Roof Insulation</li>
            <li>Heat Pumps</li>
           
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
        © 2025 Step4Eco | <span className="hover:text-green-400 cursor-pointer">Privacy Policy</span> | Website by <span className="text-white">Niranj C N</span>
      </div>
    </footer>
  );
}
