import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?: string;
}

const Box = ({ children, className }: Props) => {
  return (
    <div className={twMerge(`bg-neutral-900 h-fit w-full rounded-lg`, className)}>
      {children}
    </div>
  );
};

export default Box;