"use client";

import React from "react";
import { useEffect } from "react";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { BlogSection } from "@/sections/BlogSection";
import { ConnectSection } from "@/sections/ConnectSection";
import { Navbar } from "@/components/Navbar";

// TODO: Add Blog
const sections = ["Hero", "About", "Experience", "Projects", "Connect"];
const navSections = ["About", "Experience", "Projects", "Connect"];

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
    connect: <ConnectSection />,
  };

  return (
    <main className="min-h-screen">
      <Navbar sections={navSections} />
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
