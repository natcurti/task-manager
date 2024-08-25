"use client";
import { useState } from "react";
import { EditIcon, Logo } from "../Icons";
import styles from "./Header.module.scss";

const Header = () => {
  const [editMode, setEditMode] = useState(false);
  const [boardDetails, setBoardDetails] = useState({
    title: "My Task Board",
    subtitle: "Tasks to keep organized",
  });

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.container}>
        {editMode ? (
          <>
            <input
              className={styles["input-title"]}
              value={boardDetails.title}
              onChange={(e) =>
                setBoardDetails({
                  ...boardDetails,
                  title: e.target.value,
                })
              }
            />
            <input
              value={boardDetails.subtitle}
              onChange={(e) =>
                setBoardDetails({
                  ...boardDetails,
                  subtitle: e.target.value,
                })
              }
            />
          </>
        ) : (
          <>
            <h1 className={styles.title}>{boardDetails.title}</h1>
            <h2 className={styles.subtitle}>{boardDetails.subtitle}</h2>
          </>
        )}
      </div>
      <button className={styles.btn} onClick={() => setEditMode(!editMode)}>
        <EditIcon />
      </button>
    </header>
  );
};

export default Header;
