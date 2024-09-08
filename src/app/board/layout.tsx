"use client";
import { useModalContext } from "@/context/modalContext";
import { useTasksContext } from "@/context/tasksContext";
import { useEffect } from "react";

const BoardLayout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  const { isOpen } = useModalContext();
  const { setTaskDetails } = useTasksContext();

  useEffect(() => {
    if (isOpen === false) {
      setTaskDetails({
        id: "",
        name: "",
        description: "",
        emoji: "",
        status: "",
      });
    }
  }, [isOpen, setTaskDetails]);

  return (
    <>
      {children}
      {isOpen && modal}
    </>
  );
};

export default BoardLayout;
