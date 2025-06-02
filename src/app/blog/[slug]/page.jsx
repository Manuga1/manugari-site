// src/app/blog/[slug]/page.jsx
import { blogPosts } from '../../../data/blogPosts';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return <p>Post not found.</p>;

  return (
    <article className="prose dark:prose-invert max-w-none mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <time className="block text-gray-500 mb-4">{post.date}</time>
      <p className="text-gray-700 dark:text-gray-300">{post.content}</p>
      <div className="mt-8">
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
}

