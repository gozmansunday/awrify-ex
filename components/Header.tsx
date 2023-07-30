"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

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
    <div>

    </div>
  );
};

export default Header;