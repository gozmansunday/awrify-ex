"use client";

import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { BsPlayCircleFill } from "react-icons/bs";

interface Props {
  icon: IconType;
  name: string;
  href: string;
}

const ListItem = ({ icon: Icon, name, href }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    // Add auth before push
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className="relative flex items-center justify-between bg-brand text-darkest w-full rounded-3xl px-4 py-2 group md:px-6 md:py-3"
    >
      <section className="flex items-center gap-3 h-full md:gap-5">
        <Icon className="text-3xl md:text-4xl" />
        <h3 className="text-2xl font-semibold font-clash pt-1.5 md:text-3xl">Favorite Songs</h3>
      </section>

      <BsPlayCircleFill className="text-darkest text-5xl rounded-full transition md:opacity-0 group-hover:opacity-100 hover:scale-110 md:text-6xl" />
    </button>
  );
};

export default ListItem;