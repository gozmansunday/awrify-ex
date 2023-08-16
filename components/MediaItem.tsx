"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/interfaces/interface";
import Image from "next/image";

interface Props {
  onClick?: (id: string) => void;
  song: Song;
}

const MediaItem = ({ onClick, song }: Props) => {
  const imageUrl = useLoadImage(song);

  const handleClick = () => {
    if (onClick) {
      return onClick(song.id);
    }

    // TODO: Turn on player
  };

  return (
    <div onClick={handleClick}
      className="flex items-center gap-3 p-1 rounded-xl cursor-pointer bg-transparent hover:bg-neutral-800/75"
    >
      <div className="relative min-w-[40px] min-h-[40px] overflow-hidden">
        <Image src={imageUrl as string} alt={song.title}
          className="rounded-lg" fill
        />
      </div>

      <div>
        <p className="text-sm">{song.title}</p>
        <p className="text-xs text-mid">{song.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;