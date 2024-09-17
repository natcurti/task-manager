"use client";
import { useModalContext } from "@/context/modalContext";
import { useSelectTaskContext } from "@/context/selectTaskContext";
import { useTaskDetailsContext } from "@/context/taskDetailsContext";
import { useToast } from "@/context/toastContext";
import { useEffect } from "react";

const BoardLayout = ({
  children,
  modal,
  toast,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  toast: React.ReactNode;
}) => {
  const { isOpen } = useModalContext();
  const { showToast, setShowToast, setMessageSuccess, setMessageError } =
    useToast();
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

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
        setMessageSuccess("");
        setMessageError("");
      }, 3000);
    }
  }, [showToast, setShowToast, setMessageSuccess, setMessageError]);

  return (
    <>
      {children}
      {isOpen && modal}
      {showToast && toast}
    </>
  );
};

export default BoardLayout;
