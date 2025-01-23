import React from 'react';
import Image from "next/image";

const skills = [
  "Python",
  "C",
  "Go",
  "Rust",
  "x86",
  "TypeScript",
  "React.js",
  "Databases",
  "Full Stack Development",
];

export const AboutSection = () => (
  <section id="about" className="min-h-screen flex items-center px-6 py-20">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <p className="text-gray-300 mb-6">
        I&apos;m a software engineer and UC Berkeley student passionate
        about web development and systems engineering. I focus on building
        innovative solutions and enjoy working on complex technical
        challenges.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="backdrop-blur-xs bg-zinc-900/50 p-6 rounded-lg border border-primary/20">
          <h3 className="text-xl font-bold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-primary/10 rounded-full text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="backdrop-blur-xs bg-zinc-900/50 p-6 rounded-lg border border-primary/20">
          <div className="flex items-center justify-between gap-8 w-full">
            <div className="flex-2 max-w-[60%]">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <p className="text-gray-300">
                B.A. Computer Science
                <br />
                University of California, Berkeley
                <br />
                Expected Graduation: 2025
                <br />
                GPA: 3.86
              </p>
            </div>
            <div className="flex flex-1 justify-end items-center">
              <Image
                src="/berkeley.svg"
                alt="UC Berkeley Logo"
                width={100}
                height={100}
                className="opacity-80 w-auto h-full max-h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
); 