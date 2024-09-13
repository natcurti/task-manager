"use client";
import { getAllTasks } from "@/firebase/handleTasks";
import { ITask } from "@/interfaces/ITask";
import { createContext, useContext, useEffect, useState } from "react";

interface ITasksContext {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const TasksContext = createContext<ITasksContext>({
  tasks: [],
  setTasks: () => {},
});

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await getAllTasks();
      if (tasks) {
        setTasks(tasks);
      }
    };
    getTasks();
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => useContext(TasksContext);
