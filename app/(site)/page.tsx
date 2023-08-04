"use client";

import { BsStarFill } from "react-icons/bs";

// Components
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

const Home = () => {
  return (
    <main className="p-3 md:p-6">
      <Header>
        <div>
          <h1 className="text-lightest text-4xl font-semibold md:text-5xl">
            Welcome back
          </h1>
        </div>
        <div className="grid mt-5 lg:grid-cols-2 md:mt-8">
          <ListItem
            icon={BsStarFill}
            name="Favorite Songs"
            href="favorite"
          />
        </div>
      </Header>
    </main>
  )
};

export default Home;
