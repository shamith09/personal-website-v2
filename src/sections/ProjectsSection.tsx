import React from 'react';
import ProjectCard from "@/components/ProjectCard";
import { loadProjects } from "@/data";

export const ProjectsSection = () => {
  const projects = loadProjects();

  return (
    <section id="projects" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}; 