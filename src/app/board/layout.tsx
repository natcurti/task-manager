"use client";
import { useModalContext } from "@/context/modalContext";

const BoardLayout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  const { isOpen } = useModalContext();

  return (
    <div>
      {children}
      {isOpen && modal}
    </div>
  );
};

export default BoardLayout;
