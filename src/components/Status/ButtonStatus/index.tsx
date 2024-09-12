"use client";
import { useTasksContext } from "@/context/tasksContext";
import styles from "./ButtonStatus.module.scss";
import { DoneIcon } from "@/components/Icons";
import { CloseIcon, DoneSmallIcon, TimeAtack } from "../../Icons";

interface IButtonStatus {
  status: string;
}

const ButtonStatus = ({ status }: IButtonStatus) => {
  const { taskDetails, setTaskDetails } = useTasksContext();

  return (
    <button
      className={styles.btn}
      onClick={() =>
        setTaskDetails({
          ...taskDetails,
          status: status,
        })
      }
    >
      <div className={styles.status}>
        {status === "In Progress" ? (
          <div className={`${styles.inProgress}`}>
            <TimeAtack />
          </div>
        ) : status === "Completed" ? (
          <div className={`${styles.completed}`}>
            <DoneSmallIcon />
          </div>
        ) : status === "Won't Do" ? (
          <div className={`${styles.wontDo}`}>
            <CloseIcon />
          </div>
        ) : null}
        {status}
      </div>
      {taskDetails.status === status && (
        <div className={styles.chosenStatus}>
          <DoneIcon />
        </div>
      )}
    </button>
  );
};

export default ButtonStatus;
