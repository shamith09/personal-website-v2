import { Experience, Project, BlogPost } from "@/types";
import experienceData from "./experience.yaml";
import projectsData from "./projects.yaml";
import matter from "gray-matter";

export const blogSlugs = ["pygyat", "space-tech"] as const;
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

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getBaseUrl() {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
}

export function loadExperiences(): Experience[] {
  return experienceData;
}

export function loadProjects(): Project[] {
  return projectsData;
}

export async function loadBlogPosts(): Promise<Omit<BlogPost, "content">[]> {
  const posts = await Promise.all(
    blogSlugs.map(async (slug) => {
      const response = await fetch(`${getBaseUrl()}/blog/${slug}.md`);
      const markdown = await response.text();
      const { data } = matter(markdown);

      return {
        slug,
        title: data.title,
        date: formatDate(data.date),
        description: data.description,
        tags: data.tags || [],
      };
    })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function loadBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${getBaseUrl()}/blog/${slug}.md`);
    if (!response.ok) return null;

    const markdown = await response.text();
    const { data, content } = matter(markdown);

    return {
      slug,
      title: data.title,
      date: formatDate(data.date),
      description: data.description,
      content: content.trim(),
      tags: data.tags || [],
    };
  } catch (error) {
    console.error("Error loading blog post:", error);
    return null;
  }
}
