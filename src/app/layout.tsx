import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Nav/Navbar";

export const metadata: Metadata = {
  title: "Stock Forum",
  description: "Get Your Daily Stock Update Here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto flex flex-row ">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
