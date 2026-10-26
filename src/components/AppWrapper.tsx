"use client";

import { useState, useEffect } from "react";
import { IntroLoader } from "./IntroLoader";

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if user has seen the intro in this session
    const hasSeenIntro = sessionStorage.getItem("teller-intro-seen");
    if (hasSeenIntro) {
      setIsLoading(false);
      setShowContent(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setIsLoading(false);
    setShowContent(true);
    sessionStorage.setItem("teller-intro-seen", "true");
  };

  return (
    <>
      {isLoading && <IntroLoader onComplete={handleIntroComplete} />}
      <div
        className={`transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
