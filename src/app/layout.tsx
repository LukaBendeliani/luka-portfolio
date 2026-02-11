import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Luka Bendeliani — Senior Software Engineer",
  description:
    "Professional portfolio showcasing expertise in React.js, Next.js, TypeScript, Node.js, and full-stack development. 7+ years of experience building modern, high-impact web applications.",
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
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
