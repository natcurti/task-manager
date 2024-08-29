"use client";
import { ITask } from "@/interfaces/ITask";
import { createContext, useContext, useState } from "react";

interface ITasksContext {
  taskDetails: ITask;
  setTaskDetails: React.Dispatch<React.SetStateAction<ITask>>;
}

export const TasksContext = createContext<ITasksContext>({
  taskDetails: {
    id: "",
    name: "",
    description: "",
    emoji: "",
    status: "",
  },
  setTaskDetails: () => {},
});

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const [taskDetails, setTaskDetails] = useState<ITask>({
    id: "",
    name: "",
    description: "",
    emoji: "",
    status: "",
  });

  return (
    <TasksContext.Provider value={{ taskDetails, setTaskDetails }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => useContext(TasksContext);
