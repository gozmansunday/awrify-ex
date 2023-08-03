"use client";

import { ReactNode, useMemo } from "react";
import { usePathname } from "next/navigation";
import { BsHouseFill, BsSearch } from "react-icons/bs";
import { GiCompactDisc } from "react-icons/gi";

// Components
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
  ], [])

  return (
    <div className="grid h-full md:grid-cols-[20rem_calc(100vw_-_20rem)]">
      {/* Sidebar */}
      <aside className="hidden flex-col gap-8 p-6 bg-dark md:flex">
        <section className="flex items-center gap-3">
          <div className="bg-brand rounded-full p-1">
            <GiCompactDisc size={27} className="text-black" />
          </div>

          <h4 className="font-clash font-bold text-xl text-light">Awrify</h4>
        </section>

        <section>
          <h3 className="text-mid">Discover</h3>
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