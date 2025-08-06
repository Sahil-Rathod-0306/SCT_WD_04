'use client';
import { Task } from "@/types/Task";
import { motion } from "framer-motion";

interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      layout
      className="flex justify-between items-center p-3 bg-white rounded shadow mb-2"
    >
      <div className="flex flex-col">
        <span
          className={`text-lg ${
            task.isCompleted ? 'line-through text-gray-400' : ''
          }`}
        >
          {task.title}
        </span>
        <span className="text-sm text-gray-500">{task.dueDate}</span>
      </div>
      <div className="flex gap-2">
        <button onClick={() => onToggle(task.id)} className="text-green-600 hover:scale-110 transition-transform duration-200">
          ✅
        </button>
        <button onClick={() => onDelete(task.id)} className="text-red-600 hover:scale-110 transition-transform duration-200">
          🗑️
        </button>
      </div>
    </motion.div>
  );
}
