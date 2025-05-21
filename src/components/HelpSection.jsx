import React from "react";
import { FaLeaf, FaThermometerHalf, FaHome, FaMoneyBillWave } from "react-icons/fa";

const HelpSection = () => {
  return (
    <div className="bg-white text-gray-800 pt-24 pb-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="border-l-4 border-green-500 pl-4 mb-6">
          <h2 className="text-3xl font-bold">STEP4ECO ARE HERE TO HELP YOU!</h2>
          <p className="text-xs text-gray-600 mt-1">GRANTS AND LOANS AVAILABLE</p>
        </div>
        <p className="mb-10 text-xs uppercase tracking-wide font-semibold text-gray-700">
          ACCREDITED INSTALLERS OF ENERGY EFFICIENCY MEASURES IN YOUR HOME OR BUSINESS
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Renewable Energy */}
          <div className="flex items-start gap-4 max-w-md">
            <FaLeaf className="text-4xl mt-1 text-green-600" />
            <div>
              <h3 className="font-bold uppercase text-sm">Renewable Energy</h3>
              <p className="text-xs mt-2 leading-relaxed">
                STEP4ECO are expert installers of Air Source Heat Pumps <br />
                and Solar PV. These are renewable energies. <br />
                Lower your carbon footprint and improve energy efficiency. <br />
                Government funding is available to help you meet Net Zero.
              </p>
            </div>
          </div>

          {/* Heating Systems */}
          <div className="flex items-start gap-4 max-w-md">
            <FaThermometerHalf className="text-4xl mt-1 text-green-600" />
            <div>
              <h3 className="font-bold uppercase text-sm">Heating Systems</h3>
              <p className="text-xs mt-2 leading-relaxed">
                If an Air Source Heat Pump is not suitable,<br />
                our heating engineers can install an energy-efficient <br />
                Gas or Electric Boiler tailored for your property. <br />
                Don’t delay — contact us today!
              </p>
            </div>
          </div>

          {/* Insulation */}
          <div className="flex items-start gap-4 max-w-md">
            <FaHome className="text-4xl mt-1 text-green-600" />
            <div>
              <h3 className="font-bold uppercase text-sm">Insulation</h3>
              <p className="text-xs mt-2 leading-relaxed">
                Maximize your home's energy efficiency <br />
                by installing loft, internal wall and room-in-roof insulation. <br />
                Prevent heat loss and keep your home warm all year.
              </p>
            </div>
          </div>

          {/* Funding */}
          <div className="flex items-start gap-4 max-w-md">
            <FaMoneyBillWave className="text-4xl mt-1 text-green-600" />
            <div>
              <h3 className="font-bold uppercase text-sm">Funding</h3>
              <p className="text-xs mt-2 leading-relaxed">
                Find out about grants and affordable loans <br />
                through Home Energy Scotland or Business Energy Scotland. <br />
                Visit the funding section on our website to learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
