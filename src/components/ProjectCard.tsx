import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Project } from "@/types";
import { Github } from "@geist-ui/icons";

type ProjectCardProps = Project;

export default function ProjectCard({
  title,
  description,
  skills,
  href,
  image,
  github,
}: ProjectCardProps) {
  const router = useRouter();

  const handleGithubClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (github) {
      router.push(github);
    }
  };

  return (
    <div className="relative h-full">
      <Link href={href} className="block group h-full">
        <div className="bg-dark/50 p-6 rounded-lg border border-primary/20 group-hover:border-primary transition-colors h-full flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-4 flex-grow">
              {image && (
                <div className="flex-shrink-0 w-8 h-8 relative">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
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
      </Link>
    </div>
  );
}
