import React from "react";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { BlogSection } from "@/sections/BlogSection";
import { ConnectSection } from "@/sections/ConnectSection";
import { Navbar } from "@/components/Navbar";
import ScrollBehavior from "@/components/ScrollBehavior";
import { sections, navSections } from "@/data";

export default function Home() {
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
      <ScrollBehavior />
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
