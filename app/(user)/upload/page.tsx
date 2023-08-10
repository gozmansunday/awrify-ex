"use client";

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

// Local imports
import UserPageContent from "@/components/UserPageContent";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const UploadSongPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>();

  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      author: "",
      song: null,
      image: null
    }
  });

  const handleChange = (open: boolean) => {
    if (!open) {
      reset();
      router.push("/");
    }
  };

  const handleSongSubmit: SubmitHandler<FieldValues> = async (values) => {
    // Submit to supabase
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
            {...register("author", { required: true })}
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