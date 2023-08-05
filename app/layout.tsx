import { ReactNode } from "react";
import type { Metadata } from "next";

// Local imports
import "./globals.css";
import { clash, hubot, manrope, mona, neo, nohemi } from "@/lib/fontConfig";
import Wrapper from "@/components/Wrapper";

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
      <body className="font-hubot bg-darkest">
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  )
}

export default RootLayout;
