"use server";
import { db } from "@/firebase/config";
import { ITask } from "@/interfaces/ITask";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { revalidatePath } from "next/cache";

const tasksRef = collection(db, "tasks");

export async function getAllTasks(): Promise<ITask[] | undefined> {
  const q = query(tasksRef, orderBy("createdAt", "desc"));

  try {
    const tasks: ITask[] = [];
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((task) => tasks.push(task.data() as ITask));
    return tasks;
  } catch (error) {
    console.log(error);
  }
}

export async function getOneTask(id: string): Promise<ITask | undefined> {
  const q = query(tasksRef, where("id", "==", id));

  try {
    const querySnapShot = await getDocs(q);
    const task = querySnapShot.docs[0].data() as ITask;
    return task;
  } catch (error) {
    console.log(error);
  }
}

export async function addNewTask(task: ITask): Promise<string | undefined> {
  try {
    await setDoc(doc(db, "tasks", task.id), task);
    revalidatePath("/board");
    return `Tarefa criada com sucesso`;
  } catch (error) {
    console.log(error);
  }
}

export async function updateTask(task: ITask): Promise<string | undefined> {
  try {
    await setDoc(doc(db, "tasks", task.id), task, { merge: true });
    revalidatePath("/board");
    return `Tarefa atualizada com sucesso`;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTask(id: string): Promise<string | undefined> {
  try {
    await deleteDoc(doc(db, "tasks", id));
    revalidatePath("/board");
    return `Tarefa deletada com sucesso`;
  } catch (error) {
    console.log(error);
  }
}
