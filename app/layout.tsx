import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Project Imports
import Providers from "@/providers/providers";

export const metadata: Metadata = {
  title: "Life Smile",
  description: "App that displays user profiles data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
