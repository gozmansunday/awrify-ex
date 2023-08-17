"use client";

// Local imports
import { Song } from "@/interfaces/interface";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";

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
        <div key={song.id} className="flex items-center gap-3">
          <div className="w-full">
            <MediaItem
              onClick={() => { }}
              song={song}
            />
          </div>

          <LikeButton song={song} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;