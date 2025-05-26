import React from 'react';

const services = [
  {
    title: 'Solar Panel Systems',
    icon: (
      <svg
        className="w-10 h-10 text-yellow-700 mr-4 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l1.5 4.5H18l-3.75 3 1.5 4.5L12 11.5 8.25 14.5 9.75 10 6 7h4.5L12 2z" />
        <circle cx="12" cy="12" r="10" />
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
        className="w-10 h-10 text-yellow-700 mr-4 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
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
        className="w-10 h-10 text-yellow-700 mr-4 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
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
        className="w-10 h-10 text-yellow-700 mr-4 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
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
    <div className="min-h-screen w-full bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-50 text-gray-900 font-sans px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-16">
      {/* Navbar placeholder */}
      {/* <Navbar /> */}

      <h1 className="text-5xl font-extrabold text-yellow-900 mb-12 tracking-wide drop-shadow-md text-center">
        Our Services
      </h1>

      <p className="mb-12 text-yellow-800 text-lg leading-relaxed text-center max-w-4xl mx-auto">
        We provide cutting-edge, eco-friendly solutions to enhance your home's comfort,
        efficiency, and sustainability. Learn more about each service below and how they
        can benefit you.
      </p>

      <div className="space-y-16">
        {services.map(({ title, icon, description, benefits }, idx) => (
          <section key={idx} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
            {/* Icon */}
            <div className="mt-1">{icon}</div>

            {/* Text content */}
            <div>
              <h2 className="text-3xl font-semibold text-yellow-900 mb-3">{title}</h2>

              <p className="text-yellow-800 leading-relaxed mb-4">
                {description}
              </p>

              <h3 className="text-yellow-700 font-semibold mb-2 tracking-wide">
                Benefits:
              </h3>
              <ul className="list-disc list-inside text-yellow-700 space-y-1 text-sm font-medium">
                {benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
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
