"use client";
import { getAllTasks } from "@/firebase/handleTasks";
import { ITask } from "@/interfaces/ITask";
import { createContext, useContext, useEffect, useState } from "react";

interface ITasksContext {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const TasksContext = createContext<ITasksContext>({
  tasks: [],
  setTasks: () => {},
  errorMessage: "",
  setErrorMessage: () => {},
});

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await getAllTasks();
      if (tasks.length > 0) {
        setTasks(tasks);
      } else {
        setErrorMessage("Não foi possível obter as tarefas");
      }
    };
    getTasks();
  }, []);

  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, errorMessage, setErrorMessage }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => useContext(TasksContext);
