import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IS2 from '../assets/images/slider2.jpg';
import IS3 from '../assets/images/slider3.jpg';
import IS4 from '../assets/images/slider4.jpg';
import IS7 from '../assets/images/slider7.jpg';

const slides = [
  {
    id: 2,
    image: IS2,
    title: 'ECO-FRIENDLY INSULATION',
    description:
      'Choose sustainable materials for a greener future. Our solutions help cut energy waste while protecting the environment.',
    button: 'Explore Options',
  },
  {
    id: 3,
    image: IS3,
    title: 'LOWER ENERGY BILLS',
    description:
      'Effective insulation drastically reduces energy consumption. Save money and the planet together.',
    button: 'See Benefits',
  },
  {
    id: 4,
    image: IS4,
    title: 'COMFORTABLE LIVING',
    description:
      'Keep your home cozy all year round with our modern insulation techniques.',
    button: 'Get Started',
  },
  {
    id: 7,
    image: IS7,
    title: 'FLOOR INSULATION',
    description:
      'Don’t forget the floors—optimize energy efficiency from bottom to top.',
    button: 'Improve Now',
  },
];

const cornerVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.3, ease: 'easeOut' },
  }),
};

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={slides[index].id}
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={slides[index].image}
            alt="Slide"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
            <motion.div
              key={slides[index].id + '-content'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="relative text-white text-center px-4 sm:px-6 py-6 sm:py-8 max-w-[95%] sm:max-w-xl"
            >
              {/* Border corners animation */}
              {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(
                (corner, i) => (
                  <motion.div
                    key={corner}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={cornerVariants}
                    className={`absolute w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-2 border-green-500 ${
                      corner === 'top-left' && 'top-0 left-0 border-b-0 border-r-0'
                    } ${corner === 'top-right' && 'top-0 right-0 border-b-0 border-l-0'}
                    ${corner === 'bottom-left' && 'bottom-0 left-0 border-t-0 border-r-0'}
                    ${corner === 'bottom-right' && 'bottom-0 right-0 border-t-0 border-l-0'}`}
                  />
                )
              )}

              {/* Text & Button */}
              <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
              >
                {slides[index].title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-sm sm:text-base mb-6 tracking-wide leading-relaxed"
              >
                {slides[index].description}
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="border border-green-600 text-white hover:bg-green-600 transition px-6 py-2 rounded-md font-medium"
              >
                {slides[index].button}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Slider;
