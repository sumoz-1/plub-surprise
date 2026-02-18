import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valentine for My Love",
  description: "A cute Valentine website built with Next.js and Tailwind CSS"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}


