"use client";

import { BsMusicNoteList, BsPlusLg } from "react-icons/bs";

const Library = () => {
  const handleClick = () => {
    // Handle upload later!
  };

  return (
    <div>
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex gap-3 items-center text-neutral-400">
          <BsMusicNoteList size={24} />
          <p className="text-xl">Your Library</p>
        </div>

        <BsPlusLg
          onClick={handleClick}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>

      <div className="flex flex-col gap-y-2 text-lg px-5 py-4">
        List of songs!
      </div>
    </div>
  );
};

export default Library;