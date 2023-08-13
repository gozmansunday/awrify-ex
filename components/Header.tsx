"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { BsChevronLeft, BsChevronRight, BsSearch, BsPersonFill, BsPlusLg } from "react-icons/bs";
import { GiCompactDisc } from "react-icons/gi";
import Link from "next/link";

// Local imports
import { Button } from "./ui/button";
import { useUserDataStore, useSongsStore } from "@/hooks/useStore";
import supabase from "@/config/supabaseClient";
import { ToastAction } from "./ui/toast";
import { useToast } from "./ui/use-toast";

interface Props {
  children: ReactNode;
  className?: string;
}

const Header = ({ children, className }: Props) => {
  const router = useRouter();
  const { toast } = useToast();
  const { userData, setUserData } = useUserDataStore();
  const { setSongs } = useSongsStore();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    
    setUserData(null);
    setSongs([]);
    localStorage.removeItem("userData");
    router.push("/login");
    
    if (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Close">Close</ToastAction>
      });
    } else {
      toast({
        title: "See you soon!",
        description: "You've successfully logged out.",
        action: <ToastAction altText="Close">Close</ToastAction>
      });
    }
  };

  const handleUpload = () => {
    if (!userData) {
      router.push("/login");
    } else {
      router.push("/upload");
    }
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
          <Button onClick={handleUpload} size="icon" className="rounded-full shadow-none h-10 w-10 bg-dark text-lightest">
            <BsPlusLg className="text-2xl" />
          </Button>
        </div>

        {/* Log in, Logout and profile buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Logout */}
          {userData && <Button onClick={handleLogout}
            className="text-sm rounded-full py-2 px-4 shadow-none bg-dark text-lightest hover:text-darkest hover:bg-brand md:text-base md:py-3 md:px-6"
          >
            Logout
          </Button>}

          {/* Account */}
          {userData && <Link href="/account">
            <Button size="icon" className="rounded-full shadow-none text-darkest bg-brand transition hover:bg-lightest">
              <BsPersonFill className="text-2xl" />
            </Button>
          </Link>}

          {/* Log in */}
          {!userData && <Link href="/login">
            <Button className="text-sm rounded-full py-2 px-4 shadow-none bg-brand text-darkest hover:bg-light md:text-base md:py-3 md:px-6">
              Log in
            </Button>
          </Link>}
        </div>
      </div>

      {children}
    </header>
  )
};

export default Header;