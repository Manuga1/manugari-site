'use client';

import Link from 'next/link';
import { neuroPosts } from '../data/neuro101';
import { chronicles } from '../data/chronicles';
import { useState, useEffect } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  useEffect(() => {
    const full = "Hi, I'm Manu.";
    let i = 0;
    const iv = setInterval(() => {
      setText(full.slice(0, i + 1));
      i++;
      if (i === full.length) clearInterval(iv);
    }, 100);
    return () => clearInterval(iv);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center py-32">
        <h1 className="text-6xl sm:text-8xl font-bold mb-4">
          {text}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-xl text-center">
          Neuroscience student. Medical school hopeful. Part‑time philosopher.
        </p>
        <div className="mt-8 space-x-4">
          <Link
            href="/neuro101"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Neuro 101
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition"
          >
            Projects
          </Link>
        </div>
      </section>


	{/* About Me */}
<section className="py-12 max-w-2xl mx-auto px-4 text-center">
  <img
    src="/images/avatar.png"
    alt="Manu Garimella"
    className="w-24 h-24 rounded-full mx-auto mb-4"
  />
  <p className="text-gray-700 dark:text-gray-300">
    I’m Manu Garimella, a neuroscience student at Vanderbilt on the pre‑med track. I blend lab research with clinical work—and a healthy dose of philosophy—to explore how our brains shape who we are.
  </p>
</section>

      {/* At a Glance Highlights */}
      <section className="py-12 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">At a Glance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Latest Neuro 101 */}
          <div className="border p-6 rounded-lg hover:shadow-lg transition dark:border-gray-700">
            <h3 className="text-xl font-semibold">Latest Neuro 101</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              {neuroPosts[0].date}
            </p>
            <Link
              href={`/neuro101/${neuroPosts[0].date}`}
              className="mt-3 inline-block text-blue-600 dark:text-blue-400 hover:underline"
            >
              {neuroPosts[0].title} →
            </Link>
          </div>

          {/* Top Project */}
          <div className="border p-6 rounded-lg hover:shadow-lg transition dark:border-gray-700">
            <h3 className="text-xl font-semibold">Top Project</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              How Somatostatin Might Drive Alzheimer’s Disease
            </p>
            <Link
              href="/projects/sst-alzheimers"
              className="mt-3 inline-block text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read More →
            </Link>
          </div>

          {/* Latest Milestone */}
          <div className="border p-6 rounded-lg hover:shadow-lg transition dark:border-gray-700">
            <h3 className="text-xl font-semibold">Upcoming Milestone</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              {chronicles[chronicles.length - 1].date}
            </p>
            <Link
              href="d/chronicles"
              className="mt-3 inline-block text-blue-600 dark:text-blue-400 hover:underline"
            >
              {chronicles[chronicles.length - 1].title} →
            </Link>
          </div>
        </div>
      </section>




{/* Mini Timeline Teaser */}
<section className="py-12 border border-gray-200 dark:border-gray-700">
  <h2 className="text-3xl font-semibold text-center mb-6">Pre‑Med Timeline</h2>
  <div className="flex overflow-x-auto px-4 space-x-6">
    {chronicles.map((item) => (
      <div key={item.date} className="flex-none text-center">
        <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto"></div>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{item.date}</p>
        <p className="mt-1 text-sm font-medium text-gray-900 dark:text-gray-100 max-w-xs">
          {item.title}
        </p>
      </div>
    ))}
  </div>
</section>
    </>
  );
}

