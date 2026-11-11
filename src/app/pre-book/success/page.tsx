import type { Metadata } from "next";
import { PreBookSuccessClient } from "@/components/PreBookSuccessClient";

export const metadata: Metadata = {
  title: "Pre-Booking Confirmation | ₹25,000 Priority Slot",
  description:
    "Confirmation certificate for your BRC STAR ₹25,000 refundable vehicle priority booking token, covered under Indian DPDPA 2023 data governance.",
  alternates: {
    canonical: "https://www.brcstar.in/pre-book/success",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PreBookSuccessPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#060913] transition-colors">
      <PreBookSuccessClient />
    </div>
  );
}
