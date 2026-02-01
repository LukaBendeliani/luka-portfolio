import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import Navigation from "@/components/ui/Navigation";
import GridOverlay from "@/components/brutalist/GridOverlay";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Luka Bendeliani - Software Engineer Portfolio",
  description: "Professional portfolio of Luka Bendeliani, a Software Engineer specializing in React.js, Next.js, TypeScript, and modern web development.",
  keywords: ["Luka Bendeliani", "Software Engineer", "React.js", "Next.js", "TypeScript", "Frontend Developer", "Full Stack Developer", "Web Development", "Portfolio"],
  authors: [{ name: "Luka Bendeliani" }],
  creator: "Luka Bendeliani",
  metadataBase: new URL('https://lukabendelia.com'),
  openGraph: {
    title: "Luka Bendeliani - Software Engineer Portfolio",
    description: "Professional portfolio showcasing expertise in React.js, Next.js, TypeScript, Node.js, and full-stack development. 5+ years of experience building modern web applications.",
    type: "website",
    locale: "en_US",
    url: "https://lukabendelia.com",
    siteName: "Luka Bendeliani Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luka Bendeliani - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luka Bendeliani - Software Engineer Portfolio",
    description: "Professional portfolio showcasing expertise in React.js, Next.js, TypeScript, and full-stack development.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased brutalist`}>
        <Providers>
          {/* <GridOverlay /> */}
          <header>
            <Navigation />
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
