import { AddTaskIcon } from "../Icons";
import styles from "./AddTask.module.scss";

const AddTask = () => {
  return (
    <button className={styles.btn}>
      <div className={styles["container-icon"]}>
        <AddTaskIcon />
      </div>
      Add New Task
    </button>
  );
};

export default AddTask;
