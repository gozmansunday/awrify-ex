"use client";

import { useEffect } from "react";
import { BsStarFill } from "react-icons/bs";

// Local imports
import Header from "@/components/Header";
import FavSongs from "@/components/FavSongs";
import { useUserDataStore } from "@/hooks/useStore";
import supabase from "@/config/supabaseClient";

const HomePage = () => {
  const { userData, setUserData } = useUserDataStore();

  // Function to fetch user data from Supabase and update state and localStorage
  const fetchUserData = async () => {
    try {
      const { data: user } = await supabase.auth.getUser();

      if (user.user) { // user.user is used because when the user is logged out, user returns {"user":null}
        setUserData(user);
        localStorage.setItem("userData", JSON.stringify(user)); // Store user data in localStorage
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else {
      fetchUserData();
    }
  }, []);

  console.log(userData); //! DELETE

  return (
    <main className="p-3 md:p-6">
      <Header>
        <div>
          <h1 className="text-lightest text-2xl font-semibold md:text-3xl">
            {userData ? `Welcome back, ${userData.user.user_metadata.name.split(" ")[0]}!` : "Listen to the best music!"}
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
