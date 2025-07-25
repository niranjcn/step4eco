import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from '../assets/images/mainlogo2.png';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'SERVICES', path: '/services' },
  { name: 'CONTACT US', path: '/contact' },
  { name: 'ELIGIBILITY CHECKER', path: '/eligibility' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="lg:bg-[#97f14e] bg-gray-800 md:bg-gray-800 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-around items-center">

        {/* Logo (only for screens smaller than md) */}
        <div className="md:hidden ">
          <img src={Logo} alt="Step4Eco Logo" className="h-18 w-auto" />
        </div>

        {/* Nav links for desktop */}
        <div className="hidden md:flex gap-20">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="relative text-yellow-900 font-semibold tracking-widest text-base transition-all duration-300 hover:text-white"
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 blur-sm transform -translate-x-1/2 transition-all duration-500 ease-out hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* Hamburger menu (only for screens smaller than md) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <Menu size={30} className="text-yellow-600" />
          </button>
        </div>
      </nav>

      {/* Slide-out mobile/tablet menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#fce38a] text-yellow-900 transition-transform duration-500 ease-in-out z-40 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col px-8 py-6`}
      >
        {/* Top bar: Logo + Close */}
        <div className="flex justify-between items-center mb-8">
          <img src={Logo} alt="Step4Eco Logo" className="h-14 w-auto" />
          <button onClick={() => setMenuOpen(false)}>
            <X size={30} className="text-yellow-800" />
          </button>
        </div>

        {/* Navigation items */}
        <div className="flex flex-col gap-6 text-lg font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-700 transition-colors duration-300"
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Social icons at bottom */}
        <div className="mt-auto pt-10 flex justify-around text-yellow-800">
          <a href="#" className="hover:text-yellow-600 transition">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-yellow-600 transition">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-yellow-600 transition">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}
