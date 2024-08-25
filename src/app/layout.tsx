import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { TasksProvider } from "../context/tasksContext";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--outfit-font",
});

export const metadata: Metadata = {
  title: "My Task Board",
  description: "Task Manager where you can keep your tasks organized",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <TasksProvider>
        <body>{children}</body>
      </TasksProvider>
    </html>
  );
}
