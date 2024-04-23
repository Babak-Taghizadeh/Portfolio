import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Montserrat } from "next/font/google";

const antonio = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-Fredoka',
  display: "swap"
})

export const metadata: Metadata = {
  title: "Babak Taghizadeh | Portfolio",
  description: "Frontend developer - NextJs | Explore the creative work of Babak, showcasing a diverse range of design and development projects. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={antonio.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
