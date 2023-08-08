"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import supabase from "@/config/supabaseClient";

// Local imports
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import FormDivider from "@/components/FormDivider";
import { LogInInfo } from "@/interfaces/auth";
import { Label } from "@/components/ui/label";
import { useSessionDataStore } from "@/hooks/useStore";

const LogInPage = () => {
  const router = useRouter();

  const { setSessionData } = useSessionDataStore();
  const [logInInfo, setLogInInfo] = useState<LogInInfo>({
    email: "",
    password: ""
  });
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLogInInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: logInInfo.email,
        password: logInInfo.password,
      });

      if (error) throw error;
      setSessionData(data);
      router.push("/");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="bg-darkest h-full md:py-8 md:bg-dark">
      <Card className="flex flex-col gap-6 max-w-2xl mx-auto py-6 bg-darkest text-lightest border-none shadow-none rounded-none md:rounded-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center md:text-3xl">
            Log in to Awrify.
          </CardTitle>
        </CardHeader>

        <CardContent>
          <section className="md:px-12">
            <Button
              // onClick={}
              className="w-full flex items-center justify-center gap-3 py-6 rounded-md text-light bg-neutral-800 transition hover:bg-neutral-700"
            >
              <BsGoogle />
              <p className="text-sm pt-0.5">
                Continue with Google
              </p>
            </Button>
          </section>

          <div className="my-12 md:px-12">
            <FormDivider />
          </div>

          <form
            onSubmit={handleSubmitForm}
            className="flex flex-col gap-6 md:px-12"
          >
            {/* Email */}
            <section className="space-y-1">
              <Label htmlFor="email" className="text-sm">Email</Label>
              <Input type="email" id="email" name="email" required
                className="bg-inherit border-neutral-600 transition"
                placeholder="example@email.com"
                onChange={handleInputChange}
              />
            </section>

            {/* Password */}
            <section className="space-y-1">
              <Label htmlFor="password" className="text-sm">Password</Label>
              <Input type="password" id="password" name="password" required
                className="bg-inherit border-neutral-600 transition"
                placeholder="password"
                onChange={handleInputChange}
              />
            </section>

            <Button className="w-full py-6 mt-2 bg-brand text-darkest hover:bg-lightest">
              Log in
            </Button>
          </form>

          <div className="flex flex-col items-center gap-2 text-center text-sm text-mid py-0  mt-8 shadow-none">
            <p className="underline cursor-pointer w-fit transition hover:text-light">Forgot your password?</p>
            <p className="w-fit">
              Don&apos;t have an account? &nbsp;
              <Link href="/signup">
                <span className="underline transition hover:text-light">Sign up</span>
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default LogInPage;