import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

// Local imports
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

interface Props {
  children: ReactNode;
  buttonContent: string;
  buttonClassName: string;
  modalTitle: string;
};

const Modal = ({ children, buttonContent, buttonClassName, modalTitle }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={twMerge(
            `text-sm rounded-full py-2 px-4 shadow-none md:text-base md:py-3 md:px-6`,
            buttonClassName
          )}
        >
          {buttonContent}
        </Button>
      </DialogTrigger>

      <DialogContent
        className="flex flex-col gap-8 w-screen h-[100dvh] bg-dark border-none md:rounded-3xl shadow-none md:w-full md:h-auto"
      >
        <DialogHeader>
          <DialogTitle className="text-center text-2xl text-lightest md:text-3xl">{modalTitle}</DialogTitle>
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  )
};

export default Modal;