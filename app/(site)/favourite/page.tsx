"use client";

import { BsStarFill } from "react-icons/bs";

// Local imports
import { useAllSongsStore, useLikedSongsStore } from "@/hooks/useStore";
import Header from "@/components/Header";
import FavSongsPageContent from "@/components/FavSongsPageContent";

export const revalidate = 0;

const FavSongsPage = () => {
  const { likedSongs } = useLikedSongsStore();

  return (
    <main className="p-3 md:p-6">
      <Header className="space-y-5 md:space-y-8">
        <section className="flex items-center gap-4">
          <h1 className="text-lightest text-3xl font-bold md:text-4xl">
            Favourite Songs
          </h1>
        </section>
      </Header>

      <section className="my-8">
        <FavSongsPageContent songs={likedSongs} />
      </section>
    </main>
  );
};

export default FavSongsPage;