import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css"
import React from 'react'
const inter = Inter({ subsets: ['latin'] })
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants/index"
import Header from "@/components/shared/header";

export const metadata: Metadata = {
  title: {
    template: `%s | Proshop`,
    default: `${APP_NAME}`
  },
  description: `${APP_DESCRIPTION}`,
  metadataBase: new URL(SERVER_URL)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
