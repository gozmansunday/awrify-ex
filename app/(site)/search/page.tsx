"use client";

import Header from "@/components/Header";
import SearchContent from "@/components/SearchContent";
import SearchInput from "@/components/SearchInput";
// Local imports
import supabase from "@/config/supabaseClient";
import { useAllSongsStore, useSearchedSongsStore, useUserDataStore } from "@/hooks/useStore";
import { useEffect } from "react";

interface Props {
  searchParams: {
    title: string;
  }
}

const SearchPage = ({ searchParams }: Props) => {
  const { setSearchedSongs, searchedSongs } = useSearchedSongsStore();
  const { userData } = useUserDataStore();
  const { allSongs } = useAllSongsStore();

  const getSearchedSongs = async (title: string) => {
    if (!userData) return;
    console.log("wagwan!");

    if (!title) {
      setSearchedSongs(allSongs);
      return;
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
    getSearchedSongs(searchParams.title);
  }, [searchedSongs]);
  
  console.log(searchedSongs);
  return (
    <main className="p-3 md:p-6">
      <Header className="space-y-5 md:space-y-8">
        <h1 className="text-lightest text-2xl font-semibold md:text-3xl">
          Search
        </h1>

        <SearchInput />
      </Header>

      <section className="my-8">
        <SearchContent songs={searchedSongs} />
      </section>      
    </main>
  );
};

export default SearchPage;