import { neuroPosts } from '../../../data/neuro101';
import Link from 'next/link';

export async function generateStaticParams() {
  return neuroPosts.map((p) => ({ date: p.date }));
}

export default function Neuro101Post({ params }) {
  const post = neuroPosts.find((p) => p.date === params.date);
  if (!post) return <p>Not found</p>;

  // Find this post’s position in the array
  const index = neuroPosts.findIndex((p) => p.date === params.date);
  const prev = index > 0 ? neuroPosts[index - 1] : null;
  const next = index < neuroPosts.length - 1 ? neuroPosts[index + 1] : null;

  return (
    <article className="prose dark:prose-invert max-w-none mx-auto py-12">
      <h1>{post.title}</h1>
      <time className="text-gray-500">{post.date}</time>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      {/* ← Previous / Next → */}
      <div className="flex justify-between mt-12">
        {prev ? (
          <Link
            href={`/neuro101/${prev.date}`}
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            ← {prev.title}
          </Link>
        ) : <div />}

        {next ? (
          <Link
            href={`/neuro101/${next.date}`}
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            {next.title} →
          </Link>
        ) : <div />}
      </div>
    </article>
  );
}

