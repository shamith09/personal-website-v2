import { notFound } from 'next/navigation';
import { loadBlogPost } from "@/data";
import BlogPostContent from "./BlogPostContent";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const post = await loadBlogPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}
