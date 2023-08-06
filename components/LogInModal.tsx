"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { BsGoogle } from "react-icons/bs";

// Local imports
import Modal from "./Modal";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import AuthInfo from "@/interfaces/auth";
import supabase from "@/config/supabaseClient";

interface Props {
  className: string;
  content: string;
};

const LogInModal = ({ className, content }: Props) => {
  const router = useRouter();

  const [authInfo, setAuthInfo] = useState<AuthInfo>({
    email: "",
    password: ""
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAuthInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: authInfo.email,
      password: authInfo.password,
    });

    if (error) {
      console.error(error)
    }

    if (data) {
      router.refresh();
      console.log(data);
    }
  };

  return (
    <Modal
      buttonContent={content}
      buttonClassName={className}
      modalTitle="Welcome back"
    >
      <button className="w-full flex items-center justify-center gap-3 py-3 rounded-md text-light bg-neutral-800 hover:bg-neutral-700">
        <BsGoogle />
        <p className="text-sm pt-0.5">Continue with Google</p>
      </button>

      <div className="relative flex items-center justify-center border-t border-neutral-700 text-light">
        <p className="absolute text-xs bg-dark text-neutral-700 p-1">or</p>
      </div>

      <form
        onSubmit={handleSubmitForm}
        className="flex flex-col gap-6"
      >
        {/* Email Address */}
        <section className="space-y-1">
          <label htmlFor="email" className="text-sm">Email Address</label>
          <Input type="email" id="email" name="email" required
            className="bg-inherit border-neutral-600 transition"
            placeholder="example@email.com"
            onChange={handleInputChange}
          />
        </section>

        {/* Password */}
        <section className="space-y-1">
          <label htmlFor="password" className="text-sm">Password</label>
          <Input type="password" id="password" name="password" required
            className="bg-inherit border-neutral-600 transition"
            onChange={handleInputChange}
          />
        </section>

        <Button className="w-full py-6 mt-2 bg-brand text-darkest hover:bg-lightest">
          Log in
        </Button>
      </form>

      <div className="flex flex-col items-center gap-2 text-center text-xs text-mid py-0 -mt-2 mb-2 shadow-none">
        <p className="underline cursor-pointer w-fit">Send a magic link email</p>
        <p className="underline cursor-pointer w-fit">Forgot your password?</p>
      </div>
    </Modal>
  );
};

export default LogInModal;