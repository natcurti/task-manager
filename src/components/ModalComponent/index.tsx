import Button from "../Button";
import { CloseModal, DoneIcon, TrashIcon } from "../Icons";
import IconSection from "../IconSection";
import Input from "../Input";
import Status from "../Status";
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

        <Input
          label="Task Name"
          name="title"
          placeholder="Enter your task title"
          type="text"
        />
        <Input
          isTextArea
          label="Task Description"
          name="description"
          placeholder="Enter a short description"
          rows={10}
        />
        <IconSection />
        <Status />
        <div className={styles["container-buttons"]}>
          <Button text="Delete">
            <TrashIcon />
          </Button>
          <Button text="Save" isSaveBtn>
            <DoneIcon />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ModalComponent;
