import { notFound } from "next/navigation";
import BlogPostContent from "./BlogPostContent";
import fs from "fs";
import path from "path";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  try {
    const { default: Content, metadata } = await import(`@/data/blog/${slug}.mdx`);

    return (
      <BlogPostContent
        post={{
          slug,
          title: metadata.title,
          date: new Date(metadata.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          description: metadata.description,
          content: <Content />,
          tags: metadata.tags,
        }}
      />
    );
  } catch {
    notFound();
  }
}

export function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "src/data/blog");
  const slugs = fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(".mdx", ""));

  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;
