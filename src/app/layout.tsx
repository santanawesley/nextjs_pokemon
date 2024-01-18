import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemons",
  description: "Conheça mais sobre o seu Pokemon preferido",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <link rel="shortcurt icon" href="/images/favicon.ico"></link>
        </Head>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
