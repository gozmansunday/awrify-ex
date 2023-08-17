"use client";

import { Song } from "@/interfaces/interface";
import MediaItem from "./MediaItem";

interface Props {
  songs: Song[];
}

const SearchContent = ({ songs }: Props) => {
  if (songs.length === 0) {
    return (
      <div className="flex items-center justify-center my-10 md:my-20">
        <h3 className="text-base md:text-lg text-mid italic">
          No songs found.
        </h3>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3 my-3">
      {songs.map((song) => (
        <MediaItem
          key={song.id}
          onClick={() => { }}
          song={song}
        />
      ))}
    </div>
  );
};

export default SearchContent;