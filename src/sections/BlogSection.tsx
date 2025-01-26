import React from "react";
import Link from "next/link";
import type { BlogPost } from "@/types";
import fs from "fs";
import path from "path";

async function getBlogMetadata(): Promise<Omit<BlogPost, "content">[]> {
  const blogDir = path.join(process.cwd(), "src/data/blog");
  const slugs = fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(".mdx", ""));

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await import(`@/data/blog/${slug}.mdx`);
      return {
        slug,
        ...metadata,
        date: new Date(metadata.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      };
    })
  );
  return posts;
}

export const BlogSection = async () => {
  const posts = await getBlogMetadata();

  return (
    <section id="blog" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Blog</h2>
        <div className="space-y-6">
          {posts.map((post) => (
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
