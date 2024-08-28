"use client";
import { useModalContext } from "@/context/modalContext";
import { AddTaskIcon } from "../Icons";
import styles from "./AddTask.module.scss";

const AddTask = () => {
  const { isOpen, setIsOpen } = useModalContext();

  return (
    <button className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles["container-icon"]}>
        <AddTaskIcon />
      </div>
      Add New Task
    </button>
  );
};

export default AddTask;
