import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ChatbotWrapper from "@/components/ChatbotWrapper";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brcstar.in"),
  title: {
    default: "BRC STAR | Dual-Pack Kinetic Energy Recovery Architecture",
    template: "%s | BRC STAR Deep-Tech EV",
  },
  description:
    "BRC STAR (OPC) PRIVATE LIMITED — Deep-tech electric vehicle architecture filed under Indian Patent Application No. 202511050655. Auxiliary mechanical harvesting, closed-loop dynamic battery switching, and high-uptime commercial powertrains.",
  keywords: [
    "BRC STAR",
    "Patent 202511050655",
    "Dual Pack EV Architecture",
    "Kinetic Energy Recovery System",
    "Alternator Control Module ACM",
    "Commercial Electric Vehicle India",
    "StarCraft GT",
    "StarTransit Bus",
    "DPIIT Incubated EV Startup",
  ],
  authors: [{ name: "BRC STAR (OPC) PRIVATE LIMITED", url: "https://brcstar.in" }],
  creator: "Dr. B. Chauhan",
  publisher: "BRC STAR (OPC) PRIVATE LIMITED",
  alternates: {
    canonical: "https://brcstar.in",
  },
  openGraph: {
    title: "BRC STAR | Dual-Pack Kinetic Energy Recovery Architecture",
    description:
      "Deep-tech electric vehicle architecture filed under Indian Patent Application No. 202511050655. Auxiliary mechanical kinetic energy recovery with dynamic dual-pack bus switching.",
    url: "https://brcstar.in",
    siteName: "BRC STAR Deep-Tech Mobility",
    images: [
      {
        url: "https://brcstar.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "BRC STAR Dual-Pack Kinetic Energy Recovery Architecture",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BRC STAR | Dual-Pack Kinetic Energy Recovery Architecture",
    description: "Deep-tech electric mobility filed under Indian Patent Application No. 202511050655.",
    images: ["https://brcstar.in/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://brcstar.in/#organization",
        name: "BRC STAR (OPC) PRIVATE LIMITED",
        legalName: "BRC STAR (OPC) PRIVATE LIMITED",
        identifier: "CIN: U34100RJ2019OPC066948",
        url: "https://brcstar.in",
        logo: "https://brcstar.in/logo.png",
        email: "contact@brcstar.in",
        telephone: "+91-99241-00759",
        address: {
          "@type": "PostalAddress",
          streetAddress: "7SJM-A, Anupgarh",
          addressLocality: "Ganganagar",
          addressRegion: "Rajasthan",
          postalCode: "335701",
          addressCountry: "IN",
        },
        foundingLocation: "Rajasthan, India",
        knowsAbout: [
          "Electric Vehicle Powertrains",
          "Kinetic Energy Recovery Systems (KERS)",
          "Dual-Pack Battery Bus Dynamic Switching",
          "Permanent Magnet Generator Auxiliary Harvesting",
          "Indian Patent Application No. 202511050655",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://brcstar.in/#website",
        url: "https://brcstar.in",
        name: "BRC STAR Digital Platform",
        publisher: {
          "@id": "https://brcstar.in/#organization",
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className={`dark scroll-smooth ${inter.variable} ${orbitron.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme")||"dark";document.documentElement.classList.remove("dark","light");document.documentElement.classList.add(t);document.documentElement.style.colorScheme=t;}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#02040a] text-slate-100 antialiased flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <ChatbotWrapper />
      </body>
    </html>
  );
}
