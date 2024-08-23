import Container from "@/components/Container";
import Header from "@/components/Header";
import { DoneSmallIcon, TimeAtack } from "@/components/Icons";
import TaskSection from "@/components/TaskSection";
import clock from "@/assets/clock.png";
import workout from "@/assets/workout-emoji.png";
import styles from "./board.module.scss";

const Board = () => {
  return (
    <Container>
      <Header />
      <main className={styles["container-tasks"]}>
        <TaskSection
          title="Task In Progress"
          emoji={clock}
          icon={<TimeAtack />}
          backgroundColor="#f5d565"
          iconColor="#e9a23b"
        />
        <TaskSection
          title="Task Completed"
          emoji={workout}
          icon={<DoneSmallIcon />}
          backgroundColor="#a0ecb1"
          iconColor="#32d657"
        />
      </main>
    </Container>
  );
};

export default Board;
