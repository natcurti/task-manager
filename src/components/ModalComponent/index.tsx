import { CloseModal } from "../Icons";
import styles from "./ModalComponent.module.scss";

const ModalComponent = () => {
  return (
    <div className={styles.overlay}>
      <section className={styles.modal}>
        <div className={styles["container-title"]}>
          <h3 className={styles.title}>Task details</h3>
          <button className={styles.btnClose}>
            <CloseModal />
          </button>
        </div>
        <div className={styles["container-input"]}>
          <label htmlFor="name">Task Name:</label>
          <input name="name" placeholder="Enter your task title" type="text" />
        </div>
        <div className={styles["container-input"]}>
          <label htmlFor="description">Task Description</label>
          <textarea
            name="description"
            placeholder="Enter a short description"
            rows={10}
          />
        </div>
      </section>
    </div>
  );
};

export default ModalComponent;
