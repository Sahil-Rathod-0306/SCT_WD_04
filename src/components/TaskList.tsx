'use client';
import { AnimatePresence, motion } from "framer-motion";
import TaskItem from "./TaskItem";
import { Task } from "@/types/Task";

interface Props {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskList({ tasks, onToggle, onDelete }: Props) {
  return (
    <motion.div layout>
      <AnimatePresence>
        {tasks.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-gray-400"
          >
            No tasks yet.
          </motion.p>
        )}
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
