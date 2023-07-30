import { IconType } from "react-icons";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem = ({ icon: Icon, label, active, href }: Props) => {
  return (
    <div>
      <Link href={href}
        className={twMerge(`flex flex-row items-center text-xl gap-x-5 cursor-pointer text-neutral-400 hover:text-white transition py-1`,active && "text-white")}
      >
        <Icon size={24} />
        <p>{label}</p>
      </Link>
    </div>
  );
};

export default SidebarItem;