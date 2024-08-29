import { CloseIcon, DoneIcon, DoneSmallIcon, TimeAtack } from "../Icons";
import styles from "./Status.module.scss";

const Status = () => {
  return (
    <div className={styles.container}>
      <h4>Status</h4>
      <div className={styles["container-buttons"]}>
        <button>
          <div className={styles.status}>
            <div className={`${styles.icon} ${styles.inProgress}`}>
              <TimeAtack />
            </div>
            In Progress
          </div>
          <div className={styles.chosenStatus}>
            <DoneIcon />
          </div>
        </button>
        <button>
          <div className={styles.status}>
            <div className={`${styles.icon} ${styles.completed}`}>
              <DoneSmallIcon />
            </div>
            Completed
          </div>
          <div className={styles.chosenStatus}>
            <DoneIcon />
          </div>
        </button>
        <button>
          <div className={styles.status}>
            <div className={`${styles.icon} ${styles.wontDo}`}>
              <CloseIcon />
            </div>
            Won&#39;t do
          </div>
          <div className={styles.chosenStatus}>
            <DoneIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Status;
