import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["cyrillic-ext"] });

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--space-grotesk",
});

export const metadata: Metadata = {
  title: "Hi I'm Rajat.S",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, spaceGrotesk.className)}>
        {children}
      </body>
    </html>
  );
}
