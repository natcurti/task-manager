"use client";
import { createContext, useContext, useState } from "react";

export interface IToastContext {
  showToast: boolean;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
  messageSuccess: string;
  setMessageSuccess: React.Dispatch<React.SetStateAction<string>>;
  messageError: string;
  setMessageError: React.Dispatch<React.SetStateAction<string>>;
}

export const ToastContext = createContext<IToastContext>({
  showToast: false,
  setShowToast: () => {},
  messageSuccess: "",
  setMessageSuccess: () => {},
  messageError: "",
  setMessageError: () => {},
});

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [showToast, setShowToast] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState("");
  const [messageError, setMessageError] = useState("");

  return (
    <ToastContext.Provider
      value={{
        showToast,
        setShowToast,
        messageSuccess,
        setMessageSuccess,
        messageError,
        setMessageError,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
