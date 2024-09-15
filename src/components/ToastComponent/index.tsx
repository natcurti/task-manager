"use client";
import { useToast } from "@/context/toastContext";
import styles from "./Toast.module.scss";
import { CloseIconToast } from "../Icons";

const ToastComponent = () => {
  const { messageSuccess, messageError, setShowToast, showToast } = useToast();

  const messageToShow = messageSuccess !== "" ? messageSuccess : messageError;

  return (
    <div
      className={`${styles.card} ${
        messageSuccess ? styles["bg-success"] : styles["bg-error"]
      }`}
    >
      {messageToShow}
      <button onClick={() => setShowToast(!showToast)}>
        <CloseIconToast />
      </button>
    </div>
  );
};

export default ToastComponent;
