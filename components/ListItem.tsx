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
        <div className="font-clash -space-y-2 text-left">
          <h3 className="text-lg font-semibold md:text-xl">Favorite Songs</h3>
          <h5 className="text-sm md:text-base">0 songs</h5>
        </div>
      </section>

      <BsPlayCircleFill className="text-darkest text-5xl rounded-full transition md:opacity-0 group-hover:opacity-100 hover:scale-110 md:text-6xl" />
    </button>
  );
};

export default ListItem;