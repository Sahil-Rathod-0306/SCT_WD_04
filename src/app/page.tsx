'use client';

import { useState } from 'react';
import { Task } from '@/types/Task';
import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, dueDate: string) => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      isCompleted: false,
      dueDate,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <main className="relative min-h-screen w-full bg-[url('/background.jpg')] bg-cover bg-center">
      {/* Blur & dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Centered card */}
      <div className="relative z-10 flex justify-center items-center min-h-screen px-4">
        <div className="w-full max-w-md bg-white/30 backdrop-blur-xl p-8 rounded-xl shadow-2xl border border-white/30">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 flex items-center justify-center gap-2">
            📝 <span>To-Do App</span>
          </h1>
          <TaskForm onAdd={addTask} />
          <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        </div>
      </div>
    </main>
  );
}
