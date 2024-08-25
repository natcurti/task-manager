import Image from "next/image";
import styles from "./TaskSection.module.scss";

interface ITaskSection {
  title: string;
  emoji: string;
  backgroundColor: string;
  icon?: React.ReactNode;
  iconColor?: string;
}

const TaskSection = ({
  title,
  emoji,
  icon,
  backgroundColor,
  iconColor,
}: ITaskSection) => {
  return (
    <section className={styles.section} style={{ backgroundColor }}>
      <div className={styles["container-img-title"]}>
        <div className={styles["container-img"]}>
          <Image
            src={emoji}
            alt={`Chosen emoji to represent task ${title}`}
            width={25}
            height={25}
            priority
          />
        </div>
        <h3>{title}</h3>
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
