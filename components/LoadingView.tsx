import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FishSymbol, Rocket, Sun, Umbrella } from "lucide-react";

const funnyWords = [
  "Squidiculous!",
  "Octo-puzzling!",
  "Sharktastic!",
  "Dolphinately fun!",
];

const tips = [
  {
    text: "Did you know? Dolphins are just gay sharks!",
    icon: <FishSymbol size={32} />,
  },
  { text: "Blast off with Rocket science!", icon: <Rocket size={32} /> },
  { text: "Stay cool under the Sun!", icon: <Sun size={32} /> },
  { text: "Get ready for a rainy day!", icon: <Umbrella size={32} /> },
];

const LoadingView: React.FC = () => {
  const [tipIndex, setTipIndex] = useState(0);
  const [funnyWordIndex, setFunnyWordIndex] = useState(0);

  useEffect(() => {
    const tipInterval = setInterval(() => {
      setTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
    }, 4000);

    const funnyWordInterval = setInterval(() => {
      setFunnyWordIndex((prevIndex) => (prevIndex + 1) % funnyWords.length);
    }, 3000);

    return () => {
      clearInterval(tipInterval);
      clearInterval(funnyWordInterval);
    };
  }, []);

  const currentTip = tips[tipIndex];
  const currentFunnyWord = funnyWords[funnyWordIndex];

  const textControls = useAnimation();
  const tipControls = useAnimation();

  useEffect(() => {
    textControls.start({ opacity: 0, x: -20 });
    tipControls.start({ opacity: 0, x: -20 });
    setTimeout(() => {
      textControls.start({ opacity: 1, x: 0 });
      tipControls.start({ opacity: 1, x: 0 });
    }, 200);
  }, [currentFunnyWord, currentTip]);

  return (
    <div className="text-center p-4 flex items-center justify-centers flex-col">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={textControls}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-2xl font-semibold">{currentFunnyWord}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={tipControls}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="text-xl mt-4 text-gray-600 flex items-center"
      >
        {currentTip.icon}
        <span className="ml-2">{currentTip.text}</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={tipControls}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="text-xl mt-4 text-gray-600 flex items-center animate-pulse"
      >
        <span className="ml-2 text-center">Just Loading</span>
      </motion.div>
    </div>
  );
};

export default LoadingView;
