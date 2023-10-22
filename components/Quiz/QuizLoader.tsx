// QuizLoader.tsx
import React, { useState, useEffect } from "react";

interface QuizLoaderProps {
  onQuestionsLoaded: (questions: QuizQuestion[]) => void;
}

const QuizLoader: React.FC<QuizLoaderProps> = ({ onQuestionsLoaded }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  useEffect(() => {
    fetch("https://quizapi.io/api/v1/questions", {
      headers: {
        "X-Api-Key": "vUTGOlv5XVMoxE1MRTtiyXd09y9SCp53GBA2d9UN",
      },
    })
      .then((response) => response.json())
      .then((data: QuizQuestion[]) => {
        const filteredQuestions = data.filter((question) => {
          return !Object.values(question.answers).some(
            (answer) => answer === null
          );
        });
        setQuestions(filteredQuestions);
        onQuestionsLoaded(filteredQuestions);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  return <div>{questions.length === 0 ? <p>Loading...</p> : null}</div>;
};

export default QuizLoader;
