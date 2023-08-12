"use client";

import { FormEvent, useEffect, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

// Local imports
import UserPageContent from "@/components/UserPageContent";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useUserDataStore } from "@/hooks/useStore";
import supabase from "@/config/supabaseClient";

const UploadSongPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { userData, setUserData } = useUserDataStore();

  const router = useRouter();
  const { toast } = useToast();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      author: "",
      song: null,
      image: null
    }
  });

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleSongSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);

      const songFile = values.song?.[0];
      const imageFile = values.image?.[0];

      console.log(userData);

      if (imageFile) {
        console.log("image!");
      }

      if (songFile) {
        console.log("song!");
      }


      if (!songFile || !imageFile || !userData) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There are some fields missing.",
          action: <ToastAction altText="Close">Close</ToastAction>
        });
        return;
      }

      const uniqueID = uuidv4();

      // Upload song
      const { data: songData, error: songError } = await supabase
        .storage
        .from("songs")
        .upload(`song-${values.title}-${uniqueID}`, songFile, {
          cacheControl: "3600",
          upsert: false
        });

      if (songError) {
        setIsLoading(false);
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed song upload.",
          action: <ToastAction altText="Close">Close</ToastAction>
        });
      }

      // Upload image
      const { data: imageData, error: imageError } = await supabase
        .storage
        .from("images")
        .upload(`image-${values.title}-${uniqueID}`, imageFile, {
          cacheControl: "3600",
          upsert: false
        });

      if (imageError) {
        setIsLoading(false);
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Failed image upload.",
          action: <ToastAction altText="Close">Close</ToastAction>
        });
      }

      // Insert to the supabase database
      const { error: supabaseError } = await supabase
        .from("songs")
        .insert({
          user_id: userData.user.id,
          title: values.title,
          author: values.author,
          image_path: imageData.path,
          song_path: songData.path,
        });

      if (supabaseError) {
        setIsLoading(false);
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `${supabaseError.message}`,
          action: <ToastAction altText="Close">Close</ToastAction>
        });
      }

      router.push("/");
      reset();
      setIsLoading(false);
      toast({
        title: "Song created!",
        description: "Your song has been created.",
        action: <ToastAction altText="Close">Close</ToastAction>
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Close">Close</ToastAction>
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <UserPageContent title="Add a song">
      <form
        onSubmit={handleSubmit(handleSongSubmit)}
        className="flex flex-col gap-6 md:px-12"
      >
        {/* Song Title */}
        <Input
          id="title" disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Song Title"
          className="bg-inherit border-neutral-600 p-5 focus-visible:ring-neutral-600"
        />

        {/* Song Author */}
        <Input
          id="author" disabled={isLoading}
          {...register("author", { required: true })}
          placeholder="Song Author"
          className="bg-inherit border-neutral-600 p-5 focus-visible:ring-neutral-600"
        />

        {/* Song File */}
        <section className="space-y-1">
          <Label>Select a song file</Label>
          <Input
            id="author" type="file"
            disabled={isLoading} accept=".mp3"
            {...register("song", { required: true })}
            className="bg-inherit border-neutral-600 px-4 py-2.5 h-[42.42px] focus-visible:ring-neutral-600"
          />
        </section>

        {/* Song Image File */}
        <section className="space-y-1">
          <Label>Select an image</Label>
          <Input
            id="image" type="file"
            disabled={isLoading} accept="image/*"
            {...register("image", { required: true })}
            className="bg-inherit border-neutral-600 px-4 py-2.5 h-[42.42px] focus-visible:ring-neutral-600"
          />
        </section>

        <Button size="lg" className="rounded-md shadow-none py-6 text-lightest bg-dark transition hover:text-darkest hover:bg-brand">
          Create
        </Button>
      </form>
    </UserPageContent>
  )
}

export default UploadSongPage;