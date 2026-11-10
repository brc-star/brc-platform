import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ChatbotWrapper from "@/components/ChatbotWrapper";
import { MobileAppBridge } from "@/components/MobileAppBridge";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#060913",
};

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
  metadataBase: new URL("https://www.brcstar.in"),
  title: {
    default: "BRC STAR | Dual-Pack Kinetic Energy Recovery Architecture",
    template: "%s | BRC STAR",
  },
  description:
    "BRC STAR (OPC) PRIVATE LIMITED — Deep-tech electric vehicle architecture filed under Indian Patent Application No. 202511050655. Auxiliary mechanical harvesting, closed-loop dynamic battery switching, and high-uptime commercial powertrains.",
  authors: [{ name: "BRC STAR (OPC) PRIVATE LIMITED", url: "https://www.brcstar.in" }],
  creator: "Dr. B. Chauhan",
  publisher: "BRC STAR (OPC) PRIVATE LIMITED",
  alternates: {
    canonical: "https://www.brcstar.in",
  },
  openGraph: {
    title: "BRC STAR | Dual-Pack Kinetic Energy Recovery Architecture",
    description:
      "Deep-tech electric vehicle architecture filed under Indian Patent Application No. 202511050655. Auxiliary mechanical kinetic energy recovery with dynamic dual-pack bus switching.",
    url: "https://www.brcstar.in",
    siteName: "BRC STAR Deep-Tech Mobility",
    images: [
      {
        url: "https://www.brcstar.in/og-image.png",
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
    images: ["https://www.brcstar.in/og-image.png"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
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
        "@id": "https://www.brcstar.in/#organization",
        name: "BRC STAR (OPC) PRIVATE LIMITED",
        legalName: "BRC STAR (OPC) PRIVATE LIMITED",
        identifier: "CIN: U34100RJ2019OPC066948",
        url: "https://www.brcstar.in",
        logo: "https://www.brcstar.in/icon-512.png",
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
        "@id": "https://www.brcstar.in/#website",
        url: "https://www.brcstar.in",
        name: "BRC STAR Digital Platform",
        publisher: {
          "@id": "https://www.brcstar.in/#organization",
        },
      },
      {
        "@type": "Product",
        "@id": "https://www.brcstar.in/vehicles/starcraft-gt#product",
        name: "BRC STAR StarCraft GT Hyper-Sedan",
        description: "Next-generation electric passenger hyper-sedan with dual-pack kinetic energy recovery architecture.",
        brand: {
          "@type": "Brand",
          name: "BRC STAR",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "1650000",
          availability: "https://schema.org/PreOrder",
          url: "https://www.brcstar.in/pre-book?model=starcraft-gt",
        },
      },
      {
        "@type": "Product",
        "@id": "https://www.brcstar.in/vehicles/starfleet-commercial#product",
        name: "BRC STAR StarFleet Commercial Carrier",
        description: "Enterprise commercial logistics electric carrier with auxiliary kinetic harvesting.",
        brand: {
          "@type": "Brand",
          name: "BRC STAR",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "2450000",
          availability: "https://schema.org/PreOrder",
          url: "https://www.brcstar.in/pre-book?model=starfleet-commercial",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.brcstar.in/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.brcstar.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Technology",
            item: "https://www.brcstar.in/technology",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Vehicles",
            item: "https://www.brcstar.in/vehicles",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Pre-Book",
            item: "https://www.brcstar.in/pre-book",
          },
        ],
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
        <MobileAppBridge />
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <ChatbotWrapper />
      </body>
    </html>
  );
}
