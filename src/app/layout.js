import { Inter } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "NexusAI — Transform Raw Data Into Structured Intelligence",
  description:
    "Harness the power of connected AI to turn fragmented data streams into actionable insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#06060b] font-sans text-slate-200 antialiased">
        <Navigation />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
