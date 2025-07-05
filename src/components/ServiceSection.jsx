import React from 'react';
import bgImage from '../assets/images/bgimage1.jpg'; // Background image for the section
import { Lightbulb } from 'lucide-react'; // Icon for services

// Array of service objects, each containing a title, description, and benefit.
const services = [
  {
    title: "Solar Panel Systems",
    description: "Generate your own electricity using sunlight.",
    benefit: "Reduces energy bills and carbon footprint."
  },
  {
    title: "Wall Insulation",
    description: "Improves indoor temperature stability.",
    benefit: "Lowers heating and cooling costs year-round."
  },
  {
    title: "Roof Insulation",
    description: "Prevents heat loss through your roof.",
    benefit: "Enhances energy efficiency and comfort."
  },
  {
    title: "Heat Pumps",
    description: "Efficiently transfers heat for heating or cooling.",
    benefit: "Eco-friendly alternative to traditional systems."
  }
];

const ServiceSection = () => {
  return (
    // Main section container with a fixed background image for a parallax-like effect.
    // Enhanced overlay for better text readability.
    <section
      className="relative bg-center bg-cover text-white font-inter"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: 'fixed', // Ensures the background image scrolls with a parallax effect
        minHeight: '85vh', // Slightly increased minimum height for more impact
      }}
    >
      {/* Dark overlay for better text contrast and a modern look */}
      <div className="bg-black/60 w-full h-full px-4 py-16 sm:py-20 md:py-24 lg:py-28">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-lime-300 drop-shadow-md">
            SERVICES WE PROVIDE
          </h2>
          <p className="text-lg sm:text-xl mt-3 text-gray-200">
            TO SUPPLY & INSTALL
          </p>
          <p className="text-base sm:text-lg mt-2 text-gray-300">
            ENERGY-EFFICIENT IMPROVEMENTS
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 px-2 sm:px-4">
          {services.map((service, index) => (
            // Individual service card with a frosted glass effect, shadows, and hover animations.
            <div
              key={index}
              className="bg-white/15 backdrop-blur-md text-white shadow-xl px-7 py-16 sm:p-14
                         flex flex-col items-center justify-center text-center rounded-xl
                         hover:scale-105 transition-transform duration-400 ease-out
                         border border-white/20 transform hover:shadow-2xl hover:bg-white/20 cursor-pointer"
            >
              {/* Icon for the service, with a vibrant green color and subtle animation */}
              <Lightbulb className="w-12 h-12 sm:w-14 sm:h-14 mb-5 text-lime-400 animate-pulse-slow" />
              {/* Service title with bold, uppercase styling */}
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-2 text-lime-200">
                {service.title.toUpperCase()}
              </h3>
              {/* Service description */}
              <p className="text-sm sm:text-base text-gray-100 leading-relaxed">{service.description}</p>
              {/* Service benefit with a distinct green color */}
              <p className="text-sm sm:text-base font-semibold mt-3 text-emerald-400">{service.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
