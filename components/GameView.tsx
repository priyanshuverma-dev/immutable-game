import React, { useState } from "react";
import { startQuiz } from "@/lib/quiz";
import { motion } from "framer-motion";
import LoadingView from "./LoadingView";
import toast from "react-hot-toast/headless";
import QuestionsView from "./Quiz/QuestionsView";
import { checkoutWidgets } from "@imtbl/sdk";
import { passportInstance } from "@/lib/immutable";
const GameView: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  const [loading, setLoading] = useState(false);

  const startGame = async () => {
    try {
      setLoading(true);
      const data = await startQuiz();
      if (data.status === "error") {
        throw new Error(data.error);
      }
      setQuestions(data.questions);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const resetGame = () => {
    // Reset the game state
    setQuestions([]);
    startGame(); // Start a new game
  };

  checkoutWidgets.CheckoutWidgets();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <checkoutWidgets.SwapReact passport={passportInstance} />
      {questions.length === 0 && !loading && (
        <motion.div
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.1 },
            tap: { scale: 0.9 },
          }}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="text-center p-4"
        >
          <button
            onClick={startGame}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Play Quiz!
          </button>
        </motion.div>
      )}
      {loading && <LoadingView />}
      {questions.length > 0 && !loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <QuestionsView
            questions={questions}
            resetGame={resetGame}
            mainMenu={() => {
              setQuestions([]);
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default GameView;
