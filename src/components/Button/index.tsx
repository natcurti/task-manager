import styles from "./Button.module.scss";

const Button = ({
  text,
  isSaveBtn,
  children,
}: {
  text: string;
  isSaveBtn?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={`${styles.button} ${
        isSaveBtn ? styles.saveBtn : styles.deleteBtn
      }`}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
