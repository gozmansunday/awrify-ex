import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface Props {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem = ({ icon: Icon, label, active, href }: Props) => {
  return (
    <Link href={href}
      className={twMerge(
        `flex items-center gap-4 text-lg px-6 py-2 rounded-full transition hover:text-darkest hover:bg-light`,
        active && "bg-brand text-darkest hover:bg-brand"
      )}
    >
      <Icon className="text-2xl pb-1" />
      <p>{label}</p>
    </Link>
  )
};

export default SidebarItem;