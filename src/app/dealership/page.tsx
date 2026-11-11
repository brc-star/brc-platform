import React from "react";
import type { Metadata } from "next";
import PartnersPage from "@/app/partners/page";

export const metadata: Metadata = {
  title: "Dealership Application | BRC STAR Franchise Portal",
  description:
    "Submit your BRC STAR EV Dealership & Franchise Partner qualification dossier for Tier 1 (₹2.5 Cr), Tier 2 (₹1.25 Cr), or Tier 3 (₹50 Lakh) territories.",
  alternates: {
    canonical: "https://www.brcstar.in/dealership",
  },
};

export default function DealershipPage() {
  return <PartnersPage />;
}
