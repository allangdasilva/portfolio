import type { Metadata } from "next";
import { krisha, dmSans } from "@/fonts/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Allan Silva | Desenvolvedor Front-End & UI/UX Designer",
  description:
    "Portfólio Allan Silva. Desenvolvedor Front-End e UI/UX Designer, projetado e criado por Allan Silva",
  icons: {
    icon: [
      {
        url: "/svg/favicon-light.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/svg/favicon-dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          ${krisha.variable}
          ${dmSans.variable}
          antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
