"use client";

// Local imports
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

const UserPageContent = ({ children, title }: Props) => {
  return (
    <main className="bg-darkest h-full md:py-8 md:bg-dark">
      <Card className="flex flex-col gap-6 max-w-2xl mx-auto py-6 bg-darkest text-lightest border-none shadow-none rounded-none md:rounded-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center md:text-3xl">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          {children}
        </CardContent>
      </Card>
    </main>
  );
};

export default UserPageContent;