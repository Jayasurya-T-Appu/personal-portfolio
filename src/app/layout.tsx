import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jayasurya T Appu | Backend Engineer",
  description: "Portfolio of Jayasurya T Appu, a Backend Engineer specializing in scalable microservices, event-driven architectures, Node.js, and Python.",
  keywords: [
    "Jayasurya T Appu", 
    "Backend Engineer", 
    "Software Engineer", 
    "Node.js Developer", 
    "Python Developer", 
    "Microservices", 
    "Portfolio", 
    "REST APIs", 
    "Kafka", 
    "Docker"
  ],
  authors: [{ name: "Jayasurya T Appu" }],
  creator: "Jayasurya T Appu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Jayasurya T Appu | Backend Engineer",
    description: "Portfolio of Jayasurya T Appu, a Backend Engineer specializing in scalable microservices and event-driven architectures.",
    siteName: "Jayasurya T Appu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayasurya T Appu | Backend Engineer",
    description: "Portfolio of Jayasurya T Appu, a Backend Engineer specializing in scalable microservices and event-driven architectures.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col cursor-default">{children}</body>
    </html>
  );
}
