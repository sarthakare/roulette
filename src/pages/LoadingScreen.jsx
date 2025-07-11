import React, { useEffect, useState } from 'react';
import rouletteLoading from '../assets/images/roulette_loading.png';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress(progress + 2);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [progress, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <img src={rouletteLoading} alt="Roulette Loading" className="w-64 h-64 mb-8" />
      <div className="w-80 h-4 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-400 transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-4 text-white">Loading... {progress}%</p>
    </div>
  );
};

export default LoadingScreen;
