"use client";

import { BsMusicNoteList, BsPlusLg } from "react-icons/bs";

// Local imports
import Box from "./Box";
import { Button } from "./ui/button";

const Library = () => {
  const handleUpload = () => {
    // Handle upload
  };

  return (
    <section className="h-full overflow-y-auto">
      <div className="flex items-center justify-between text-mid">
        <div className="inline-flex items-center gap-3">
          <BsMusicNoteList className="text-2xl" />
          <h3>Library</h3>
        </div>

        <Button onClick={handleUpload} size="icon" className="text-mid shadow-none hover:text-lightest">
          <BsPlusLg className="text-2xl" />
        </Button>
      </div>

      <Box>
        List of songs!
      </Box>
    </section>
  )
};

export default Library;