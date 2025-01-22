"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import { Experience, BlogPost } from "@/types";
import { loadExperiences, loadProjects, loadBlogPosts } from "@/data";

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

export default function Home() {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [expandedExperiences, setExpandedExperiences] = useState<Set<string>>(
    new Set()
  );
  const experiences = loadExperiences();
  const projects = loadProjects();
  const [blogPosts, setBlogPosts] = useState<Omit<BlogPost, "content">[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const visibleExperience = showAllExperience
    ? experiences
    : experiences.slice(0, 3);

  useEffect(() => {
    loadBlogPosts()
      .then(setBlogPosts)
      .finally(() => setLoadingPosts(false));
  }, []);

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
    <main className="min-h-screen">
      <nav className="fixed w-full px-6 py-4 backdrop-blur-sm bg-dark/80 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-mono text-primary">
            SP
          </Link>
          <div className="space-x-8">
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#experience" className="nav-link">
              Experience
            </Link>
            <Link href="#projects" className="nav-link">
              Projects
            </Link>
            <Link href="#blog" className="nav-link">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold mb-6">
            Hi, I&apos;m <span className="text-primary">Shamith Pasula</span>
          </h1>
          <Link href="#about" className="text-4xl text-gray-300 mb-8 block">↓</Link>
        </motion.div>
      </section>

      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-gray-300 mb-6">
              I&apos;m a software engineer and UC Berkeley student passionate
              about web development and systems engineering. I focus on building
              innovative solutions and enjoy working on complex technical
              challenges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark/50 p-6 rounded-lg border border-primary/20">
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
              <div className="bg-dark/50 p-6 rounded-lg border border-primary/20">
                <div className="flex items-center justify-between gap-8 w-full">
                  <div className="flex-2">
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
          </motion.div>
        </div>
      </section>

      <section
        id="experience"
        className="min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-8">
              {visibleExperience.map((exp: Experience) => {
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
                className="mt-8 w-full py-3 bg-dark/50 border border-primary/20 hover:border-primary rounded-lg text-primary transition-colors"
              >
                Show More
              </button>
            )}
          </motion.div>
        </div>
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center px-6 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="blog" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Blog</h2>
            <div className="space-y-6">
              {loadingPosts ? (
                <div className="bg-dark/50 p-6 rounded-lg border border-primary/20">
                  Loading posts...
                </div>
              ) : (
                blogPosts.map((post) => (
                  <Link
                    href={`/blog/${post.slug}`}
                    key={post.slug}
                    className="block group"
                  >
                    <article className="bg-dark/50 p-6 rounded-lg border border-primary/20 hover:border-primary transition-colors">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-primary mb-2">{post.date}</p>
                      <p className="text-gray-300 mb-4">{post.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-sm bg-primary/10 rounded-full text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  </Link>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
