"use client";
import { v4 as uuidv4 } from "uuid";
import styles from "./Button.module.scss";
import { addNewTask, getAllTasks } from "@/firebase/handleTasks";
import { useModalContext } from "@/context/modalContext";
import { useTaskDetailsContext } from "@/context/taskDetailsContext";
import { useTasksContext } from "@/context/tasksContext";
import { serverTimestamp } from "firebase/firestore";

const Button = ({
  text,
  isSaveBtn,
  children,
}: {
  text: string;
  isSaveBtn?: boolean;
  children: React.ReactNode;
}) => {
  const { taskDetails } = useTaskDetailsContext();
  const { isOpen, setIsOpen } = useModalContext();
  const { setTasks, setErrorMessage } = useTasksContext();

  const handleSaveTask = async () => {
    if (taskDetails.name && taskDetails.emoji !== "") {
      const newTask = {
        name: taskDetails.name,
        id: uuidv4(),
        description: taskDetails.description,
        emoji: taskDetails.emoji,
        status: taskDetails.status,
        createdAt: serverTimestamp(),
      };
      addNewTask(newTask);
      setIsOpen(!isOpen);

      const tasks = await getAllTasks();
      if (tasks.length > 0) {
        setTasks(tasks);
      } else {
        setErrorMessage("Não foi possível obter as tarefas.");
      }
    }
  };

  const handleDeleteTask = () => {};

  return (
    <button
      className={`${styles.button} ${
        isSaveBtn ? styles.saveBtn : styles.deleteBtn
      }`}
      onClick={`${isSaveBtn}` ? handleSaveTask : handleDeleteTask}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
