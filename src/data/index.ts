import { Experience, Project } from "@/types";
import experienceData from "./experience.yaml";
import projectsData from "./projects.yaml";

export const sections = ["Hero", "About", "Experience", "Projects", "Connect"];
export const navSections = ["About", "Experience", "Projects", "Connect"];

export const greetings = [
  { greeting: "Hi, I'm", punctuation: "." },
  { greeting: "Hola, soy", punctuation: "." },
  { greeting: "#define", punctuation: ";" },
  { greeting: "こんにちは、私は", punctuation: "。" },
  { greeting: "var me =", punctuation: ";" },
  { greeting: "नमस्ते, मैं हूं", punctuation: "।" },
  { greeting: "你好，我是", punctuation: "。" },
  { greeting: "Bonjour, je suis", punctuation: "." },
  { greeting: "Olá, eu sou", punctuation: "." },
  { greeting: "Ciao, sono", punctuation: "." },
  { greeting: "Hallo, ich bin", punctuation: "." },
  { greeting: "안녕하세요, 저는", punctuation: "." },
] as const;

export function loadExperiences(): Experience[] {
  return experienceData;
}

export function loadProjects(): Project[] {
  return projectsData;
}
