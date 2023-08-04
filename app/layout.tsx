import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

// Components
import { clash, hubot, manrope, mona, neo, nohemi } from "@/lib/fontConfig";
import Wrapper from "@/components/Wrapper";
import SupabaseProvider from "@/providers/SupabaseProvider";

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
        <SupabaseProvider>
          <Wrapper>
            {children}
          </Wrapper>
        </SupabaseProvider>
      </body>
    </html>
  )
}

export default RootLayout;
