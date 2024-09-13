import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "./config";
import { ITask } from "@/interfaces/ITask";

const tasksRef = collection(db, "tasks");

export const getAllTasks = async (): Promise<ITask[]> => {
  const q = query(tasksRef, orderBy("createdAt"));
  const tasks: ITask[] = [];

  try {
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((task) => tasks.push(task.data() as ITask));
  } catch (error) {
    console.log(error);
  }
  return tasks;
};

export const getOneTask = async (id: string): Promise<ITask | undefined> => {
  const q = query(tasksRef, where("id", "==", id));

  try {
    const querySnapShot = await getDocs(q);
    const task = querySnapShot.docs[0].data() as ITask;
    return task;
  } catch (error) {
    console.log(error);
  }
};

export const addNewTask = async (task: ITask) => {
  try {
    await addDoc(tasksRef, task);
  } catch (error) {
    console.log(error);
  }
};
