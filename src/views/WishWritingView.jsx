import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useJourney, STEPS } from '../context/JourneyContext';
import { Send, Feather } from 'lucide-react';

const WishWritingView = () => {
  const { saveWish, goToStep, wishData } = useJourney();
  const [localData, setLocalData] = useState(wishData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!localData.wish) return;
    saveWish(localData);
    goToStep(STEPS.LAUNCHING);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 px-4 relative z-10">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-2xl"
      >
        {/* Parchment Background */}
        <div className="absolute inset-0 bg-[#f4e4bc] rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] transform -rotate-1 skew-x-1" />
        <div className="absolute inset-0 bg-[#FFFBF0] rounded-xl shadow-inner opacity-90 backdrop-blur-sm transform rotate-1" />
        
        <div className="relative p-12 text-primary font-sans">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Feather className="text-secondary w-8 h-8" />
            <h2 className="text-3xl font-fantasy text-secondary border-b-2 border-secondary/20 pb-2">Dear Santa</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold uppercase tracking-wider text-secondary/70 mb-2">My Name</label>
              <input
                type="text"
                className="w-full bg-transparent border-b-2 border-primary/20 focus:border-secondary outline-none py-2 text-2xl font-fantasy placeholder-primary/30 transition-colors"
                placeholder="Your Name..."
                value={localData.name}
                onChange={(e) => setLocalData({ ...localData, name: e.target.value })}
                autoFocus
              />
            </div>

            <div>
              <label className="block text-sm font-semibold uppercase tracking-wider text-secondary/70 mb-2">My Wish</label>
              <textarea
                rows={6}
                className="w-full bg-transparent border-none outline-none text-xl leading-relaxed italic placeholder-primary/30 resize-none font-serif"
                style={{ backgroundImage: 'linear-gradient(transparent, transparent 31px, rgba(0,0,0,0.1) 32px)', backgroundSize: '100% 32px', lineHeight: '32px' }}
                placeholder="I wish for..."
                value={localData.wish}
                onChange={(e) => setLocalData({ ...localData, wish: e.target.value })}
              />
            </div>

            <div className="pt-4 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-secondary text-white px-8 py-3 rounded-full font-fantasy tracking-wider flex items-center gap-2 shadow-lg hover:bg-secondary/90 transition-colors"
              >
                SEAL & SEND <Send className="w-4 h-4" />
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default WishWritingView;
