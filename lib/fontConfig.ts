import localFont from "next/font/local";
import { Manrope } from "next/font/google";


export const clash = localFont({
  src: "../public/fonts/Clash.woff2",
  display: "swap",
  weight: "400",
  style: "normal",
  variable: "--font-clash",
});

export const hubot = localFont({
  src: "../public/fonts/Hubot.woff2",
  display: "swap",
  weight: "400",
  style: "normal",
  variable: "--font-hubot",
});

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  variable: "--font-manrope",
});

export const mona = localFont({
  src: "../public/fonts/Mona.woff2",
  display: "swap",
  weight: "400",
  style: "normal",
  variable: "--font-mona",
});

export const neo = localFont({
  src: "../public/fonts/Neo.woff2",
  display: "swap",
  weight: "400",
  style: "normal",
  variable: "--font-neo",
});

export const nohemi = localFont({
  src: "../public/fonts/Nohemi.woff2",
  display: "swap",
  weight: "400",
  style: "normal",
  variable: "--font-nohemi",
});