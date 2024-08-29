"use client";
import { useModalContext } from "@/context/modalContext";
import Button from "../Button";
import { CloseModal, DoneIcon, TrashIcon } from "../Icons";
import IconSection from "../IconSection";
import Input from "../Input";
import Status from "../Status";
import styles from "./ModalComponent.module.scss";
import { useRef } from "react";

const ModalComponent = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen } = useModalContext();

  const handleClickOverlay = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === overlayRef.current) {
      setIsOpen(!isOpen);
    } else {
      e.stopPropagation();
    }
  };

  return (
    <div
      className={styles.overlay}
      ref={overlayRef}
      onClick={handleClickOverlay}
    >
      <section className={styles.modal}>
        <div className={styles["container-title"]}>
          <h3 className={styles.title}>Task details</h3>
          <button
            className={styles.btnClose}
            onClick={() => setIsOpen(!isOpen)}
          >
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
