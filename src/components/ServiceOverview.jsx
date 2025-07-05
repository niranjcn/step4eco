import React from 'react';

// Define the services data with titles, eco-themed SVG icons, descriptions, and benefits.
// The SVG icons are designed to be simple and align with the green energy theme.
const services = [
  {
    title: 'Solar Panel Systems',
    icon: (
      <svg
        className="w-12 h-12 text-emerald-600 mr-6 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        {/* Solar panel icon path */}
        <path d="M12 2l1.5 4.5H18l-3.75 3 1.5 4.5L12 11.5 8.25 14.5 9.75 10 6 7h4.5L12 2z" />
        <circle cx="12" cy="12" r="10" /> {/* Sun outline */}
      </svg>
    ),
    description: `Harness clean, renewable energy with our advanced solar panel systems. Utilizing cutting-edge photovoltaic technology, these systems maximize energy absorption even during cloudy conditions. By installing our solar panels, you reduce your dependence on conventional energy grids, lower electricity bills, and contribute positively to the environment.`,
    benefits: [
      'Lower electricity costs through self-generated power.',
      'Durable systems with over 25 years lifespan.',
      'Increase property value and energy independence.',
      'Support sustainability and reduce carbon footprint.',
      'Integration with smart energy management solutions.',
    ],
  },
  {
    title: 'Roof Insulation',
    icon: (
      <svg
        className="w-12 h-12 text-emerald-600 mr-6 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        {/* Roof/house icon path */}
        <path d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h14a1 1 0 001-1v-10" />
      </svg>
    ),
    description: `Our roof insulation solutions create an effective barrier that minimizes heat transfer through your roof. This helps keep your home warm during winters and cool during summers, improving comfort and reducing energy consumption. The materials used are eco-friendly and designed for longevity.`,
    benefits: [
      'Stabilizes indoor temperatures for year-round comfort.',
      'Reduces energy bills by enhancing heating and cooling efficiency.',
      'Protects your roof from thermal wear and extends its life.',
      'Noise dampening benefits for a quieter home environment.',
      'Environmentally friendly, safe for your family and pets.',
    ],
  },
  {
    title: 'Wall Insulation',
    icon: (
      <svg
        className="w-12 h-12 text-emerald-600 mr-6 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        {/* Wall/building icon path */}
        <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    description: `Wall insulation enhances your home’s thermal and acoustic performance. Using advanced eco-friendly materials, it reduces heat loss and noise penetration, creating a more energy-efficient and peaceful living space. Suitable for both new constructions and renovations.`,
    benefits: [
      'Maintains stable indoor temperatures all year.',
      'Lowers HVAC energy consumption and related costs.',
      'Improves soundproofing from outside disturbances.',
      'Prevents drafts and moisture for healthier air quality.',
      'Easy installation for new and existing walls.',
    ],
  },
  {
    title: 'Heat Pumps',
    icon: (
      <svg
        className="w-12 h-12 text-emerald-600 mr-6 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        {/* Heat pump/thermostat icon path */}
        <path d="M12 8v4l3 3M6 18V6a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2z" />
      </svg>
    ),
    description: `Our high-efficiency heat pumps provide both heating and cooling by transferring heat instead of generating it. This technology significantly reduces your energy usage and emissions while maintaining comfortable indoor temperatures all year round.`,
    benefits: [
      'Efficient heating in winter and cooling in summer.',
      'Lower energy consumption compared to traditional HVAC.',
      'Reduces environmental impact through fewer emissions.',
      'Compatible with renewable energy sources like solar.',
      'Quiet operation with smart, easy-to-use controls.',
    ],
  },
];

const ServicesPage = () => {
  return (
    // Main container with a soft, natural gradient background and consistent padding.
    <div className="min-h-screen w-full bg-gradient-to-br from-lime-50 via-green-50 to-emerald-100 text-gray-900 font-inter px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-16">

      {/* Main heading for the services page */}
      <h1 className="text-5xl font-extrabold text-emerald-800 mb-14 tracking-wide drop-shadow-sm text-center">
        Our Services
      </h1>

      {/* Introductory paragraph */}
      <p className="mb-16 text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
        We provide cutting-edge, eco-friendly solutions to enhance your home's comfort,
        efficiency, and sustainability. Learn more about each service below and how they
        can benefit you.
      </p>

      {/* Container for individual service sections */}
      <div className="space-y-20">
        {services.map(({ title, icon, description, benefits }, idx) => (
          // Each service section with responsive layout and subtle hover effects.
          <section
            key={idx}
            className="flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-8
                       p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
                       transform hover:-translate-y-1 border border-emerald-100"
          >
            {/* Icon for the service */}
            <div className="mt-2 flex-shrink-0">{icon}</div>

            {/* Text content for the service */}
            <div>
              {/* Service title with bold styling */}
              <h2 className="text-3xl font-bold text-emerald-700 mb-4">{title}</h2>

              {/* Service description */}
              <p className="text-gray-700 leading-relaxed mb-5">
                {description}
              </p>

              {/* Benefits heading */}
              <h3 className="text-emerald-600 font-semibold mb-3 tracking-wide uppercase text-sm">
                Benefits:
              </h3>
              {/* List of benefits with eco-friendly bullet points */}
              <ul className="list-none text-gray-600 space-y-2 text-base font-medium">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-emerald-500 mr-2 text-lg leading-none">🌿</span> {/* Eco-friendly bullet */}
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
