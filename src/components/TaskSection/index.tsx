"use client";
import Image from "next/image";
import styles from "./TaskSection.module.scss";
import { useSelectTaskContext } from "@/context/selectTaskContext";
import { useModalContext } from "@/context/modalContext";

interface ITaskSection {
  title: string;
  id: string;
  emoji: string;
  backgroundColor: string;
  description?: string;
  icon?: React.ReactNode;
  iconColor?: string;
}

const TaskSection = ({
  title,
  id,
  emoji,
  backgroundColor,
  description,
  icon,
  iconColor,
}: ITaskSection) => {
  const { setSelectedTask } = useSelectTaskContext();
  const { isOpen, setIsOpen } = useModalContext();

  const handleClickSection = (id: string) => {
    setSelectedTask(id);
    setIsOpen(!isOpen);
  };

  return (
    <section
      className={styles.section}
      style={{ backgroundColor }}
      onClick={() => handleClickSection(id)}
    >
      <div className={styles["container-img-details"]}>
        <div className={styles["container-img"]}>
          <Image
            src={emoji}
            alt={`Chosen emoji to represent task ${title}`}
            width={25}
            height={25}
            priority
          />
        </div>
        <div>
          <h3>{title}</h3>
          {description !== "" && <p>{description}</p>}
        </div>
      </div>
      {icon && (
        <div
          className={styles["container-icon"]}
          style={{ backgroundColor: iconColor }}
        >
          {icon}
        </div>
      )}
    </section>
  );
};

export default TaskSection;
