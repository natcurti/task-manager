import styles from "./Status.module.scss";
import ButtonStatus from "./ButtonStatus";

const Status = () => {
  return (
    <div className={styles.container}>
      <h4>Status</h4>
      <div className={styles["container-buttons"]}>
        <ButtonStatus status="In Progress" />
        <ButtonStatus status="Completed" />
        <ButtonStatus status="Won't Do" />
      </div>
    </div>
  );
};

export default Status;
