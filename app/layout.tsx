import { ReactNode } from "react";
import type { Metadata } from "next";

// Local imports
import "./globals.css";
import { clash, hubot, manrope, mona, neo, nohemi } from "@/lib/fontConfig";
import { Toaster } from "@/components/ui/toaster";
import UserDataProvider from "@/providers/UserDataProvider";
import SongsDataProvider from "@/providers/SongsDataProvider";

export const metadata: Metadata = {
  title: "Awrify",
}

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  const fontVariables = `${clash.variable} ${hubot.variable} ${manrope.variable} ${mona.variable} ${neo.variable} ${nohemi.variable}`;

  return (
    <html lang="en" className={`${fontVariables}`}>
      <body className="font-hubot bg-darkest min-h-[100dvh]">
        <UserDataProvider>
          <SongsDataProvider>
            <Toaster />
            {children}
          </SongsDataProvider>
        </UserDataProvider>
    </body>
    </html>
  )
}

export default RootLayout;
