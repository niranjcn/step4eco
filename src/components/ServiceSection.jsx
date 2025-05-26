import React from 'react';
import bgImage from '../assets/images/bgimage1.jpg';
import { Lightbulb } from 'lucide-react';

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
    <section
      className="relative bg-center bg-cover text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: 'fixed',
        minHeight: '80vh',
      }}
    >
      {/* Overlay */}
      <div className="bg-black/50 w-full h-full px-4 py-16 sm:py-20 md:py-24 lg:py-28">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            SERVICES WE PROVIDE
          </h2>
          <p className="text-base sm:text-lg mt-2">
            TO SUPPLY & INSTALL
          </p>
          <p className="text-sm sm:text-base mt-1">
            ENERGY-EFFICIENT IMPROVEMENTS
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 px-2 sm:px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-sm text-black shadow-lg px-6 py-16 sm:p-12 flex flex-col items-center justify-center text-center rounded-md hover:scale-105 transition-transform duration-300"
            >
              <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-yellow-500" />
              <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1">
                {service.title.toUpperCase()}
              </h3>
              <p className="text-xs sm:text-sm">{service.description}</p>
              <p className="text-xs sm:text-sm font-medium mt-1 text-green-700">{service.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
