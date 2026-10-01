"use client";

import { blogPosts } from '../../../data/blogPosts';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return <p>Post not found.</p>;

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
    <div className="w-16 h-1 bg-blue-500 mb-6"></div>  {/* Accent bar */}

    <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
    <time className="block text-sm text-gray-400 mb-2">{post.date}</time>

<hr className="border-gray-700 dark:border-gray-600 my-6" />

<div className="prose prose-lg dark:prose-invert max-w-none">
  <ReactMarkdown>{post.content}</ReactMarkdown>
</div>

      <div className="mt-12 flex justify-between items-center border-t border-gray-300 dark:border-gray-700 pt-6">
  {/* Previous Post */}
  {blogPosts[blogPosts.findIndex((p) => p.slug === post.slug) - 1] ? (
    <Link
      href={`/blog/${blogPosts[blogPosts.findIndex((p) => p.slug === post.slug) - 1].slug}`}
      className="text-blue-600 hover:underline"
    >
      ← {blogPosts[blogPosts.findIndex((p) => p.slug === post.slug) - 1].title}
    </Link>
  ) : (
    <span></span>
  )}

  {/* Next Post */}
  {blogPosts[blogPosts.findIndex((p) => p.slug === post.slug) + 1] ? (
    <Link
      href={`/blog/${blogPosts[blogPosts.findIndex((p) => p.slug === post.slug) + 1].slug}`}
      className="text-blue-500 hover:underline"
    >
      {blogPosts[blogPosts.findIndex((p) => p.slug === post.slug) + 1].title} →
    </Link>
  ) : (
    <span></span>
  )}
</div>

    </article>
  );
}
