import type { Metadata, Viewport } from "next";
import { NavBar } from "@/components/NavBar";
import { DataProvider } from "@/lib/store";
import "./globals.css";

export const metadata: Metadata = {
  title: "GBAutomotores",
  description: "Car dealership management demo: stock, sales and personal.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <DataProvider>
          <NavBar />
          <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">{children}</main>
        </DataProvider>
      </body>
    </html>
  );
}
