"use client";

import { useEffect } from "react";
import { BsStarFill } from "react-icons/bs";

// Local imports
import Header from "@/components/Header";
import FavSongs from "@/components/FavSongs";
import { useSessionDataStore } from "@/hooks/useStore";

const HomePage = () => {
  const { sessionData, setSessionData } = useSessionDataStore();

  if (sessionData) {
    localStorage.setItem("sessionData", JSON.stringify(sessionData));
  }

  useEffect(() => {
    let localStorageData = localStorage.getItem("sessionData");

    if (localStorageData) {
      let data = JSON.parse(localStorageData);
      setSessionData(data);
    }
  }, []);

  return (
    <main className="p-3 md:p-6">
      <Header>
        <div>
          <h1 className="text-lightest text-2xl font-semibold md:text-3xl">
            {sessionData ? `Welcome back, ${sessionData.user.user_metadata.profile_name}!` : "Listen to the best music!"}
          </h1>
        </div>
        <div className="grid mt-5 lg:grid-cols-2 md:mt-8">
          <FavSongs
            icon={BsStarFill}
            name="Favorite Songs"
            href="favorite"
          />
        </div>
      </Header>

      <section className="mt-8 mb-3">
        <div>
          <h1 className="text-lightest text-xl md:text-2xl">Newest Songs</h1>
        </div>
        <div>
          List of songs!
        </div>
      </section>
    </main>
  )
};

export default HomePage;
