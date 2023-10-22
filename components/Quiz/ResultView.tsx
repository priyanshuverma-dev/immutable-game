import { motion } from "framer-motion";

const ResultView = ({
  score,
  totalQuestions,
  resetGame,
  mainMenu,
}: {
  score: number;
  totalQuestions: number;
  resetGame: () => void;
  mainMenu: () => void;
}) => {
  return (
    <motion.div
      className="text-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold">Quiz Result</h2>
      <p className="text-xl">
        You scored {score} out of {totalQuestions}.
      </p>
      <div className="flex flex-col ">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={resetGame}
        >
          Play Again
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={mainMenu}
        >
          Home
        </button>
      </div>
    </motion.div>
  );
};

export default ResultView;
