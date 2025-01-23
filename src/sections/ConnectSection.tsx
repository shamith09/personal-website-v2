import Link from "next/link";

import { LogoTwitterX } from "geist-icons";
import { Github, Linkedin, Mail, Instagram, Youtube } from "@geist-ui/icons";

export const ConnectSection = () => {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/shamith09",
      icon: <Github />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shamith-pasula-802275199/",
      icon: <Linkedin />,
    },
    {
      name: "Email",
      url: "mailto:shamith09@berkeley.edu",
      icon: <Mail />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/_shamyth_",
      icon: <Instagram />,
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@shamith09",
      icon: <Youtube />,
    },
    {
      name: "X",
      url: "https://x.com/shamith09",
      icon: <LogoTwitterX />,
    },
  ];

  return (
    <section
      id="connect"
      className="min-h-screen flex items-center px-6 py-20 max-w-4xl"
    >
      <div className="mx-auto">
        <h2 className="text-3xl font-bold mb-8">Connect With Me</h2>
        <div className="flex gap-8 justify-center items-center">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-all duration-200 transform hover:scale-125"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
