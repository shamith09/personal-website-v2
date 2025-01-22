import React, { useState } from "react";
import Link from "next/link";
import GlitchText from "react-glitch-effect/core/GlitchText";

const greetings = [
  "Hi, I'm",
  "Hola, soy",
  "你好，我是",
  "नमस्ते, मैं हूं",
  "Bonjour, je suis",
  "こんにちは、私は",
  "Olá, eu sou",
  "Ciao, sono",
  "Hallo, ich bin",
  "안녕하세요, 저는",
];

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
      <div className="max-w-4xl mx-auto text-center inline-block cursor-pointer">
        <h1 className="text-5xl font-bold mb-6" onClick={handleGreetingClick}>
          <span className="inline-block">
            <GlitchText
              disabled={!isGlitching}
              duration={500}
              color1="purple"
              color2="green"
              iterationCount={5}
            >
              {greetings[currentGreeting]}
            </GlitchText>
          </span>
          <span className="text-primary"> Shamith Pasula</span>
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
