import React from "react";
import Link from "next/link";

const posts = {
  pygyat: {
    slug: "pygyat",
    title: "PyGyat - A Gen Alpha Programming Language",
    date: "January 15, 2024",
    description:
      "A programming language that brings a fresh perspective to Python by replacing traditional keywords with Gen Alpha slang.",
    tags: ["Python", "Language Design", "Compiler Theory"],
  },
  "space-tech": {
    slug: "space-tech",
    title: "Space Technology @ Cal",
    date: "January 15, 2024",
    description:
      "Contributing to space technology projects as a member of Space Technology at Berkeley.",
    tags: ["Systems Engineering", "Space Tech"],
  },
} as const;

export const BlogSection = () => {
  return (
    <section id="blog" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Blog</h2>
        <div className="space-y-6">
          {Object.values(posts).map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="block group"
            >
              <article className="backdrop-blur-xs bg-zinc-900/50 p-6 rounded-lg border border-primary/20 hover:border-primary transition-colors">
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
          ))}
        </div>
      </div>
    </section>
  );
};
