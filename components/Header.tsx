"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { BsChevronLeft, BsChevronRight, BsHouseFill, BsSearch } from "react-icons/bs";
import { GiCompactDisc } from "react-icons/gi";

// Components
import { Button } from "./ui/button";
import AuthModal from "./AuthModal";

interface Props {
  children: ReactNode;
  className?: string;
}

const Header = ({ children, className }: Props) => {
  const router = useRouter();

  const handleLogout = () => {
    // Hnadle logout
  };

  return (
    <header className={twMerge(``, className)}>
      <div className="flex items-center justify-between pb-6 md:pb-8">
        {/* Large screen devices back and forward buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button size="icon" onClick={() => router.back()}
            className="rounded-full shadow-none hover:text-darkest hover:bg-brand"
          >
            <BsChevronLeft className="text-xl" />
          </Button>
          <Button size="icon" onClick={() => router.forward()}
            className="rounded-full shadow-none hover:text-darkest hover:bg-brand"
          >
            <BsChevronRight className="text-xl" />
          </Button>
        </div>

        {/* Mobile devices home button */}
        <div className="flex items-center gap-3 md:hidden">
          <Button size="icon" className="rounded-full shadow-none h-10 w-10 bg-brand text-darkest">
            <GiCompactDisc className="text-3xl" />
          </Button>
          <Button size="icon" className="rounded-full shadow-none h-10 w-10 bg-dark text-lightest">
            <BsSearch className="text-2xl" />
          </Button>
        </div>

        {/* Sign up and Log in buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* <Button className="text-sm text-lightest bg-transparent shadow-none hover:text-mid hover:bg-transparent md:text-base">
            Sign up
          </Button> */}
          <AuthModal
            content="Sign up"
            className="bg-transparent text-lightest hover:text-mid hover:bg-transparent px-0 py-1 md:px-0 md:py-1"
          />
          <AuthModal
            content="Log in"
            className="bg-brand text-darkest hover:bg-light"
          />
        </div>
      </div>

      {children}
    </header>
  )
};

export default Header;