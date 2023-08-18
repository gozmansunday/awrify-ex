import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  icon: IconType;
  label: string;
  href: string;
}

const SidebarItem = ({ icon: Icon, label, href }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}
      className={twMerge(
        `flex items-center gap-3 px-4 pt-3 pb-2.5 rounded-xl transition hover:text-darkest hover:bg-lightest`,
        isActive && "bg-brand text-darkest hover:bg-brand"
      )}
    >
      <Icon className="text-2xl pb-1" />
      <p>{label}</p>
    </Link>
  )
};

export default SidebarItem;