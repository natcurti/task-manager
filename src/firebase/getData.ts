import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./config";
import { ITask } from "@/interfaces/ITask";

export const getData = async (): Promise<ITask[] | undefined> => {
  const tasksRef = collection(db, "tasks");
  const q = query(tasksRef, orderBy("id", "asc"));

  try {
    const tasks: ITask[] = [];
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((task) => tasks.push(task.data() as ITask));
    return tasks;
  } catch (error) {
    console.log(error);
  }
};
