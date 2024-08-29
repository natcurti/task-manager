import styles from "./Input.module.scss";

interface IInput {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  isTextArea?: boolean;
  rows?: number;
}

const Input = ({
  label,
  name,
  placeholder,
  type,
  rows,
  isTextArea,
}: IInput) => {
  return (
    <div className={styles.container}>
      <label htmlFor="name">{label}</label>
      {isTextArea ? (
        <textarea name={name} id={name} placeholder={placeholder} rows={rows} />
      ) : (
        <input name={name} id={name} placeholder={placeholder} type={type} />
      )}
    </div>
  );
};

export default Input;
