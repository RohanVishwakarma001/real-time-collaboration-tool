import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "GangaStore",
  description:
    "GangaStore is your reliable, secure, and easy-to-use cloud storage platform, designed to help you store, share, and manage your files effortlessly. Named after the sacred Ganges River, symbolizing flow, connection, and accessibility, GangaStore ensures that your data is always at your fingertips—whether you're at home, at work, or on the go",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}
