import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EligibilityChecker = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    homeowner: '',
    benefit: '',
    propertyType: '',
    heatingSystem: '',
    insulation: '',
  });
  const [eligible, setEligible] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step === 5) {
      const isEligible =
        formData.homeowner === 'yes' &&
        formData.benefit === 'yes' &&
        (formData.insulation === 'no' || formData.heatingSystem === 'old');
      setEligible(isEligible);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleRestart = () => {
    setStep(1);
    setFormData({
      homeowner: '',
      benefit: '',
      propertyType: '',
      heatingSystem: '',
      insulation: '',
    });
    setEligible(null);
  };

  const QuestionStep = () => {
    const stepTitleClasses = 'text-2xl font-semibold mb-6 text-slate-800';
    const selectClasses =
      'w-full p-3 rounded-lg bg-white text-slate-800 border border-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500';

    switch (step) {
      case 1:
        return (
          <>
            <h2 className={stepTitleClasses}>Are you a homeowner?</h2>
            <select name="homeowner" onChange={handleChange} value={formData.homeowner} className={selectClasses}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </>
        );
      case 2:
        return (
          <>
            <h2 className={stepTitleClasses}>Do you receive government benefits?</h2>
            <select name="benefit" onChange={handleChange} value={formData.benefit} className={selectClasses}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </>
        );
      case 3:
        return (
          <>
            <h2 className={stepTitleClasses}>What is your property type?</h2>
            <select name="propertyType" onChange={handleChange} value={formData.propertyType} className={selectClasses}>
              <option value="">Select</option>
              <option value="house">House</option>
              <option value="flat">Flat</option>
            </select>
          </>
        );
      case 4:
        return (
          <>
            <h2 className={stepTitleClasses}>What type of heating system do you have?</h2>
            <select name="heatingSystem" onChange={handleChange} value={formData.heatingSystem} className={selectClasses}>
              <option value="">Select</option>
              <option value="modern">Modern Boiler</option>
              <option value="old">Old Boiler / None</option>
            </select>
          </>
        );
      case 5:
        return (
          <>
            <h2 className={stepTitleClasses}>Do you already have insulation installed?</h2>
            <select name="insulation" onChange={handleChange} value={formData.insulation} className={selectClasses}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-2xl bg-white p-8 rounded-3xl shadow-2xl border border-lime-500"
      >
        <h1 className="text-4xl font-extrabold text-center text-lime-600 mb-10 tracking-wide uppercase">
          STEP4ECO Eligibility Checker
        </h1>

        {eligible === null ? (
          <div className="space-y-8">
            <QuestionStep />
            <button
              onClick={handleNext}
              disabled={!Object.values(formData)[step - 1]}
              className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 disabled:opacity-40"
            >
              {step === 5 ? 'Check Eligibility' : 'Next'}
            </button>
          </div>
        ) : (
          <div className="text-center">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className={`text-2xl font-bold mb-6 ${eligible ? 'text-green-500' : 'text-red-500'}`}
            >
              {eligible
                ? 'Congratulations! You are eligible for support under the scheme.'
                : 'Unfortunately, you may not be eligible based on your answers.'}
            </motion.h2>
            <button
              onClick={handleRestart}
              className="mt-6 bg-lime-100 hover:bg-lime-200 text-slate-900 font-semibold px-6 py-2 rounded-md shadow-md"
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
