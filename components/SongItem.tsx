import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/interfaces/interface";

interface Props {
  song: Song;
  onClick: (id: string) => void;
}

const SongItem = ({ song, onClick }: Props) => {
  const imagePath = useLoadImage(song);

  return (
    <div className="text-mid italic">
      {song.title}
    </div>
  );
};

export default SongItem;