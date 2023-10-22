"use client";
import dynamic from "next/dynamic";

const GameView = dynamic(() => import("@/components/GameView"), { ssr: false });
// import GameView from "@/components/GameView";
import LoggedInView from "@/components/Navbar";

const SitePage = () => {
  return (
    <div className="h-[90vh]">
      <LoggedInView />
      <GameView />
    </div>
  );
};

export default SitePage;
