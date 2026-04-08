import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import BackgroundPaths from "@/components/canvas/BackgroundPaths";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luka Bendeliani — Senior Software Engineer",
  description:
    "Senior full-stack engineer with 7+ years of experience. React, Next.js, TypeScript. Building complex, high-impact web products with strong system thinking and polished execution.",
  keywords: [
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Full-Stack Developer",
    "Luka Bendeliani",
  ],
  openGraph: {
    title: "Luka Bendeliani — Senior Software Engineer",
    description:
      "Building complex, high-impact web products with strong system thinking and polished execution.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} dark`}
    >
      <body className="antialiased">
        <BackgroundPaths />
        {children}
      </body>
    </html>
  );
}
