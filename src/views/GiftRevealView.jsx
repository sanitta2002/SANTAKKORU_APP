import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useJourney, STEPS } from '../context/JourneyContext';
import { RefreshCcw, Share2, Award, Heart } from 'lucide-react';

const MESSAGES = [
  "Believe in the magic within you. Your kindness lights up the world more than any star.",
  "The greatest gift is the love you share with others. Keep shining bright!",
  "Ho Ho Ho! Never lose your sense of wonder. Miracles happen to those who believe.",
  "Your heart is as big as the North Pole! Stay wonderful.",
  "Christmas is not just a day, it's a feeling. Keep it in your heart all year round.",
  "You are capable of amazing things. Trust in yourself!",
  "May your days be merry and bright, and your heart be light.",
  "Sending you cosmic hugs from the stars. You are loved!",
  "Spread joy wherever you go, and it will always come back to you.",
  "Dream big, little star. The universe is listening."
];

const GiftRevealView = () => {
  const { wishData, goToStep } = useJourney();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Pick random message on mount
    setMessage(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
    
    // Auto open after "landing" animation
    const timer = setTimeout(() => {
        setIsOpen(true);
    }, 1500); // Wait for landing

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center relative z-10 px-4 overflow-hidden">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="gift-box"
            className="text-center relative"
            initial={{ scale: 20, rotate: 180, opacity: 0 }} // Start BIG (like it was thrown at camera)
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <div className="text-[150px] drop-shadow-[0_0_50px_rgba(255,215,0,0.5)] animate-bounce">
                🎁
            </div>
            <p className="mt-8 text-xl font-fantasy text-accent animate-pulse">Incoming Gift for {wishData.name}...</p>
          </motion.div>
        ) : (
          <motion.div
            key="message"
            initial={{ opacity: 0, scale: 0.8, rotateX: 90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.1)] text-center transform perspective-1000"
          >
            <motion.div 
               initial={{ scale: 0 }} animate={{ scale: 1, rotate: 360 }} transition={{ delay: 0.2 }}
               className="w-20 h-20 bg-gradient-to-br from-santa-red to-secondary rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg"
            >
              <Heart className="text-white w-10 h-10 fill-current" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-fantasy text-accent mb-6">
              A Gift from the Stars
            </h2>
            
            <p className="text-lg md:text-xl text-snow/90 leading-loose italic font-serif mb-8">
              "{message}"
            </p>
            
            <div className="text-sm text-cyan-200/60 mb-8 font-mono">
               Original Wish: "{wishData.wish}"
            </div>

            <div className="flex justify-center gap-4">
              <button 
                onClick={() => goToStep(STEPS.LANDING)}
                className="px-6 py-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <RefreshCcw size={18} /> New Journey
              </button>
              <button className="px-6 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors flex items-center gap-2">
                <Share2 size={18} /> Share Magic
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GiftRevealView;
