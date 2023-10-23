"use client";

import { passportInstance } from "@/lib/immutable";
import { useState } from "react";

const Navbar = () => {
  const [score, setScore] = useState(0);

  setInterval(() => {
    setScore(JSON.parse(localStorage.getItem("score") || "0"));
  }, 200);

  // const score = localStorage.getItem("score");

  return (
    <nav className="flex justify-between items-center p-2 bg-gray-300 border-b">
      <div>
        <h1 className="text-2xl font-mono font-bold text-center text-gray-800">
          🌟 D-Quiz
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center ">
        {score != 0 && (
          <p className="text-xl font-semibold text-gray-800 pr-5">
            Score: {score * 10}
          </p>
        )}
        <button
          className="bg-red-500 hover:bg-red-700 transition-colors  text-white rounded-md p-2"
          onClick={() => passportInstance.logout()}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
