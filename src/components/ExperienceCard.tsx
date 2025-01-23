import { Experience } from "@/types";

interface ExperienceCardProps extends Experience {
  isExpanded: boolean;
  onToggle: () => void;
}

export default function ExperienceCard({
  company,
  location,
  roles,
  skills,
  isExpanded,
  onToggle,
}: ExperienceCardProps) {
  const visibleRoles = isExpanded ? roles : roles.slice(0, 1);

  return (
    <div className="backdrop-blur-xs bg-zinc-900/50 p-6 rounded-lg border border-primary/20">
      <h3 className="text-xl font-bold">{company}</h3>
      <p className="text-sm text-primary mb-4">{location}</p>

      <div className="space-y-4">
        {visibleRoles.map((role, index) => (
          <div
            key={role.title}
            className={
              index !== 0 ? "mt-4 pt-4 border-t border-primary/10" : ""
            }
          >
            <p className="font-bold">{role.title}</p>
            <p className="text-primary text-sm mb-2">{role.date}</p>
            <ul className="list-disc list-outside pl-4 text-gray-300">
              {role.description.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {roles.length > 1 && (
        <button
          onClick={onToggle}
          className="text-primary hover:text-secondary transition-colors mt-4 text-sm"
        >
          {isExpanded ? "Show Less" : `Show ${roles.length - 1} more roles`}
        </button>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 text-xs bg-primary/10 rounded-full text-primary"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
