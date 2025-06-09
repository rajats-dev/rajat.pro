import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import ParticlesComponents from "@/components/ParticlesComponents";

const inter = Inter({ subsets: ["cyrillic-ext"] });

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--space-grotesk",
});
const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--jetbrains-mono",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Rajat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          inter.className,
          spaceGrotesk.className
          // JetBrainsMono.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
