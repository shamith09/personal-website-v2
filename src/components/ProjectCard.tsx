"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Project } from "@/types";
import { Github } from "@geist-ui/icons";

export default function ProjectCard({
  title,
  description,
  skills,
  href,
  image,
  github,
}: Project) {
  const router = useRouter();

  const handleGithubClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (github) {
      router.push(github);
    }
  };

  const Content = () => (
    <div className="backdrop-blur-sm bg-zinc-900/50 p-6 rounded-lg border border-primary/20 group-hover:border-primary transition-colors h-full flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-4 flex-grow">
          {image && (
            <Image
              src={image}
              alt={title}
              width={32}
              height={32}
              className="object-cover rounded-lg"
            />
          )}
          <h3 className="text-xl font-bold inline-block group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        {github && (
          <button
            onClick={handleGithubClick}
            className="text-gray-400 hover:text-primary transition-colors flex-shrink-0 relative z-10"
            aria-label="View source on GitHub"
          >
            <Github size={20} />
          </button>
        )}
      </div>
      <p className="text-gray-300 mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 text-sm bg-primary/10 rounded-full text-primary"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative h-full">
      {href ? (
        <Link href={href} className="block group h-full">
          <Content />
        </Link>
      ) : (
        <div className="group h-full">
          <Content />
        </div>
      )}
    </div>
  );
}
