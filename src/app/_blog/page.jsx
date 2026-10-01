import Link from 'next/link';
import { blogPosts } from '../../data/blogPosts'; // relative path

export default function BlogIndex() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-semibold mb-8">Blog</h2>
      <ul className="space-y-6">
        {blogPosts.map((post) => (
          <li key={post.slug} className="border-b border-gray-200 pb-4">
            <Link
              href={`/blog/${post.slug}`}
              className="block hover:text-blue-600 transition"
            >
              <h3 className="text-2xl font-bold">{post.title}</h3>
              <p className="text-gray-500 mt-2">{post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

