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

export const metadata = {
  title: "Vimal Kumar (VimalVerma) - Software Developer & Web App Creator",
  description: "Personal portfolio of Vimal Kumar showcasing skills in JavaScript, React, Next.js, and projects like NFCBuzz and WebNfc.",
  keywords: ["Vimal Kumar", "VimalVerma", "Software Developer", "Web App Creator", "React", "Next.js", "NFC Technology", "Portfolio"],
  authors: [{ name: "Vimal Kumar", url: "https://vdev.in" }],
  creator: "Vimal Kumar",
  publisher: "Vimal Kumar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://vdev.in",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vdev.in",
    title: "Vimal Kumar - Software Developer & Web App Creator",
    description: "Explore the projects and skills of Vimal Kumar.",
    siteName: "VimalVerma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vimal Kumar - Software Developer",
    description: "Personal portfolio of Vimal Kumar showcasing skills and projects.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth", scrollPaddingTop: "100px" }}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
