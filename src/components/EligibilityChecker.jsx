import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EligibilityChecker = () => {
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
  const [eligible, setEligible] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step === 7) {
      const isEligible =
        formData.homeowner === 'yes' &&
        ((formData.benefit === 'yes') || (formData.lowIncome === 'yes' || formData.medicalCondition === 'yes')) &&
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
      lowIncome: '',
      medicalCondition: '',
      propertyType: '',
      heatingSystem: '',
      insulation: '',
    });
    setEligible(null);
  };

  const QuestionStep = () => {
    const stepTitleClasses = 'text-2xl font-semibold mb-6 text-slate-800';
    const selectClasses =
      'w-full p-3 rounded-lg bg-white text-black border border-slate-300 focus:outline-none focus:ring-2 focus:ring-lime-500';

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
        if (formData.benefit === 'no') {
          return (
            <>
              <h2 className={stepTitleClasses}>Is your total household income below £31,000?</h2>
              <select name="lowIncome" onChange={handleChange} value={formData.lowIncome} className={selectClasses}>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </>
          );
        } else {
          setStep(4);
          return null;
        }
      case 4:
        if (formData.benefit === 'no') {
          return (
            <>
              <h2 className={stepTitleClasses}>Do you or someone in your household have a medical condition made worse by the cold?</h2>
              <select name="medicalCondition" onChange={handleChange} value={formData.medicalCondition} className={selectClasses}>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </>
          );
        } else {
          setStep(5);
          return null;
        }
      case 5:
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
      case 6:
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
      case 7:
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
    <div className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-2xl bg-white p-8 rounded-3xl shadow-2xl border border-lime-500"
      >
        <h1 className="text-4xl font-extrabold text-center text-lime-500 mb-10 tracking-wide uppercase">
          ECO GRANR ELIGIBILITY CHECKER
        </h1>

        {eligible === null ? (
          <div className="space-y-8">
            <QuestionStep />
            <button
              onClick={handleNext}
              disabled={!Object.values(formData)[step - 1]}
              className="w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 disabled:opacity-40"
            >
              {step === 7 ? 'Check Eligibility' : 'Next'}
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
                ? 'Congratulations! You may be eligible for support under the scheme.'
                : 'Unfortunately, based on your answers, you may not qualify under the scheme.'}
            </motion.h2>
            <button
              onClick={handleRestart}
              className="mt-6 bg-slate-200 hover:bg-slate-300 text-black font-semibold px-6 py-2 rounded-md shadow-md"
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
