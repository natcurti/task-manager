"use client";
import { v4 as uuidv4 } from "uuid";
import styles from "./Button.module.scss";
import { useModalContext } from "@/context/modalContext";
import { useTaskDetailsContext } from "@/context/taskDetailsContext";
import { serverTimestamp } from "firebase/firestore";
import { addNewTask, deleteTask, updateTask } from "@/actions";
import { useSelectTaskContext } from "@/context/selectTaskContext";

const Button = ({
  text,
  isSaveBtn,
  children,
}: {
  text: string;
  isSaveBtn?: boolean;
  children: React.ReactNode;
}) => {
  const { selectedTask } = useSelectTaskContext();
  const { taskDetails } = useTaskDetailsContext();
  const { isOpen, setIsOpen } = useModalContext();

  const handleClick = () => {
    if (isSaveBtn) {
      handleSaveTask();
    } else {
      handleDeleteTask();
    }
  };

  const handleSaveTask = async () => {
    if (selectedTask) {
      const newTask = {
        name: taskDetails.name,
        id: taskDetails.id,
        description: taskDetails.description,
        emoji: taskDetails.emoji,
        status: taskDetails.status,
      };
      const task = JSON.parse(JSON.stringify(newTask));
      await updateTask(task);
    }

    if (!selectedTask && taskDetails.name !== "" && taskDetails.emoji !== "") {
      const newTask = {
        name: taskDetails.name,
        id: uuidv4(),
        description: taskDetails.description,
        emoji: taskDetails.emoji,
        status: taskDetails.status,
        createdAt: serverTimestamp(),
      };
      const task = JSON.parse(JSON.stringify(newTask));
      await addNewTask(task);
    }
    setIsOpen(!isOpen);
  };

  const handleDeleteTask = async () => {
    if (selectedTask) {
      await deleteTask(taskDetails.id);
      setIsOpen(!isOpen);
    }
  };

  return (
    <button
      className={`${styles.button} ${
        isSaveBtn ? styles.saveBtn : styles.deleteBtn
      }`}
      onClick={handleClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
