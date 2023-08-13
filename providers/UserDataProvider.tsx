"use client";

import { ReactNode, useEffect } from "react";

// Local imports
import { useUserDataStore } from "@/hooks/useStore";
import supabase from "@/config/supabaseClient";

interface Props {
  children: ReactNode;
}

const UserDataProvider = ({ children }: Props) => {
  const { setUserData } = useUserDataStore();

  // Function to fetch user data from Supabase and update state and localStorage
  const fetchUserData = async () => {
    try {
      const { data: user } = await supabase.auth.getUser();

      if (user.user) { // user.user is used because when the user is logged out, user returns {"user":null}
        setUserData(user);
        localStorage.setItem("userData", JSON.stringify(user)); // Store user data in localStorage
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else {
      fetchUserData();
    }
  }, []);

  return (
    <div>
      {children}
    </div>
  );
};

export default UserDataProvider;