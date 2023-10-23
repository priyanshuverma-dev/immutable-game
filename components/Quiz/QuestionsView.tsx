import React, { useState } from "react";
import { motion } from "framer-motion";
import ResultView from "./ResultView";
import toast from "react-hot-toast";

const QuestionsView = ({
  questions,
  resetGame,
  mainMenu,
}: {
  questions: QuizQuestion[];
  resetGame: () => void;
  mainMenu: () => void;
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const currentQuestion = questions[currentQuestionIndex];
  const [animateQuestion, setAnimateQuestion] = useState(true);

  const handleAnswerClick = (selectedAnswer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswerKeys = Object.entries(
      currentQuestion.correct_answers
    ).filter(([key, value]) => value === "true");

    const usersAnswer = `${selectedAnswer}_correct`;
    const isCorrect = correctAnswerKeys.map(([key, value]) => {
      return usersAnswer === key;
    });

    if (isCorrect.includes(true)) {
      toast.success("Correct Answer!");
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setAnimateQuestion(false);

      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnimateQuestion(true);
      }, 500);
    } else {
      console.log("Final Score: ", score, " / ", questions.length);
      setShowResult(true);
      const prev = localStorage.getItem("score");
      localStorage.setItem(
        "score",
        JSON.stringify(score + parseInt(prev || "0"))
      );
    }
  };

  if (showResult) {
    return (
      <ResultView
        score={score}
        totalQuestions={questions.length}
        resetGame={resetGame}
        mainMenu={mainMenu}
      />
    );
  }

  return (
    <motion.div
      className="text-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold">Quiz Game</h2>
      <p className="text-xl">
        Question {currentQuestionIndex + 1} of {questions.length}:
      </p>
      <motion.p
        className="text-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {currentQuestion.question}
      </motion.p>
      <ul className="mt-4 space-y-2">
        {Object.entries(currentQuestion.answers)
          .filter(([_, answerText]) => answerText !== null)
          .map(([answerKey, answerText], index) => (
            <motion.li
              key={answerKey}
              onClick={() => handleAnswerClick(answerKey)}
              className={`cursor-pointer py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 text-white`}
              initial={
                animateQuestion && index === 0
                  ? { opacity: 0, x: -20 }
                  : { opacity: 0, x: -20 }
              }
              animate={
                animateQuestion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              {answerText}
            </motion.li>
          ))}
      </ul>
    </motion.div>
  );
};

export default QuestionsView;
