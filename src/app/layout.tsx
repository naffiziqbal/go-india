import type { Metadata } from "next";
import "./globals.css";


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
      <body className="lg:container mx-auto">{children}</body>
    </html>
  );
}
