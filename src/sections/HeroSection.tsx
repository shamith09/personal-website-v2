"use client";

import React, { useState } from "react";
import Link from "next/link";
import GlitchText from "react-glitch-effect/core/GlitchText";
import { greetings } from "@/data";

export const HeroSection = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  const handleGreetingClick = () => {
    setIsGlitching(true);
    setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    const timeoutId = setTimeout(() => {
      setIsGlitching(false);
    }, 500);
    return () => clearTimeout(timeoutId);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center inline-block">
        <h1
          className="text-5xl font-bold mb-6 cursor-pointer"
          onClick={handleGreetingClick}
        >
          <span className="inline-block">
            <GlitchText
              disabled={!isGlitching}
              duration={500}
              color1="purple"
              color2="green"
              iterationCount={5}
            >
              {greetings[currentGreeting].greeting === "#define" || greetings[currentGreeting].greeting === "var me =" ? (
                <span className="font-mono">{greetings[currentGreeting].greeting}</span>
              ) : (
                <>{greetings[currentGreeting].greeting}</>
              )}
            </GlitchText>
          </span>
          <span className="text-primary"> Shamith Pasula</span>
          <span className={greetings[currentGreeting].greeting === "#define" || greetings[currentGreeting].greeting === "var me =" ? "font-mono" : ""}>
            {greetings[currentGreeting].punctuation}
          </span>
        </h1>
        <div className="flex justify-center items-center mb-8">
          <Link href="#about" className="text-4xl text-gray-300">
            ↓
          </Link>
        </div>
      </div>
    </section>
  );
};
