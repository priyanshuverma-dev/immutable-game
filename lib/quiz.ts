import { QUIZ_API_KEY, QUIZ_API_URL } from "@/utils/const";
import axios from "axios";

export const fetchQuestion = async (category?: string, difficulty?: string) => {
  try {
    const response = await axios.get(`${QUIZ_API_URL}`, {
      params: {
        category: category,
        difficulty: difficulty,
        limit: 5,
      },
      headers: {
        "X-Api-Key": QUIZ_API_KEY,
      },
    });

    if (response.status !== 200) {
      throw new Error("Error fetching question: " + response.data.error);
    }

    return {
      questions: response.data,
      status: "success",
    };
  } catch (error: any) {
    console.log("FETCH_QUESTION", error);
    return {
      error: error.message,
      status: "error",
    };
  }
};

export const startQuiz = async () => {
  const questions = await fetchQuestion();

  return questions;
};
