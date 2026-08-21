import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ViraChatbot } from "@/components/ViraChatbot";
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
  title: "BRC STAR | Self Volt Electric Vehicle Technology | Official Platform",
  description:
    "BRC STAR (OPC) PRIVATE LIMITED — Pioneering India's deep-tech Self Volt Electric Vehicle architecture. Closed-loop dual-battery energy recovery, 850 km real-world range, and reduced grid power dependency.",
  keywords: [
    "BRC STAR",
    "Self Volt EV",
    "Electric Vehicle India",
    "Deep Tech EV",
    "Closed Loop Battery",
    "Dual Pack EV",
    "StarCraft GT",
    "StarPulse SUV",
    "StarFleet Commercial",
    "StarTransit Bus",
    "Clean Mobility",
  ],
  authors: [{ name: "BRC STAR (OPC) PRIVATE LIMITED" }],
  openGraph: {
    title: "BRC STAR | Self Volt Electric Vehicle Platform",
    description:
      "Deep-tech electric vehicle architecture with closed-loop dual-battery energy recoup and high-efficiency permanent magnet harvesting.",
    url: "https://brcstar.in",
    siteName: "BRC STAR EV",
    images: [
      {
        url: "https://brcstar.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "BRC STAR Self Volt EV",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BRC STAR | Self Volt Electric Vehicle Platform",
    description: "Deep-tech electric vehicle architecture with closed-loop kinetic energy recoup.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BRC STAR (OPC) PRIVATE LIMITED",
    url: "https://brcstar.in",
    logo: "https://brcstar.in/logo.png",
    description:
      "Indian deep-tech automotive startup developing proprietary BRC STAR Self Volt Electric Vehicle technology.",
    foundingLocation: "Rajasthan, India",
    knowsAbout: [
      "Electric Vehicle Powertrains",
      "Closed-Loop Dual-Battery Energy Management",
      "Permanent Magnet Generator Kinetic Harvesting",
      "Solid-State Battery Thermal Balance",
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
      <body className="min-h-screen bg-[#02040a] text-slate-100 antialiased flex flex-col font-sans">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <ViraChatbot />
      </body>
    </html>
  );
}
