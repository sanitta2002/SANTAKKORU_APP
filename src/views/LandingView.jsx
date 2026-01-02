import React from 'react';
import { motion } from 'framer-motion';
import { useJourney, STEPS } from '../context/JourneyContext';
import { Sparkles } from 'lucide-react';

const LandingView = () => {
  const { goToStep } = useJourney();

  return (
    <div className="flex flex-col items-center justify-center h-screen relative z-10 text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <span className="text-accent text-xl tracking-[0.3em] font-fantasy mb-4 block">THE NORTH POLE AWAITS</span>
        <h1 className="text-5xl md:text-7xl font-fantasy font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-snow to-blue-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
          Santa's Northbound
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="max-w-xl text-lg text-blue-100/90 mb-12 font-sans font-light leading-relaxed"
      >
        A magical journey through the stars to deliver your wish directly to Santa's hands.
      </motion.div>

      <motion.button
        onClick={() => goToStep(STEPS.WRITING)}
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        className="group relative px-8 py-4 bg-gradient-to-r from-secondary to-blue-900 border border-white/20 rounded-full text-xl font-fantasy tracking-widest overflow-hidden transition-all"
      >
        <span className="relative z-10 flex items-center gap-3">
          BEGIN JOURNEY <Sparkles className="w-5 h-5 text-accent animate-pulse" />
        </span>
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </motion.button>
    </div>
  );
};

export default LandingView;
