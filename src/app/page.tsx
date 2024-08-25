import { getData } from "@/firebase/getData";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/board");
}
