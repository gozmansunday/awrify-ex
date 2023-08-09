"use client";

import { BsGithub, BsGoogle } from "react-icons/bs";
import supabase from "@/config/supabaseClient";

// Local imports
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const LoginPage = () => {
  const handleGoogleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) throw error;
    } catch (error) {
      console.error(error);
    }
  };

  const handleGithubLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
      });

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
            Log in to Awrify.
          </CardTitle>
        </CardHeader>

        <CardContent>
          <section className="flex flex-col gap-6 md:px-12">
            <section>
              <Button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 py-6 rounded-md text-light bg-neutral-800 transition hover:bg-brand hover:text-darkest"
              >
                <BsGoogle />
                <p className="text-sm pt-0.5">Continue with Google</p>
              </Button>
            </section>

            <section>
              <Button
                onClick={handleGithubLogin}
                className="w-full flex items-center justify-center gap-3 py-6 rounded-md text-light bg-neutral-800 transition hover:bg-brand hover:text-darkest"
              >
                <BsGithub />
                <p className="text-sm pt-0.5">Continue with Github</p>
              </Button>
            </section>
          </section>
        </CardContent>
      </Card>
    </main>
  );
};

export default LoginPage;