import { Josefin_Sans } from "next/font/google";
import localFont from "next/font/local";

export const josefinSans = Josefin_Sans({
  weight: ["400", "300"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin-sans",
});

export const humane = localFont({
  src: "../../local-fonts/Humane-Medium.ttf",
  weight: "variable",
  style: "normal",
  display: "swap",
  variable: "--font-humane",
});

export const maragsa = localFont({
  src: "../../local-fonts/Maragsâ-Display.otf",
  weight: "variable",
  style: "normal",
  display: "swap",
  variable: "--font-maragsa",
});
