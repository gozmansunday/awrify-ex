"use client";

import { ReactNode, useEffect } from "react";

// Local imports
import supabase from "@/config/supabaseClient";
import { useAllSongsStore, useUserDataStore, useUserSongsStore, useSearchedSongsStore } from "@/hooks/useStore";

interface Props {
  children: ReactNode;
}

const SongsDataProvider = ({ children }: Props) => {
  const { setAllSongs } = useAllSongsStore();
  const { setUserSongs } = useUserSongsStore();
  const { setSearchedSongs } = useSearchedSongsStore();
  const { userData } = useUserDataStore();

  // Get all songs in database
  const getAllSongs = async () => {
    const { data, error } = await supabase
      .from("songs")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (error) {
      console.error(error);
    }

    setAllSongs(data as any);
  };

  // Get songs created by user
  const getUserSongs = async () => {
    if (!userData) return;

    const { data, error } = await supabase
      .from("songs")
      .select("*")
      .eq("user_id", userData.user.id)
      .order("created_at", { ascending: false });
    
    if (error) {
      console.error(error);
    }

    setUserSongs(data as any);
  };

  // Get searched songs
  const getSearchedSongs = async (title: string) => {
    if (!userData) return;

    if (!title) {
      const allSongs = await getAllSongs();
      return allSongs;
    }

    const { data, error } = await supabase
      .from("songs")
      .select("*")
      .ilike("title", `%${title}%`)
      .order("created_at", { ascending: false });
    
    if (error) {
      console.error(error);
    }

    setSearchedSongs(data as any);
  };

  useEffect(() => {
    // Update songs whenever the database gets updated
    supabase
      .channel("any")
      .on("postgres_changes", {
        event: "*",
        schema: "public",
        table: "songs"
      }, payload => {
        if (payload) {
          getAllSongs();
          getUserSongs();
        }
      }).subscribe();
    
    getAllSongs();
    getUserSongs();
  }, [userData]);

  return (
    <div>
      {children}
    </div>
  );
};

export default SongsDataProvider;