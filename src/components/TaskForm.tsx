'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  onAdd: (title: string, dueDate: string) => void;
}

export default function TaskForm({ onAdd }: Props) {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAdd(title, dueDate);
    setTitle('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
    
<input
  className="border border-gray-300 bg-white/60 text-gray-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
  type="text"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  placeholder="Enter task..."
/>

<input
  className="border border-gray-300 bg-white/60 text-gray-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
  type="datetime-local"
  value={dueDate}
  onChange={(e) => setDueDate(e.target.value)}
/>

<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
>
  Add Task
</motion.button>
    </form>
  );
}
