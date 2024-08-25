"use client";
import { ITask } from "@/interfaces/ITask";
import { createContext, useContext, useState } from "react";

const initialValue: ITask[] = [];

interface ITasksContext {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const TasksContext = createContext<ITasksContext>({
  tasks: initialValue,
  setTasks: () => {},
});

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => useContext(TasksContext);
