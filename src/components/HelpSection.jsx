import React from "react";
import { FaLeaf, FaThermometerHalf, FaHome, FaMoneyBillWave } from "react-icons/fa"; // Font Awesome icons

const HelpSection = () => {
  return (
    // Main container with a light, clean background and generous padding.
    <div className="bg-gray-50 text-gray-800 pt-24 pb-12 px-6 md:px-20 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Section title with a prominent green border and bold text. */}
        <div className="border-l-4 border-emerald-500 pl-5 mb-8">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">STEP4ECO ARE HERE TO HELP YOU!</h2>
          <p className="text-sm text-emerald-600 mt-2 uppercase tracking-wide font-semibold">GRANTS AND LOANS AVAILABLE</p>
        </div>
        {/* Introductory paragraph with clear, concise text. */}
        <p className="mb-12 text-base uppercase tracking-wide font-semibold text-gray-700 max-w-4xl mx-auto">
          ACCREDITED INSTALLERS OF ENERGY EFFICIENCY MEASURES IN YOUR HOME OR BUSINESS
        </p>

        {/* Grid layout for the four help categories, with consistent spacing. */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Renewable Energy Section */}
          <div className="flex items-start gap-6 max-w-md p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Icon with vibrant green color and slightly larger size. */}
            <FaLeaf className="text-5xl mt-1 text-emerald-600 flex-shrink-0" />
            <div>
              {/* Category title with bold, uppercase styling. */}
              <h3 className="font-bold uppercase text-lg text-gray-900">Renewable Energy</h3>
              {/* Description with improved line height for readability. */}
              <p className="text-sm mt-2 leading-relaxed text-gray-700">
                STEP4ECO are expert installers of Air Source Heat Pumps <br />
                and Solar PV. These are renewable energies. <br />
                Lower your carbon footprint and improve energy efficiency. <br />
                Government funding is available to help you meet Net Zero targets.
              </p>
            </div>
          </div>

          {/* Heating Systems Section */}
          <div className="flex items-start gap-6 max-w-md p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Icon with vibrant green color. */}
            <FaThermometerHalf className="text-5xl mt-1 text-emerald-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold uppercase text-lg text-gray-900">Heating Systems</h3>
              <p className="text-sm mt-2 leading-relaxed text-gray-700">
                If an Air Source Heat Pump is not suitable,<br />
                our heating engineers can install an energy-efficient <br />
                Gas or Electric Boiler tailored for your property. <br />
                Don’t delay — contact us today!
              </p>
            </div>
          </div>

          {/* Insulation Section */}
          <div className="flex items-start gap-6 max-w-md p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Icon with vibrant green color. */}
            <FaHome className="text-5xl mt-1 text-emerald-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold uppercase text-lg text-gray-900">Insulation</h3>
              <p className="text-sm mt-2 leading-relaxed text-gray-700">
                Maximize your home's energy efficiency <br />
                by installing loft, internal wall and room-in-roof insulation. <br />
                Prevent heat loss and keep your home warm all year round.
              </p>
            </div>
          </div>

          {/* Funding Section */}
          <div className="flex items-start gap-6 max-w-md p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Icon with vibrant green color. */}
            <FaMoneyBillWave className="text-5xl mt-1 text-emerald-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold uppercase text-lg text-gray-900">Funding</h3>
              <p className="text-sm mt-2 leading-relaxed text-gray-700">
                Find out about grants and affordable loans <br />
                through Home Energy Scotland or Business Energy Scotland. <br />
                Visit the funding section on our website to learn more.
              </p>
              {/* Formatted list of funding types for better readability. */}
              <ul className="list-none mt-3 space-y-1 text-sm text-gray-700">
                <li>✅ Grants</li>
                <li>💷 Interest-free Loans</li>
                <li>🏠 Home Energy Grants</li>
                <li>🏢 Business Grants</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
