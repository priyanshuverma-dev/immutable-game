import React from "react";

interface QuestionProps {
  question: QuizQuestion; // Import the QuizQuestion type
  answerClickHandler: (selectedAnswer: string) => void;
}

const Question: React.FC<QuestionProps> = ({
  question,
  answerClickHandler,
}) => {
  console.log(question);
  return (
    <div className="text-center p-4">
      <h2 className="text-2xl font-semibold">Quiz Game</h2>
      <p className="text-xl">
        Question {question.question.length + 1} of {question.question.length}:
      </p>
      <p className="text-lg">{question.question}</p>
      <ul className="mt-4 space-y-2">
        {Array.isArray(question.answers) &&
          question.answers
            .filter((answer) => answer.text !== null)
            .map((answer) => (
              <li
                key={answer.key}
                onClick={() => answerClickHandler(answer.key)}
                className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                {answer.text}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Question;
