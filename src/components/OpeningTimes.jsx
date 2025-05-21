import { Clock3 } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';  // Importing social media icons

export default function OpeningTimes() {
  return (
    <div className="w-full bg-gray-900 text-white text-sm flex justify-between items-center px-8 py-4">
      <div className="flex items-center gap-2">
        <Clock3 size={18} className="text-green-400" />
        <span>Opening Times: Mon–Thurs 8am–4.30pm, Fri 8am–3.30pm, Sat & Sun – Closed.</span>
      </div>
      <div className="hidden sm:flex gap-6 items-center">
        <span>Follow Us:</span>
        <a href="#" className="hover:text-green-400">
          <FaFacebookF size={18} className="text-green-400" />
        </a>
        <a href="#" className="hover:text-green-400">
          <FaInstagram size={18} className="text-green-400" />
        </a>
        <a href="#" className="hover:text-green-400">
          <FaTwitter size={18} className="text-green-400" />
        </a>
      </div>
    </div>
  );
}
