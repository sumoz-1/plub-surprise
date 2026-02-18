import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "POS + ERP Platform",
  description: "Unified POS and ERP platform with AI"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}


