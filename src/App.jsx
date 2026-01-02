import React from 'react';
import { JourneyProvider, useJourney, STEPS } from './context/JourneyContext';
import CosmicBackground from './components/CosmicBackground';
import LandingView from './views/LandingView';
import WishWritingView from './views/WishWritingView';
import LaunchSequenceView from './views/LaunchSequenceView';
import WorkshopView from './views/WorkshopView';
import GiftRevealView from './views/GiftRevealView';
import BackgroundMusic from './components/BackgroundMusic';
import { AnimatePresence, motion } from 'framer-motion';

const JourneyContainer = () => {
  const { currentStep } = useJourney();

  const renderStep = () => {
    switch (currentStep) {
      case STEPS.LANDING:
        return <LandingView />;
      case STEPS.WRITING:
        return <WishWritingView />;
      case STEPS.LAUNCHING:
        return <LaunchSequenceView />;
      case STEPS.WORKSHOP:
        return <WorkshopView />;
      case STEPS.REVEAL:
        return <GiftRevealView />;
      default:
        return <LandingView />;
    }
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden font-sans">
      <CosmicBackground />
      <BackgroundMusic />
      <AnimatePresence mode="wait">
        <motion.div
            key={currentStep}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

function App() {
  return (
    <JourneyProvider>
      <JourneyContainer />
    </JourneyProvider>
  );
}

export default App;
