import React, { useState } from "react";
import Link from "next/link";
import GlitchText from "react-glitch-effect/core/GlitchText";

const greetings = [
  { greeting: <>Hi, I&apos;m</>, punctuation: <>.</> },
  { greeting: <>Hola, soy</>, punctuation: <>.</> },
  { greeting: <>#define</>, punctuation: <>;</> },
  { greeting: <>こんにちは、私は</>, punctuation: <>。</> },
  {
    greeting: <span className="font-mono">var me =</span>,
    punctuation: <span className="font-mono">;</span>,
  },
  { greeting: <>नमस्ते, मैं हूं</>, punctuation: <>।</> },
  { greeting: <>你好，我是</>, punctuation: <>。</> },
  { greeting: <>Bonjour, je suis</>, punctuation: <>.</> },
  { greeting: <>Olá, eu sou</>, punctuation: <>.</> },
  { greeting: <>Ciao, sono</>, punctuation: <>.</> },
  { greeting: <>Hallo, ich bin</>, punctuation: <>.</> },
  { greeting: <>안녕하세요, 저는</>, punctuation: <>.</> },
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
              {greetings[currentGreeting].greeting}
            </GlitchText>
          </span>
          <span className="text-primary"> Shamith Pasula</span>
          <span>{greetings[currentGreeting].punctuation}</span>
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
