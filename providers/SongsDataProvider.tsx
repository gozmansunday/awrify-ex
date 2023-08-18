"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

// Local imports
import supabase from "@/config/supabaseClient";
import {
  useAllSongsStore,
  useUserDataStore,
  useUserSongsStore,
  useLikedSongsStore
} from "@/hooks/useStore";

interface Props {
  children: ReactNode;
}

const SongsDataProvider = ({ children }: Props) => {
  const { setAllSongs } = useAllSongsStore();
  const { setUserSongs } = useUserSongsStore();
  const { setLikedSongs } = useLikedSongsStore();
  const { userData } = useUserDataStore();
  const pathname = usePathname();

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

  // Get songs liked by user
  const getLikedSongs = async () => {
    if (!userData) return;

    const { data, error } = await supabase
      .from("liked_songs")
      .select("*, songs(*)")
      .eq("user_id", userData.user.id)
      .order("created_at", { ascending: false });
    
    if (error) {
      console.error(error);
      return [];
    }

    if (!data) return [];

    const likedSongs = data.map((item) => ({
      ...item.songs
    }));

    setLikedSongs(likedSongs as any);
  };

  // Update songs whenever the database gets updated
  supabase
    .channel("any")
    .on("postgres_changes", {
      event: "*",
      schema: "*",
      table: "songs"
    }, payload => {
      if (payload) {
        getAllSongs();
        getUserSongs();
      }
    }).subscribe();

  useEffect(() => {
    getAllSongs();
    getUserSongs();
    getLikedSongs();
  }, [userData, pathname]);

  return (
    <div>
      {children}
    </div>
  );
};

export default SongsDataProvider;