import Link from 'next/link';
import { neuroPosts } from '../../data/neuro101';

export default function Neuro101Index() {
  return (
    <section className="max-w-4xl mx-auto py-12 space-y-6">
      <h2 className="text-4xl font-semibold">Neuro 101 Series</h2>
      <ul className="space-y-4">
        {neuroPosts.map((post) => (
          <li key={post.date}>
            <Link
              href={`/neuro101/${post.date}`}
              className="flex justify-between p-4 border rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <span>{post.date}</span>
              <span className="font-medium">{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

