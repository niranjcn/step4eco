import Logo from '../assets/images/mainlogo2.png';
import { Mail, MapPin } from 'lucide-react';

export default function Banner() {
  return (
    <div className="hidden lg:block bg-gray-800 text-white py-3 px-8">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="flex items-center gap-6">
          <img src={Logo} alt="Step4Eco Logo" className="h-20 w-auto object-contain" />
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:gap-12 mt-6 md:mt-0">
          <div className="flex items-center gap-4 hover:text-green-400 transition">
            <Mail className="text-green-400" />
            <div>
              <div className="text-xl font-bold">0000 00000</div>
              <div className="text-sm">step4eco.com</div>
            </div>
          </div>
          <div className="flex items-center gap-4 hover:text-green-400 transition mt-4 md:mt-0">
            <MapPin className="text-green-400" />
            <div>
              <div className="text-xl font-bold">xx xxxxx xxxxx</div>
              <div className="text-sm">xx xxxxxxx xxxxx</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
