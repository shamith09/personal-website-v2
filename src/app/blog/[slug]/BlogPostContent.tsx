"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { BlogPost } from "@/types";
import ReactMarkdown from "react-markdown";

export default function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <main className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xs bg-zinc-900/50 p-8 rounded-lg border border-primary/20"
        >
          <Link
            href="/#blog"
            className="text-primary hover:text-secondary mb-8 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-primary mb-6">{post.date}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 rounded-full text-primary text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </motion.article>
      </div>
    </main>
  );
}
