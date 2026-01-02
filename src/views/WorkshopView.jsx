import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useJourney, STEPS } from '../context/JourneyContext';

const WorkshopView = () => {
  const { goToStep, wishData } = useJourney();
  const [phase, setPhase] = useState('receiving'); // receiving, dancing, throwing

  useEffect(() => {
    // 1. Receive Signal (0-2s)
    const dancingTimer = setTimeout(() => {
      setPhase('dancing');
    }, 3000);

    // 2. Dance (2-5s) -> Throw
    const throwingTimer = setTimeout(() => {
      setPhase('throwing');
    }, 6000);

    // 3. Throw (5-6s) -> Reveal
    const revealTimer = setTimeout(() => {
      goToStep(STEPS.REVEAL);
    }, 7000);

    return () => {
      clearTimeout(dancingTimer);
      clearTimeout(throwingTimer);
      clearTimeout(revealTimer);
    };
  }, [goToStep]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center relative z-10 overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-blue-900/20 backdrop-blur-[2px]"
      />

      <div className="relative z-20 text-center w-full max-w-4xl px-4">
        
        {/* Santa Container */}
        <AnimateSanta phase={phase} />

        {/* Text Container */}
        <div className="h-32 mt-8">
            {phase === 'receiving' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h2 className="text-4xl font-fantasy text-cyan-200 mb-6 tracking-wide drop-shadow-lg">
                    NORTH POLE CONTROL
                    </h2>
                    <div className="space-y-2 font-mono text-cyan-100/80 text-lg">
                         <Typewriter text={`* DECODING WISH FROM ${wishData.name?.toUpperCase()}...`} />
                    </div>
                </motion.div>
            )}
            
            {phase === 'dancing' && (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-accent font-fantasy text-3xl animate-pulse">
                    HO HO HO! A WONDERFUL WISH!
                </motion.div>
            )}

            {phase === 'throwing' && (
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white font-bold text-2xl">
                    CATCH! 🎁
                </motion.div>
            )}
        </div>
      </div>
    </div>
  );
};

// Sub-components for cleaner internal logic
const AnimateSanta = ({ phase }) => {
    const variants = {
        receiving: { scale: 1, rotate: 0, y: 0 },
        dancing: { 
            scale: [1, 1.1, 1, 1.1, 1], 
            rotate: [0, -10, 10, -10, 10, 0], 
            y: [0, -20, 0, -20, 0],
            transition: { duration: 1, repeat: Infinity } 
        },
        throwing: { 
            scale: [1, 1.5, 0], 
            rotate: 0,
            y: 0,
            transition: { duration: 0.8, ease: "backIn" }
        }
    };

    return (
        <div className="relative h-64 w-64 mx-auto flex items-center justify-center">
            {/* The Gift Bag (Only appears when throwing) */}
            {phase === 'throwing' && (
                 <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 8, opacity: [0, 1, 1] }} 
                    transition={{ duration: 0.8, ease: "easeIn" }}
                    className="absolute text-[100px] z-30"
                 >
                    🎁
                 </motion.div>
            )}

            {/* Santa */}
            <motion.div
                variants={variants}
                animate={phase}
                className="w-48 h-48 bg-black/40 rounded-full border border-cyan-400/50 flex items-center justify-center shadow-[0_0_40px_rgba(0,255,255,0.2)] text-[100px] relative z-20"
            >
                🎅
            </motion.div>
        </div>
    );
};

const Typewriter = ({ text }) => {
    // Simple text effect
    return <span>{text}</span>;
}

export default WorkshopView;
