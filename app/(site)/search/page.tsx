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
    <div>
      
    </div>
  );
};

export default SearchPage;