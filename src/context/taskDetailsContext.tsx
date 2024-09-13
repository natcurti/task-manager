"use client";
import { ITask } from "@/interfaces/ITask";
import { createContext, useContext, useState } from "react";

interface ITaskDetailsContext {
  taskDetails: ITask;
  setTaskDetails: React.Dispatch<React.SetStateAction<ITask>>;
}

export const TaskDetailsContext = createContext<ITaskDetailsContext>({
  taskDetails: {
    id: "",
    name: "",
    description: "",
    emoji: "",
    status: "",
  },
  setTaskDetails: () => {},
});

export const TaskDetailsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [taskDetails, setTaskDetails] = useState<ITask>({
    id: "",
    name: "",
    description: "",
    emoji: "",
    status: "",
  });

  return (
    <TaskDetailsContext.Provider value={{ taskDetails, setTaskDetails }}>
      {children}
    </TaskDetailsContext.Provider>
  );
};

export const useTaskDetailsContext = () => useContext(TaskDetailsContext);
