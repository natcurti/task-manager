"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getOneTask } from "@/firebase/handleTasks";
import { useTaskDetailsContext } from "./taskDetailsContext";

interface ISelectTaskContext {
  selectedTask: string;
  setSelectedTask: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectTaskContext = createContext<ISelectTaskContext>({
  selectedTask: "",
  setSelectedTask: () => {},
});

export const SelectTaskProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedTask, setSelectedTask] = useState("");
  const { setTaskDetails } = useTaskDetailsContext();

  useEffect(() => {
    if (selectedTask !== "") {
      const getTask = async () => {
        const task = await getOneTask(selectedTask);
        if (task) {
          setTaskDetails({
            name: task.name,
            id: task.id,
            description: task.description,
            emoji: task.emoji,
            status: task.status,
          });
        }
      };
      getTask();
    }
  }, [selectedTask, setTaskDetails]);

  return (
    <SelectTaskContext.Provider value={{ selectedTask, setSelectedTask }}>
      {children}
    </SelectTaskContext.Provider>
  );
};

export const useSelectTaskContext = () => useContext(SelectTaskContext);
