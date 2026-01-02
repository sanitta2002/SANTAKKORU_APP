import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useJourney, STEPS } from '../context/JourneyContext';

const LaunchSequenceView = () => {
  const { goToStep } = useJourney();

  useEffect(() => {
    // Automatically transition to Workshop after animation
    const timer = setTimeout(() => {
      goToStep(STEPS.WORKSHOP);
    }, 4500);
    return () => clearTimeout(timer);
  }, [goToStep]);

  return (
    <div className="h-screen w-full flex items-center justify-center relative z-10 overflow-hidden">
      <motion.div
        className="text-center"
        initial={{ scale: 1, opacity: 1, y: 0 }}
        animate={{ 
          scale: [1, 0.5, 0.1], 
          y: [0, -100, -800],
          opacity: [1, 1, 0]
        }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <div className="w-24 h-16 bg-[#FFFBF0] rounded shadow-[0_0_30px_rgba(255,215,0,0.6)] flex items-center justify-center relative rotate-12">
          <div className="w-2 h-2 rounded-full bg-red-600 absolute right-4" />
        </div>
        <div className="mt-8 text-accent font-fantasy text-xl tracking-widest animate-pulse">
          SENDING TO THE STARS...
        </div>
      </motion.div>

      {/* Speed lines effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="absolute top-1/2 left-1/2 w-[2px] h-[200px] bg-white transform -translate-x-1/2 -translate-y-1/2 blur-sm" />
      </motion.div>
    </div>
  );
};

export default LaunchSequenceView;
