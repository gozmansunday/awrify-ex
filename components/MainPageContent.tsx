"use client";

// Local imports
import { Song } from "@/interfaces/interface";
import SongItem from "./SongItem";

interface Props {
  songs: Song[];
}

const MainPageContent = ({ songs }: Props) => {
  if (songs.length === 0) {
    return (
      <div className="flex items-center justify-center my-10 md:my-20">
        <h3 className="text-base md:text-lg text-mid italic">
          No songs available.
        </h3>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 my-6 gap-6">
      {songs.map((song) => (
        <SongItem
          key={song.id}
          onClick={() => { }}
          song={song}
        />
      ))}
    </div>
  );
};

export default MainPageContent;