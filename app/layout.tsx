import { ReactNode } from "react";
import type { Metadata } from "next";

// Local imports
import "./globals.css";
import { clash, hubot, manrope, mona, neo, nohemi } from "@/lib/fontConfig";
import ToasterProvider from "@/providers/ToasterProvider";

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
        <ToasterProvider />
        {children}
    </body>
    </html>
  )
}

export default RootLayout;
