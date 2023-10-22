// QuizResult.tsx
import React from "react";

interface QuizResultProps {
  score: number;
  total: number;
  onPlayAgain: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({
  score,
  total,
  onPlayAgain,
}) => {
  return (
    <div className="text-center p-4">
      <h2 className="text-2xl font-semibold">Quiz Result</h2>
      <p className="text-xl">
        You scored {score} out of {total}.
      </p>
      <button
        className="bg-red-500 hover.bg-red-700 text-white font.bold py-2 px-4 rounded mt-4"
        onClick={onPlayAgain}
      >
        Play Again
      </button>
    </div>
  );
};

export default QuizResult;
