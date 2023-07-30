"use client";

import { ReactNode, useMemo } from "react";
import { usePathname } from "next/navigation";
import { BsHouseFill, BsSearch } from "react-icons/bs";

// components
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface Props {
  children: ReactNode;
}

const Sidebar = ({ children }: Props) => {
  const pathname = usePathname();

  const routes = useMemo(() => [
    {
      icon: BsHouseFill,
      label: 'Home',
      active: pathname !== '/search',
      href: '/'
    },
    {
      icon: BsSearch,
      label: 'Search',
      active: pathname === '/search',
      href: '/search'
    }
  ], [])

  return (
    <div className="flex gap-3 h-full">
      <div className="hidden flex-col gap-y-2 bg-neutral-950 h-full w-[20rem] md:flex">
        <Box>
          <div className="flex flex-col px-5 py-4 gap-4">
            {routes.map((item) => (
              <SidebarItem key={item.label}
                {...item}
              />
            ))}
          </div>
        </Box>
        <Box className="h-full overflow-y-auto">
          <Library />
        </Box>
      </div>

      <main className="flex-1 h-full overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;