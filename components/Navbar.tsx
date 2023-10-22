"use client";

import { isAuthenticated, passportInstance } from "@/lib/immutable";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

interface UserProfile {
  nickname?: string;
  email?: string;
  sub?: string;
  accessToken?: string;
  idToken?: string;
}

const Navbar = () => {
  const [user, setUser] = useState<UserProfile | undefined>();

  const fetchUser = async () => {
    try {
      const userProfile = await passportInstance.getUserInfo();
      const accessToken = await passportInstance.getAccessToken();
      const idToken = await passportInstance.getIdToken();

      setUser({
        sub: userProfile?.sub,
        email: userProfile?.email,
        nickname: userProfile?.nickname,
        accessToken: accessToken,
        idToken: idToken,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <nav className="flex justify-between items-center p-2 bg-gray-300 border-b">
      <div>
        <h1 className="text-2xl font-mono font-bold text-center text-gray-800">
          🌟 D-Quiz
        </h1>
      </div>
      <button
        className="bg-red-500 hover:bg-red-700 transition-colors  text-white rounded-md p-2"
        onClick={() => passportInstance.logout()}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
