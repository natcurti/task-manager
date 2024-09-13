"use client";
import { useModalContext } from "@/context/modalContext";
import { useSelectTaskContext } from "@/context/selectTaskContext";
import { useTaskDetailsContext } from "@/context/taskDetailsContext";
import { useEffect } from "react";

const BoardLayout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  const { isOpen } = useModalContext();
  const { setTaskDetails } = useTaskDetailsContext();
  const { setSelectedTask } = useSelectTaskContext();

  useEffect(() => {
    if (isOpen === false) {
      setTaskDetails({
        id: "",
        name: "",
        description: "",
        emoji: "",
        status: "",
      });
      setSelectedTask("");
    }
  }, [isOpen, setTaskDetails, setSelectedTask]);

  return (
    <>
      {children}
      {isOpen && modal}
    </>
  );
};

export default BoardLayout;
