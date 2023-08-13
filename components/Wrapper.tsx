"use client";

import { ReactNode, useMemo } from "react";
import { usePathname } from "next/navigation";
import { BsHouseFill, BsSearch } from "react-icons/bs";
import { GiCompactDisc } from "react-icons/gi";
import { GiRingedPlanet } from "react-icons/gi";

// Local imports
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface Props {
  children: ReactNode;
}

const Wrapper = ({ children }: Props) => {
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
  ], []);

  return (
    <div className="grid min-h-[100dvh] md:grid-cols-[16rem_1fr] lg:grid-cols-[18rem_1fr]">
      {/* Sidebar */}
      <aside className="hidden flex-col gap-8 p-6 bg-dark md:flex">
        <section className="flex items-center gap-3">
          <div className="bg-brand rounded-full p-1">
            <GiCompactDisc className="text-black text-3xl" />
          </div>

          <h4 className="font-clash font-bold text-xl text-light">Awrify</h4>
        </section>

        <section>
          <div className="text-mid inline-flex items-center gap-3">
            <GiRingedPlanet className="text-2xl" />
            <h3>Explore</h3>
          </div>
          <Box>
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </Box>
        </section>
        
        <Library />
      </aside>

      {/* Main */}
      <main>
        {children}
      </main>
    </div>
  )
};

export default Wrapper;