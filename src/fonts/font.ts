import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

export const dmSans = DM_Sans({
  weight: ["200", "500"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const krisha = localFont({
  src: "../../local-fonts/Krisha-Regular.otf",
  weight: "variable",
  style: "normal",
  display: "swap",
  variable: "--font-krisha",
});
