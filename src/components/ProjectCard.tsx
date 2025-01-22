import Link from "next/link";
import { Project } from "@/types";

type ProjectCardProps = Project;

export default function ProjectCard({
  title,
  description,
  skills,
  href,
}: ProjectCardProps) {
  return (
    <Link href={href} className="group">
      <div className="bg-dark/50 p-6 rounded-lg border border-primary/20 hover:border-primary transition-colors">
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2">
          {title}
        </h3>
        <p className="text-gray-300 mb-4">{description}</p>
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
    </Link>
  );
}
