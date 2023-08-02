"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { BsHouseDoorFill, BsSearch } from "react-icons/bs";
import Button from "./Button";

interface Props {
  children: ReactNode;
  className?: string;
}

const Header = ({ children, className }: Props) => {
  const router = useRouter();

  const handleLogout = () => {
    // Handle logout later!
  };

  return (
    <div className={twMerge(`h-fit p-6 bg-gradient-to-b from-yellow-800`, className)}>
      <div className="flex items-center justify-between mb-4">
        <div className="hidden items-center gap-x-2 md:flex">
          <button
            onClick={() => router.back()}
            className="text-white bg-black rounded-full hover:opacity-80 transition"
          >
            <RxCaretLeft size={36} />
          </button>
          <button
            onClick={() => router.forward()}
            className="text-white bg-black rounded-full hover:opacity-80 transition"
          >
            <RxCaretRight size={36} />
          </button>
        </div>

        <div className="flex items-center gap-x-2 md:hidden">
          <button className="bg-white p-2 rounded-full hover:opacity-80 transition">
            <BsHouseDoorFill className="text-black" size={18} />
          </button>
          <button className="bg-white p-2 rounded-full hover:opacity-80 transition">
            <BsSearch className="text-black" size={18} />
          </button>
        </div>

        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button
                onClick={() => { }}
                className="bg-transparent text-neutral-300 font-medium"
              >
                Sign up
              </Button>
            </div>
            <div>
              <Button
                onClick={() => { }}
                className="bg-white px-6 py-2"
              >
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Header;