"use client";

import React, { useState } from "react";
import { Experience } from "@/types";
import ExperienceCard from "@/components/ExperienceCard";
import { loadExperiences } from "@/data";

export const ExperienceSection = () => {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [expandedExperiences, setExpandedExperiences] = useState<Set<string>>(new Set());
  const experiences = loadExperiences();

  const toggleExperience = (key: string) => {
    setExpandedExperiences((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  return (
    <section id="experience" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {(showAllExperience ? experiences : experiences.slice(0, 3)).map((exp: Experience) => {
            const key = exp.company;
            return (
              <ExperienceCard
                key={key}
                {...exp}
                isExpanded={expandedExperiences.has(key)}
                onToggle={() => toggleExperience(key)}
              />
            );
          })}
        </div>
        {!showAllExperience && experiences.length > 3 && (
          <button
            onClick={() => setShowAllExperience(true)}
            className="mt-8 w-full py-3 backdrop-blur-xs bg-zinc-900/50 border border-primary/20 hover:border-primary rounded-lg text-primary transition-colors"
          >
            Show More
          </button>
        )}
      </div>
    </section>
  );
}; 