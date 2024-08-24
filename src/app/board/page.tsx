import Container from "@/components/Container";
import Header from "@/components/Header";
import { CloseIcon, DoneSmallIcon, TimeAtack } from "@/components/Icons";
import TaskSection from "@/components/TaskSection";
import clock from "@/assets/clock.png";
import workout from "@/assets/workout-emoji.png";
import coffee from "@/assets/coffee-emoji.png";
import books from "@/assets/books-emoji.png";
import styles from "./board.module.scss";
import AddTask from "@/components/AddTask";

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
        <TaskSection
          title="Task Won't Do"
          emoji={coffee}
          icon={<CloseIcon />}
          backgroundColor="#f7d4d3"
          iconColor="#dd524c"
        />
        <TaskSection
          title="Task To Do"
          emoji={books}
          backgroundColor="#e3e8ef"
        />
        <AddTask />
      </main>
    </Container>
  );
};

export default Board;
