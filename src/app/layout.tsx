import type { Metadata } from "next";
import { josefinSans, humane, maragsa } from "@/fonts/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Allan | Desenvolvedor Front-End & UI/UX Designer",
  description: "Criado por Allan Silva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`
          ${humane.variable}
          ${josefinSans.variable}
          ${maragsa.variable}
          antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
