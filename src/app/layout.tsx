import type { Metadata } from "next";
import { krisha, dmSans } from "@/fonts/font";
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
    <html lang="pt-BR">
      <body
        className={`
          ${krisha.variable}
          ${dmSans.variable}
          antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
