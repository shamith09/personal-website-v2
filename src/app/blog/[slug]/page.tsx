import { notFound } from 'next/navigation';
import BlogPostContent from "./BlogPostContent";
import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

async function getBlogPost(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'src/app/blog/posts', `${slug}.mdx`);
    const source = await fs.readFile(filePath, 'utf8');
    const { content, data } = matter(source);
    return { content, frontmatter: data };
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  return ['pygyat', 'space-tech'].map(slug => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const post = await getBlogPost(resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <BlogPostContent post={{
      slug: resolvedParams.slug,
      title: post.frontmatter.title,
      date: new Date(post.frontmatter.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      description: post.frontmatter.description,
      content: <MDXRemote source={post.content} />,
      tags: post.frontmatter.tags,
    }} />
  );
}
