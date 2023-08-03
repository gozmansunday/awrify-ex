import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?: string;
}

const Box = ({ children, className }: Props) => {
  return (
    <section className={twMerge(`py-4 flex flex-col gap-3`, className)}>
      {children}
    </section>
  );
};

export default Box;