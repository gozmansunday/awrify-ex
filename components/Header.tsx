"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { BsChevronLeft, BsChevronRight, BsHouseFill, BsSearch } from "react-icons/bs";

// Components
import { Button } from "./ui/button";

interface Props {
  children: ReactNode;
  className?: string;
}

const Header = ({ children, className }: Props) => {
  const router = useRouter();

  const handleLogout = () => {

  };

  return (
    <header className={twMerge(``, className)}>
      <div className="flex items-center justify-between pb-6 md:pb-8">
        {/* Large screen devices back and forward buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button size="icon" onClick={() => router.back()}
            className="rounded-full shadow-none hover:text-darkest hover:bg-brand"
          >
            <BsChevronLeft size={20} />
          </Button>
          <Button size="icon" onClick={() => router.forward()}
            className="rounded-full shadow-none hover:text-darkest hover:bg-brand"
          >
            <BsChevronRight size={20} />
          </Button>
        </div>

        {/* Mobile devices home button */}
        <div className="flex items-center gap-3 md:hidden">
          <Button size="icon" className="rounded-full shadow-none bg-brand text-darkest">
            <BsHouseFill size={16} />
          </Button>
          <Button size="icon" className="rounded-full shadow-none bg-brand text-darkest">
            <BsSearch size={16} />
          </Button>
        </div>

        {/* Sign up and Log in buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button className="text-sm text-lightest bg-transparent shadow-none hover:text-mid hover:bg-transparent md:text-base">
            Sign up
          </Button>
          <Button className="text-sm rounded-full py-2 px-4 shadow-none bg-brand text-darkest md:text-base md:py-3 md:px-6">
            Log in
          </Button>
        </div>
      </div>

      {children}
    </header>
  )
};

export default Header;