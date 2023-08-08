"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { BsGoogle } from "react-icons/bs";

// Local imports
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import FormDivider from "@/components/FormDivider";
import { SignUpInfo } from "@/interfaces/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import supabase from "@/config/supabaseClient";

const SignUpPage = () => {
  const router = useRouter();

  const [signUpInfo, setSignUpInfo] = useState<SignUpInfo>({
    name: "",
    email: "",
    password: ""
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: signUpInfo.email,
        password: signUpInfo.password,
        options: {
          data: {
            profile_name: signUpInfo.name,
          },
        },
      });

      console.log(data);
      if (error) throw error;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="bg-darkest h-full md:py-8 md:bg-dark">
      <Card className="flex flex-col gap-6 max-w-2xl mx-auto py-6 bg-darkest text-lightest border-none shadow-none rounded-none md:rounded-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center md:text-3xl">
            Sign up to Awrify for free.
          </CardTitle>
        </CardHeader>

        <CardContent>
          <section className="md:px-12">
            <Button
              // onClick={}
              className="w-full flex items-center justify-center gap-3 py-6 rounded-md text-light bg-neutral-800 transition hover:bg-neutral-700"
            >
              <BsGoogle />
              <p className="text-sm pt-0.5">Continue with Google</p>
            </Button>
          </section>

          <div className="my-12 md:px-12">
            <FormDivider />
          </div>

          <form
            onSubmit={handleSubmitForm}
            className="flex flex-col gap-6 md:px-12"
          >
            {/* Name */}
            <section className="space-y-1">
              <Label htmlFor="name" className="text-sm">What should we call you?</Label>
              <Input type="text" id="name" name="name" required
                className="bg-inherit border-neutral-600 transition"
                placeholder="Enter a profile name."
                onChange={handleInputChange}
              />
            </section>

            {/* Email Address */}
            <section className="space-y-1">
              <Label htmlFor="email" className="text-sm">What&apos;s your email address?</Label>
              <Input type="email" id="email" name="email" required
                className="bg-inherit border-neutral-600 transition"
                placeholder="Enter your email."
                onChange={handleInputChange}
              />
            </section>

            {/* Password */}
            <section className="space-y-1">
              <Label htmlFor="password" className="text-sm">Create a password</Label>
              <Input type="password" id="password" name="password" required
                className="bg-inherit border-neutral-600 transition"
                placeholder="Create a password."
                onChange={handleInputChange}
              />
            </section>

            <Button className="w-full py-6 mt-2 bg-brand text-darkest hover:bg-lightest">
              Sign up
            </Button>
          </form>

          <div className="flex flex-col items-center gap-2 text-center text-sm text-mid py-0  mt-8 shadow-none">
            <p className="w-fit">
              Already have an account? &nbsp;
              <Link href="/login">
                <span className="underline transition hover:text-light">Log in</span>
                </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default SignUpPage;