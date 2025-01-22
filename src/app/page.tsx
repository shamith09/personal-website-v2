"use client";

import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { BlogSection } from "@/sections/BlogSection";

const sections = ["Hero", "About", "Experience", "Projects"]; // TODO: Add Blog

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const sectionComponents = {
    hero: <HeroSection />,
    about: <AboutSection />,
    experience: <ExperienceSection />,
    projects: <ProjectsSection />,
    blog: <BlogSection />,
  };

  return (
    <main className="min-h-screen">
      <nav className="fixed w-full px-6 py-4 backdrop-blur-sm bg-dark/80 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div
            className="relative group"
            whileHover="hover"
            initial="initial"
            animate="initial"
          >
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0 });
                window.history.pushState({}, "", "/");
              }}
              className="text-xl font-mono relative z-10 flex items-center"
            >
              <motion.span className="text-primary">S</motion.span>
              <motion.div
                className="overflow-hidden w-0 group-hover:w-auto"
                variants={{
                  initial: { width: 0 },
                  hover: { width: "auto" },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <span className="whitespace-nowrap">hamith</span>
                <span className="whitespace-nowrap">&nbsp;</span>
              </motion.div>
              <motion.span className="text-primary">P</motion.span>
              <motion.div
                className="overflow-hidden w-0 group-hover:w-auto"
                variants={{
                  initial: { width: 0 },
                  hover: { width: "auto" },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <span className="whitespace-nowrap">asula</span>
              </motion.div>
            </Link>
          </motion.div>
          <div className="space-x-8">
            {sections
              .filter((section) => section !== "Hero")
              .map((section) => (
                <Link
                  key={section.toLowerCase()}
                  href={`#${section.toLowerCase()}`}
                  className="nav-link font-mono uppercase"
                >
                  {section}
                </Link>
              ))}
            <Link
              href="/Shamith_Pasula_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link font-mono uppercase"
            >
              Resume
            </Link>
          </div>
        </div>
      </nav>

      {sections.map((section) => (
        <React.Fragment key={section.toLowerCase()}>
          {
            sectionComponents[
              section.toLowerCase() as keyof typeof sectionComponents
            ]
          }
        </React.Fragment>
      ))}
    </main>
  );
}
