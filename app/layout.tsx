import type { Metadata } from "next";
import {  Heebo, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Head from "next/head";
const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ripanul Alam",
  description: "Web developer and designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./RR_logo.png" />
      </Head>
      <body className={`${heebo.variable} ${nunito.variable} antialiased`}>
        <header className="h-[64px]">
          <Navbar />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
