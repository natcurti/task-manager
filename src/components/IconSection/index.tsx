import Image from "next/image";
import styles from "./IconSection.module.scss";
import { ITask } from "@/interfaces/ITask";
import { useTasksContext } from "@/context/tasksContext";

const emojis = [
  {
    name: "balloon",
    path: "/assets/balloon-emoji.png",
  },
  { name: "books", path: "/assets/books-emoji.png" },
  { name: "clock", path: "/assets/clock-emoji.png" },
  { name: "coffee", path: "/assets/coffee-emoji.png" },
  { name: "notebook", path: "/assets/notebook-emoji.png" },
  { name: "workout", path: "/assets/workout-emoji.png" },
];

const IconSection = () => {
  const { taskDetails, setTaskDetails } = useTasksContext();

  return (
    <div className={styles.container}>
      <h4>Icon</h4>
      <div className={styles["container-buttons"]}>
        {emojis.map((emoji) => (
          <button
            key={emoji.name}
            onClick={() =>
              setTaskDetails({
                ...taskDetails,
                emoji: emoji.name,
              })
            }
            className={`${styles.btn} ${
              taskDetails.emoji === emoji.name ? styles.btnActive : ""
            }`}
          >
            <Image
              src={emoji.path}
              width={25}
              height={25}
              priority
              alt={`${emoji.name} emoji`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default IconSection;
