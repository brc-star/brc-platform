import React from "react";
import Link from "next/link";
import { FileCheck, ChevronRight, Mail, Phone, MapPin, Scale, FileText } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions",
  description: "Official Terms and Conditions, vehicle pre-booking token terms, and 100% refund policies for BRC STAR (OPC) PRIVATE LIMITED.",
  alternates: {
    canonical: "https://www.brcstar.in/terms",
  },
  openGraph: {
    title: "Terms & Conditions | BRC STAR",
    description: "Terms and Conditions, vehicle pre-booking token terms, and refund policy.",
    url: "https://www.brcstar.in/terms",
  },
};

export default function TermsConditionsPage() {
  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Breadcrumb & Header */}
      <div className="space-y-4 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Terms &amp; Conditions</span>
        </div>

        <div className="eyebrow">
          <span className="h-px w-7 bg-cyan-400"></span>
          <span>Legal</span>
          <span className="h-px w-7 bg-cyan-400"></span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-semibold leading-[1.05] tracking-[-0.035em] text-gradient">
          Terms and Conditions
        </h1>
        <p className="body-copy text-sm font-mono text-slate-400">
          Last updated: August 06, 2026
        </p>
      </div>

      {/* Main Legal Content Container */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-8 text-sm text-slate-300 leading-relaxed font-sans">
        <p>
          Please read these terms and conditions carefully before using Our Service.
        </p>

        <hr className="border-slate-800" />

        {/* Interpretation and Definitions */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-mono">
            Interpretation and Definitions
          </h2>

          <h3 className="text-lg font-semibold text-cyan-300 font-mono">
            Interpretation
          </h3>
          <p>
            The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>

          <h3 className="text-lg font-semibold text-cyan-300 font-mono">
            Definitions
          </h3>
          <p>For the purposes of these Terms and Conditions:</p>

          <ul className="space-y-2.5 list-disc pl-5 text-slate-300">
            <li>
              <strong className="text-white">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
            </li>
            <li>
              <strong className="text-white">Country/State</strong> refers to: Rajasthan, India.
            </li>
            <li>
              <strong className="text-white">Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in these Terms and Conditions) refers to <strong>BRC STAR (OPC) PRIVATE LIMITED</strong>, 7SJM-A, Anupgarh 335701, Rajasthan, India.
            </li>
            <li>
              <strong className="text-white">Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.
            </li>
            <li>
              <strong className="text-white">Service</strong> refers to the Website.
            </li>
            <li>
              <strong className="text-white">Terms and Conditions</strong> (also referred to as &quot;Terms&quot;) means these Terms and Conditions, including any documents expressly incorporated by reference, which govern Your access to and use of the Service and form the entire agreement between You and the Company regarding the Service.
            </li>
            <li>
              <strong className="text-white">Third-Party Social Media Service</strong> means any services or content provided by a third party that is displayed, included, made available, or linked to through the Service.
            </li>
            <li>
              <strong className="text-white">Website</strong> refers to BRC STAR, accessible from <a href="https://www.brcstar.in/" className="text-cyan-400 underline">https://www.brcstar.in/</a>.
            </li>
            <li>
              <strong className="text-white">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
            </li>
          </ul>
        </div>

        <hr className="border-slate-800" />

        {/* Acknowledgment */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-mono">
            Acknowledgment
          </h2>
          <p>
            These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
          </p>
          <p>
            Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
          </p>
          <p>
            By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
          </p>
          <p>
            You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
          </p>
          <p>
            Your access to and use of the Service is also subject to Our <Link href="/privacy" className="text-cyan-400 underline">Privacy Policy</Link>, which describes how We collect, use, and disclose personal information. Please read Our Privacy Policy carefully before using Our Service.
          </p>
        </div>

        <hr className="border-slate-800" />

        {/* Links to Other Websites */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-mono">
            Links to Other Websites
          </h2>
          <p>
            Our Service may contain links to third-party websites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services.
          </p>
          <p>
            We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.
          </p>

          <h3 className="text-lg font-semibold text-cyan-300 font-mono pt-2">
            Links from a Third-Party Social Media Service
          </h3>
          <p>
            The Service may display, include, make available, or link to content or services provided by a Third-Party Social Media Service, which is not owned or controlled by the Company. The Company does not endorse or assume responsibility for any Third-Party Social Media Service, and Your use of it is governed by that service&apos;s own terms and privacy policies.
          </p>
        </div>

        <hr className="border-slate-800" />

        {/* Termination & Liability */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-mono">
            Termination
          </h2>
          <p>
            We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately.
          </p>

          <h2 className="text-2xl font-bold text-white font-mono pt-2">
            Limitation of Liability
          </h2>
          <p>
            Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven&apos;t purchased anything through the Service.
          </p>
          <p>
            To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in any way related to the use of or inability to use the Service, even if advised of the possibility of such damages.
          </p>
        </div>

        <hr className="border-slate-800" />

        {/* "AS IS" and "AS AVAILABLE" Disclaimer */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-mono">
            &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer
          </h2>
          <p>
            The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company expressly disclaims all warranties, whether express, implied, statutory or otherwise, including implied warranties of merchantability, fitness for a particular purpose, title and non-infringement.
          </p>
          <p>
            Without limitation to the foregoing, the Company provides no warranty that the Service will meet Your requirements, achieve any intended results, operate without interruption, or be error free, and makes no representation as to the accuracy, reliability, or currency of any information or content, or that the Service is free of viruses or other harmful components.
          </p>
        </div>

        <hr className="border-slate-800" />

        {/* Governing Law & Dispute Resolution */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-mono">
            Governing Law
          </h2>
          <p>
            The laws of the Country/State (Rajasthan, India), excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
          </p>

          <h2 className="text-2xl font-bold text-white font-mono pt-2">
            Disputes Resolution
          </h2>
          <p>
            If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
          </p>

          <h2 className="text-2xl font-bold text-white font-mono pt-2">
            For European Union (EU) Users &amp; United States Legal Compliance
          </h2>
          <p>
            If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident. You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or designated as a terrorist supporting country, and (ii) You are not listed on any US government list of prohibited parties.
          </p>

          <h2 className="text-2xl font-bold text-white font-mono pt-2">
            Severability and Waiver
          </h2>
          <p>
            If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
          </p>

          <h2 className="text-2xl font-bold text-white font-mono pt-2">
            Vehicle Pre-Booking, Priority Token, &amp; 100% Refund Policy
          </h2>
          <p>
            When you submit a vehicle pre-booking reservation through https://www.brcstar.in/pre-book, the following terms govern the relationship between you and BRC STAR (OPC) PRIVATE LIMITED:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-xs font-mono text-slate-300">
            <li>
              <strong>₹25,000 Fully Refundable Reservation Token</strong>: The initial reservation deposit of ₹25,000 is not a purchase agreement, but a priority queue reservation. The deposit is held in dedicated escrow/booking accounts.
            </li>
            <li>
              <strong>100% Unconditional Refund Policy</strong>: You may cancel your reservation at any time for any reason prior to signing the formal final allocation agreement and vehicle VIN assignment. Upon receiving your cancellation request, the full ₹25,000 token will be refunded to your original payment method within 7–10 banking business days without deduction or cancellation penalty.
            </li>
            <li>
              <strong>Indicative Pricing &amp; Homologation Disclaimer</strong>: All vehicle specifications, pricing baselines (including StarCraft GT base ₹16,50,000), battery ranges, and acceleration figures displayed on this website are indicative engineering projections. Final vehicle specifications and ex-showroom prices remain subject to formal ARAI/ICAT statutory homologation testing and applicable state/central EV subsidies.
            </li>
            <li>
              <strong>Production &amp; Allocation Timeline</strong>: Priority queue allocations are targeted for phased manufacturing rollouts across 2026–2027. Delivery queues are organized strictly by timestamp of confirmed reservation registration.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white font-mono pt-2">
            Changes to These Terms and Conditions
          </h2>
          <p>
            We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days&apos; notice prior to any new terms taking effect.
          </p>
        </div>

        <hr className="border-slate-800" />

        {/* Contact Us */}
        <div className="space-y-4 p-6 rounded-2xl bg-slate-950 border border-slate-800">
          <h2 className="text-xl font-bold text-white font-mono">
            Contact Us
          </h2>
          <p>
            If you have any questions about these Terms and Conditions, You can contact us:
          </p>
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>By visiting our: <Link href="/contact" className="text-cyan-400 underline">Contact page</Link></span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>By email: <a href="mailto:contact@brcstar.in" className="text-cyan-400 underline">contact@brcstar.in</a></span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>By phone: <a href="tel:+919924100759" className="text-cyan-400 underline">+91 99241 00759</a></span>
            </div>
            <div className="flex items-start gap-2 pt-1">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Registered Office: BRC STAR (OPC) PRIVATE LIMITED, 7SJM-A, Anupgarh, Ganganagar, Rajasthan 335701 (CIN: U34100RJ2019OPC066948 • GSTIN: 08AAICB7401R1Z7)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
