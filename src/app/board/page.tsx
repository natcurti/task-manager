import Container from "@/components/Container";
import Header from "@/components/Header";
import { CloseIcon, DoneSmallIcon, TimeAtack } from "@/components/Icons";
import TaskSection from "@/components/TaskSection";
import styles from "./board.module.scss";
import AddTask from "@/components/AddTask";
import { getAllTasks } from "@/actions";

const Board = async () => {
  const tasks = await getAllTasks();
  console.log(tasks);
  console.log("oi, estou na rota board");

  return (
    <>
      <Container>
        <Header />
        <main className={styles["container-tasks"]}>
          {tasks?.map((task) => {
            if (task.status === "In Progress") {
              return (
                <TaskSection
                  key={task.id}
                  id={task.id}
                  title={task.name}
                  description={task.description}
                  emoji={`/assets/${task.emoji}-emoji.png`}
                  icon={<TimeAtack />}
                  backgroundColor="#f5d565"
                  iconColor="#e9a23b"
                />
              );
            } else if (task.status === "Completed") {
              return (
                <TaskSection
                  key={task.id}
                  id={task.id}
                  title={task.name}
                  description={task.description}
                  emoji={`/assets/${task.emoji}-emoji.png`}
                  icon={<DoneSmallIcon />}
                  backgroundColor="#a0ecb1"
                  iconColor="#32d657"
                />
              );
            } else if (task.status === "Won't Do") {
              return (
                <TaskSection
                  key={task.id}
                  id={task.id}
                  title={task.name}
                  description={task.description}
                  emoji={`/assets/${task.emoji}-emoji.png`}
                  icon={<CloseIcon />}
                  backgroundColor="#f7d4d3"
                  iconColor="#dd524c"
                />
              );
            } else {
              return (
                <TaskSection
                  key={task.id}
                  id={task.id}
                  title={task.name}
                  description={task.description}
                  emoji={`/assets/${task.emoji}-emoji.png`}
                  backgroundColor="#e3e8ef"
                />
              );
            }
          })}
          {!tasks && <p className={styles.error}>Erro ao carregar tarefas.</p>}
          <AddTask />
        </main>
      </Container>
    </>
  );
};

export default Board;
