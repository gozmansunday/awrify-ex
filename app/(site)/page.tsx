"use client";

import { BsStarFill } from "react-icons/bs";

// Local imports
import Header from "@/components/Header";
import FavSongs from "@/components/FavSongs";
import { useUserDataStore, useAllSongsStore } from "@/hooks/useStore";
import MainPageContent from "@/components/MainPageContent";

export const revalidate = 0;

const HomePage = () => {
  const { userData } = useUserDataStore();
  const { allSongs } = useAllSongsStore();

  return (
    <main className="p-3 md:p-6">
      <Header className="space-y-5 md:space-y-8">
        <h1 className="text-lightest text-2xl font-semibold md:text-3xl">
          {userData ? `Welcome back, ${userData.user.user_metadata.name.split(" ")[0]}!` : "Listen to the best music!"}
        </h1>
        <div className="grid lg:grid-cols-2">
          <FavSongs
            icon={BsStarFill}
            name="Favorite Songs"
            href="favorite"
          />
        </div>
      </Header>

      <section className="my-8">
        <div>
          <h1 className="text-lightest text-xl md:text-2xl">Newest Songs</h1>
        </div>
        
        <MainPageContent songs={allSongs} />
      </section>
    </main>
  )
};

export default HomePage;
