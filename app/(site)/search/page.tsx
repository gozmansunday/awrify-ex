"use client";

import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
// Local imports
import supabase from "@/config/supabaseClient";
import { useAllSongsStore, useSearchedSongsStore, useUserDataStore } from "@/hooks/useStore";

interface Props {
  searchParams: {
    title: string;
  }
}

const SearchPage = ({ searchParams }: Props) => {
  const { setSearchedSongs } = useSearchedSongsStore();
  const { userData } = useUserDataStore();
  const { allSongs } = useAllSongsStore();

  const getSearchedSongs = async (title: string) => {
    if (!userData) return;

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

  return (
    <main className="p-3 md:p-6">
      <Header>
        <div>
          <h1 className="text-lightest text-2xl font-semibold md:text-3xl">
            Search
          </h1>

          <SearchInput />
        </div>
      </Header>
    </main>
  );
};

export default SearchPage;