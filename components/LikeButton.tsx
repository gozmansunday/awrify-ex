"use client";

import { useEffect, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

import { Button } from "./ui/button";
import { Song } from "@/interfaces/interface";
import { useUserDataStore } from "@/hooks/useStore";
import supabase from "@/config/supabaseClient";
import { toast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";

interface Props {
  song: Song;
}

const LikeButton = ({ song }: Props) => {
  const router = useRouter();
  const { userData } = useUserDataStore();
  const [isLiked, setIsLiked] = useState(false);

  const Icon = isLiked ? BsHeartFill : BsHeart;

  useEffect(() => {
    if (!userData) return;

    const fetchData = async () => {
      const { data, error } = await supabase
        .from("liked_songs")
        .select("*")
        .eq("user_id", userData.user.id)
        .eq("song_id", song.id)
        .single();
      
      if (!error && data) {
        setIsLiked(true);
      }
    };

    fetchData();
  }, [song.id, supabase, userData?.user.id]);

  const handleLike = async () => {
    if (!userData) {
      router.push("/login");
      return;
    }

    if (isLiked) {
      const { error } = await supabase
        .from("liked_songs")
        .delete()
        .eq("user_id", userData.user.id)
        .eq("song_id", song.id);
      
      if (error) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `${error.message}`,
          action: <ToastAction altText="Close">Close</ToastAction>
        });
      } else {
        setIsLiked(false);
        return toast({
          title: "Unliked!",
          description: "The song has been removed from favourites.",
          action: <ToastAction altText="Close">Close</ToastAction>
        });
      }
    } else {
      const { error } = await supabase
        .from("liked_songs")
        .insert({
          user_id: userData.user.id,
          song_id: song.id,
        });
      
      if (error) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `${error.message}`,
          action: <ToastAction altText="Close">Close</ToastAction>
        });
      } else {
        setIsLiked(true);
        return toast({
          title: "Liked!",
          description: "The song has been added to favourites.",
          action: <ToastAction altText="Close">Close</ToastAction>
        });
      }
    }
  };

  return (
    <Button
      onClick={handleLike}
      size="icon"
      className={`bg-darkest ${isLiked && "text-brand"} hover:bg-darkest hover:text-brand`}
    >
      <Icon className="text-xl" />
    </Button>
  );
};

export default LikeButton;