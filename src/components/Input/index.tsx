import styles from "./Input.module.scss";

interface IInput {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
  isTextArea?: boolean;
  rows?: number;
}

const Input = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  type,
  rows,
  isTextArea,
}: IInput) => {
  return (
    <div className={styles.container}>
      <label htmlFor="name">{label}</label>
      {isTextArea ? (
        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          rows={rows}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          name={name}
          id={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Input;
