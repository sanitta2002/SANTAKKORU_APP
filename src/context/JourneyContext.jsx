import React, { createContext, useContext, useState } from 'react';

const JourneyContext = createContext();

export const STEPS = {
  LANDING: 'LANDING',
  WRITING: 'WRITING',
  LAUNCHING: 'LAUNCHING',
  WORKSHOP: 'WORKSHOP',
  REVEAL: 'REVEAL'
};

export const JourneyProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(STEPS.LANDING);
  const [wishData, setWishData] = useState({ name: '', wish: '', kindness: '' });

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  const saveWish = (data) => {
    setWishData(prev => ({ ...prev, ...data }));
  };

  return (
    <JourneyContext.Provider value={{ currentStep, goToStep, wishData, saveWish }}>
      {children}
    </JourneyContext.Provider>
  );
};

export const useJourney = () => useContext(JourneyContext);
