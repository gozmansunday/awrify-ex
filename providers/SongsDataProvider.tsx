"use client";

import { ReactNode, useEffect } from "react";

// Local imports
import supabase from "@/config/supabaseClient";
import { useSongsStore } from "@/hooks/useStore";

interface Props {
  children: ReactNode;
}

const SongsDataProvider = ({ children }: Props) => {
  const { setSongs } = useSongsStore();

  const getSongs = async () => {
    const { data, error } = await supabase
      .from("songs")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (error) {
      console.error(error);
    }

    setSongs(data as any);
  };

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <div>
      {children}
    </div>
  );
};

export default SongsDataProvider;