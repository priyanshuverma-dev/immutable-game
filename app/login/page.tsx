"use client";
import { fetchAuth, isAuthenticated } from "@/lib/immutable";
import { useRouter } from "next/navigation"; // Import the router
import React, { useEffect } from "react";

const LoginPage = () => {
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    // Create an async function to check if the user is authenticated
    const checkAuthentication = async () => {
      const isAuth = await isAuthenticated();

      if (isAuth) {
        router.push("/"); // Use router to navigate to the login page

        return null;
      }
    };

    checkAuthentication();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={fetchAuth}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
