import { EditIcon, Logo } from "../Icons";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div>
        <h1 className={styles.title}>My Task Board</h1>
        <h2 className={styles.subtitle}>Tasks to keep organized</h2>
      </div>
      <EditIcon />
    </header>
  );
};

export default Header;
