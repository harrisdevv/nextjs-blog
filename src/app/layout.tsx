import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hien's Digital Shipyard",
  description: "Hey there, fellow tech enthusiasts! Welcome to my blog where I share my tech journey. Join me as I explore new technologies, tackle coding challenges, and strive to level up as a software engineer every day. From cool tools to handy tips, let's learn and grow together in the wonderful world of technology!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
