// Local imports
import { Song } from "@/interfaces/interface";
import { useUserDataStore } from "@/hooks/useStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";

interface Props {
  songs: Song[];
}

const FavSongsPageContent = ({ songs }: Props) => {
  const router = useRouter();
  const { userData } = useUserDataStore();

  useEffect(() => {
    if (!userData) {
      router.replace("/");
    }
  }, [userData, router]);

  if (songs.length === 0) {
    return (
      <div className="flex items-center justify-center my-10 md:my-20">
        <h3 className="text-base md:text-lg text-mid italic">
          No favourite songs.
        </h3>
      </div>
    )
  }

  return (
    <section className="flex flex-col gap-3 my-3">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-3">
          <div className="w-full">
            <MediaItem
              onClick={() => { }}
              song={song}
            />
          </div>

          <LikeButton song={song} />
        </div>
      ))}
    </section>
  );
};

export default FavSongsPageContent;