import HomeContent from "./components/HomeContent";

export const metadata = {
  title: "Vimal Kumar - Software Developer & Web App Creator",
  description: "Portfolio of Vimal Kumar (VimalVerma), a Software Developer specializing in React, Next.js, and NFC technology. Explore projects, skills, and articles.",
  keywords: ["Software Developer", "React", "Next.js", "Web NFC", "Vimal Kumar", "VimalVerma", "Portfolio", "Frontend Developer"],
  openGraph: {
    title: "Vimal Kumar - Software Developer",
    description: "Building digital solutions with React and Next.js.",
    url: "https://vimalverma.in",
    siteName: "Vimal Kumar Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 600,
        alt: "Vimal Kumar Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vimal Kumar - Software Developer",
    description: "Building digital solutions with React and Next.js.",
    creator: "@vimalverma_in",
    images: ["/profile.jpg"],
  },
  alternates: {
    canonical: "https://vimalverma.in",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return <HomeContent />;
}
