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
  metadataBase: new URL("https://vimalverma.in"),
  title: {
    default: "Vimal Kumar (VimalVerma) - Software Developer & Web App Creator",
    template: "%s | Vimal Kumar",
  },
  description: "Personal portfolio of Vimal Kumar showcasing skills in JavaScript, React, Next.js, and projects like NFCBuzz and WebNfc.",
  keywords: ["Vimal Kumar", "VimalVerma", "Software Developer", "Web App Creator", "React", "Next.js", "NFC Technology", "Portfolio"],
  authors: [{ name: "Vimal Kumar", url: "https://vimalverma.in" }],
  creator: "Vimal Kumar",
  publisher: "Vimal Kumar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    canonical: "https://vimalverma.in",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vimalverma.in",
    title: "Vimal Kumar - Software Developer & Web App Creator",
    description: "Explore the projects and skills of Vimal Kumar.",
    siteName: "VimalVerma Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Vimal Kumar Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vimal Kumar - Software Developer",
    description: "Personal portfolio of Vimal Kumar showcasing skills and projects.",
    creator: "@vimalverma_in",
    images: ["/profile.jpg"],
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
