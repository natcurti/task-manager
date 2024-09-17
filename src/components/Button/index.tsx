"use client";
import { v4 as uuidv4 } from "uuid";
import styles from "./Button.module.scss";
import { useModalContext } from "@/context/modalContext";
import { useTaskDetailsContext } from "@/context/taskDetailsContext";
import { addNewTask, deleteTask, updateTask } from "@/actions";
import { useSelectTaskContext } from "@/context/selectTaskContext";
import { useToast } from "@/context/toastContext";

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
  const { setShowToast, setMessageSuccess, setMessageError } = useToast();

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
      const response = await updateTask(task);
      if (response) {
        setMessageSuccess(response);
      } else {
        setMessageError("Não foi possível atualizar a tarefa.");
      }
      setShowToast(true);
      setIsOpen(!isOpen);
    }

    if (!selectedTask && taskDetails.name !== "" && taskDetails.emoji !== "") {
      const newTask = {
        name: taskDetails.name,
        id: uuidv4(),
        description: taskDetails.description,
        emoji: taskDetails.emoji,
        status: taskDetails.status,
      };
      const task = JSON.parse(JSON.stringify(newTask));
      const response = await addNewTask(task);
      if (response) {
        setMessageSuccess(response);
      } else {
        setMessageError("Não foi possível criar a tarefa.");
      }
      setShowToast(true);
      setIsOpen(!isOpen);
    }

    if (taskDetails.name == "" && taskDetails.emoji == "") {
      setMessageError("Preencha o nome e escolha um emoji");
      setShowToast(true);
    }
  };

  const handleDeleteTask = async () => {
    if (selectedTask) {
      const response = await deleteTask(taskDetails.id);
      if (response) {
        setMessageSuccess(response);
      } else {
        setMessageError("Não foi possível deletar a tarefa.");
      }
      setShowToast(true);
      setIsOpen(!isOpen);
    }
  };

  console.log(`${!isSaveBtn} ${!selectedTask}`);

  return (
    <button
      className={`${styles.button} ${
        isSaveBtn ? styles.saveBtn : styles.deleteBtn
      }`}
      onClick={handleClick}
      disabled={!isSaveBtn && !selectedTask}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
