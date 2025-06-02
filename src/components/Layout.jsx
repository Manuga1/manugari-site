'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  // Track theme: default to 'dark'
  const [theme, setTheme] = useState('dark');

  // On mount, apply the 'dark' class so default is dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Toggle handler
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  // Scroll progress (0–100)
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
	{/* Scroll Progress Bar */}
<div
  className="fixed top-0 left-0 h-1 bg-blue-600 dark:bg-blue-400 z-50"
  style={{ width: `${scrollProgress}%` }}
/>

      <header className="fixed inset-x-0 top-0 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm z-20 transition-colors duration-300">
        <div className="max-w-2xl mx-auto flex justify-between items-center py-6 px-4">
          <Link href="/" className="text-2xl font-semibold">Manu</Link>
          <nav className="space-x-6 text-sm uppercase tracking-widest">
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Blog</Link>
            <Link href="/images" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Images</Link>
            <Link href="/chronicles" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Chronicles</Link>
            <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</Link>
<Link
  href="/neuro101"
  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
>
  Neuro 101
</Link>
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light mode"
              className="ml-4 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </nav>
        </div>
      </header>
      <main className="pt-32 max-w-2xl mx-auto px-4 transition-all duration-500">
        {children}
      </main>
      <footer className="mt-20 py-6 text-center text-gray-400 text-sm">
	© 2025 Maanas Garimella
      </footer>
    </>
  );
}

