import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Used for smooth animations

const EligibilityChecker = () => {
  // State variables for managing the multi-step form, form data, and eligibility result.
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    homeowner: '',
    benefit: '',
    lowIncome: '',
    medicalCondition: '',
    propertyType: '',
    heatingSystem: '',
    insulation: '',
  });
  const [eligible, setEligible] = useState(null); // null: not checked, true: eligible, false: not eligible

  // Handles changes to form input fields.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles navigation to the next step or checks eligibility if it's the last step.
  const handleNext = () => {
    if (step === 7) {
      // Eligibility logic:
      // Must be a homeowner AND (receive benefits OR low income OR medical condition)
      // AND (no insulation OR old heating system)
      const isEligible =
        formData.homeowner === 'yes' &&
        ((formData.benefit === 'yes') || (formData.lowIncome === 'yes' || formData.medicalCondition === 'yes')) &&
        (formData.insulation === 'no' || formData.heatingSystem === 'old');
      setEligible(isEligible);
    } else {
      setStep((prev) => prev + 1); // Move to the next step
    }
  };

  // Resets the form to its initial state.
  const handleRestart = () => {
    setStep(1);
    setFormData({
      homeowner: '',
      benefit: '',
      lowIncome: '',
      medicalCondition: '',
      propertyType: '',
      heatingSystem: '',
      insulation: '',
    });
    setEligible(null); // Reset eligibility status
  };

  // Component to render the current question step based on the 'step' state.
  const QuestionStep = () => {
    // Tailwind classes for consistent styling of question titles and select boxes.
    const stepTitleClasses = 'text-2xl font-bold mb-6 text-emerald-800 text-center';
    const selectClasses =
      'w-full p-4 rounded-lg bg-white text-gray-800 border border-emerald-300 focus:outline-none focus:ring-3 focus:ring-emerald-500 transition-all duration-300 shadow-sm hover:border-emerald-400';

    switch (step) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h2 className={stepTitleClasses}>Are you a homeowner?</h2>
            <select name="homeowner" onChange={handleChange} value={formData.homeowner} className={selectClasses}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </motion.div>
        );
      case 2:
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h2 className={stepTitleClasses}>Do you receive government benefits?</h2>
            <select name="benefit" onChange={handleChange} value={formData.benefit} className={selectClasses}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </motion.div>
        );
      case 3:
        // Skip this question if benefits are received.
        if (formData.benefit === 'no') {
          return (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <h2 className={stepTitleClasses}>Is your total household income below £31,000?</h2>
              <select name="lowIncome" onChange={handleChange} value={formData.lowIncome} className={selectClasses}>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </motion.div>
          );
        } else {
          setStep(4); // Automatically advance if not applicable
          return null;
        }
      case 4:
        // Skip this question if benefits are received (as per original logic).
        if (formData.benefit === 'no') {
          return (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <h2 className={stepTitleClasses}>Do you or someone in your household have a medical condition made worse by the cold?</h2>
              <select name="medicalCondition" onChange={handleChange} value={formData.medicalCondition} className={selectClasses}>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </motion.div>
          );
        } else {
          setStep(5); // Automatically advance if not applicable
          return null;
        }
      case 5:
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h2 className={stepTitleClasses}>What is your property type?</h2>
            <select name="propertyType" onChange={handleChange} value={formData.propertyType} className={selectClasses}>
              <option value="">Select</option>
              <option value="house">House</option>
              <option value="flat">Flat</option>
            </select>
          </motion.div>
        );
      case 6:
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h2 className={stepTitleClasses}>What type of heating system do you have?</h2>
            <select name="heatingSystem" onChange={handleChange} value={formData.heatingSystem} className={selectClasses}>
              <option value="">Select</option>
              <option value="modern">Modern Boiler</option>
              <option value="old">Old Boiler / None</option>
            </select>
          </motion.div>
        );
      case 7:
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h2 className={stepTitleClasses}>Do you already have insulation installed?</h2>
            <select name="insulation" onChange={handleChange} value={formData.insulation} className={selectClasses}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    // Main container with a subtle green background, centering the content.
    <div className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-lime-50 to-emerald-100 font-inter">
      {/* Main eligibility checker card with enhanced shadow, border, and rounded corners. */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl bg-white p-10 rounded-3xl shadow-2xl border border-emerald-300"
      >
        {/* Title of the checker with bold styling and tracking. */}
        <h1 className="text-4xl font-extrabold text-center text-emerald-600 mb-12 tracking-wide uppercase">
          ECO GRANT ELIGIBILITY CHECKER
        </h1>

        {/* Conditional rendering based on eligibility status */}
        {eligible === null ? (
          <div className="space-y-8">
            {/* Render the current question step */}
            <QuestionStep />
            {/* Next/Check Eligibility button with enhanced styling and hover effects. */}
            <button
              onClick={handleNext}
              disabled={!Object.values(formData)[step - 1]} // Disable if current step's answer is not selected
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg
                transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed
                focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
            >
              {step === 7 ? 'Check Eligibility' : 'Next'}
            </button>
          </div>
        ) : (
          // Display eligibility result
          <div className="text-center">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`text-3xl font-bold mb-8 ${eligible ? 'text-green-600' : 'text-red-500'}`}
            >
              {eligible
                ? 'Congratulations! You may be eligible for support under the scheme.'
                : 'Unfortunately, based on your answers, you may not qualify under the scheme. Please contact us for more information.'}
            </motion.h2>
            {/* Restart button with refined styling */}
            <button
              onClick={handleRestart}
              className="mt-8 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-8 py-3 rounded-full shadow-md
                transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Start Again
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default EligibilityChecker;
