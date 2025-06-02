// src/components/Timeline.jsx
'use client';
import React from 'react';
import { chronicles } from '../data/chronicles';

export default function Timeline() {
  return (
    <ol className="border-l-2 border-gray-200 dark:border-gray-700 ml-4 space-y-8">
      {chronicles.map((item) => (
        <li key={item.date} className="relative">
          <span className="absolute -left-5 top-0 bg-blue-600 dark:bg-blue-400 w-3 h-3 rounded-full ring-8 ring-white dark:ring-gray-900"></span>
          <time className="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {new Date(item.date).toLocaleDateString()}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-1">{item.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}

