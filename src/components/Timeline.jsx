// src/components/Timeline.jsx
'use client';
import React from 'react';
import { chronicles } from '../data/chronicles';

// A bare 'YYYY-MM-DD' handed to `new Date()` is parsed as UTC midnight, which
// `toLocaleDateString` then shifts into local time — one day early anywhere
// west of Greenwich. Build the date from its parts so it stays local, and pin
// the locale so the server and client render the same string.
function formatDate(iso) {
  const [year, month, day] = iso.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function Timeline() {
  // Oldest first, regardless of how the data file happens to be ordered.
  const entries = [...chronicles].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <ol className="border-l-2 border-gray-200 dark:border-gray-700 ml-4 space-y-8">
      {entries.map((item) => (
        <li key={`${item.date}-${item.title}`} className="relative">
          <span className="absolute -left-5 top-0 bg-blue-600 dark:bg-blue-400 w-3 h-3 rounded-full ring-8 ring-white dark:ring-gray-900"></span>
          <time dateTime={item.date} className="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {formatDate(item.date)}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-1">{item.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
