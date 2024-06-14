"use client";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import { concateBooleanClass } from "@/util";
import { Session } from "next-auth";
import { SessionProvider, getSession } from "next-auth/react";
import { Inter, Manrope } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import "./globals.css";
// import { metadata as siteMetadata} from "./metadata";
// import { Metadata } from "next";

// export const metadata : Metadata = siteMetadata;

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
    };

    fetchSession();
  }, []);

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <Head>
          <link rel="shortcut icon" href="/active-man-thinking-avatar.png" />
        </Head>
        <body
          className={concateBooleanClass(
            inter.variable,
            manrope.variable,
            "font-mr bg-light dark:bg-dark"
          )}
        >
          <Script id="theme-switcher" strategy="beforeInteractive">
            {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }`}
          </Script>

          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
