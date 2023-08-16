"use client";

import { ReactNode, useEffect } from "react";

// Local imports
import supabase from "@/config/supabaseClient";
import { useAllSongsStore, useUserDataStore, useUserSongsStore } from "@/hooks/useStore";
import UserDataProvider from "./UserDataProvider";

interface Props {
  children: ReactNode;
}

const SongsDataProvider = ({ children }: Props) => {
  const { setAllSongs } = useAllSongsStore();
  const { setUserSongs } = useUserSongsStore();
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

  useEffect(() => {
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