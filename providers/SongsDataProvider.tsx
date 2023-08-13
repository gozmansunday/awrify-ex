"use client";

import { ReactNode, useEffect } from "react";

// Local imports
import supabase from "@/config/supabaseClient";
import { useSongsStore, useUserDataStore } from "@/hooks/useStore";
import UserDataProvider from "./UserDataProvider";

interface Props {
  children: ReactNode;
}

const SongsDataProvider = ({ children }: Props) => {
  const { setSongs } = useSongsStore();
  const { userData } = useUserDataStore();

  const getSongs = async () => {
    if (!userData) return;

    const { data, error } = await supabase
      .from("songs")
      .select("*")
      .eq("user_id", userData.user.id)
      .order("created_at", { ascending: false });
    
    if (error) {
      console.error(error);
    }

    setSongs(data as any);
  };

  useEffect(() => {
    getSongs();
  }, [userData]);

  return (
    <div>
      {children}
    </div>
  );
};

export default SongsDataProvider;