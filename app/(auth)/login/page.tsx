"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { BsGoogle } from "react-icons/bs";

// Local imports
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import FormDivider from "@/components/FormDivider";
import { LogInInfo } from "@/interfaces/auth";
import { useRouter } from "next/navigation";

const LogInPage = () => {
  const router = useRouter();

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
    event.preventDefault()

    console.log(logInInfo);
  }

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
              Sign up
            </Button>
          </form>

          <div className="flex flex-col items-center gap-2 text-center text-sm text-mid py-0  mt-8 shadow-none">
            <p className="underline cursor-pointer w-fit transition hover:text-light">Forgot your password?</p>
            <p className="underline cursor-pointer w-fit transition hover:text-light">Don&apos;t have an account? Sign up</p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default LogInPage;