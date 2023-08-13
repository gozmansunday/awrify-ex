import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/interfaces/interface";
import Image from "next/image";
import { BsPlayCircleFill } from "react-icons/bs";

interface Props {
  song: Song;
  onClick: (id: string) => void;
}

const SongItem = ({ song, onClick }: Props) => {
  const imagePath = useLoadImage(song);

  return (
    <div
      onClick={() => onClick(song.id)}
      className="relative space-y-1.5 cursor-pointer group"
    >
      <div className="relative aspect-square">
        <Image src={imagePath as string} alt={song.title}
          className="rounded" fill
        />

        <div className="absolute inset-0 bg-transparent group-hover:bg-darkest/40 transition">
          <BsPlayCircleFill className="absolute bottom-3 right-3 text-brand bg-darkest translate-y-1 opacity-0 text-4xl rounded-full transition hover:scale-105 group-hover:translate-y-0 group-hover:opacity-100" />
        </div>
      </div>
      
      <div className="-space-y-1">
        <h3 className="text-sm">{song.title}</h3>
        <h4 className="text-xs text-mid">{song.author}</h4>
      </div>

    </div>
  );
};

export default SongItem;