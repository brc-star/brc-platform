import React from "react";
import Link from "next/link";
import { Shield, ChevronRight, Mail, Phone, MapPin, Lock, FileText } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for BRC STAR (OPC) PRIVATE LIMITED. Indian DPDPA 2023 compliance, pre-booking data protection, and telematics handling.",
  alternates: {
    canonical: "https://www.brcstar.in/privacy",
  },
  openGraph: {
    title: "Privacy Policy | BRC STAR",
    description: "Privacy Policy and Indian DPDPA 2023 compliance for BRC STAR.",
    url: "https://www.brcstar.in/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Breadcrumb & Header */}
      <div className="space-y-4 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Privacy Policy</span>
        </div>

        <div className="eyebrow">
          <span className="h-px w-7 bg-cyan-400"></span>
          <span>Legal</span>
          <span className="h-px w-7 bg-cyan-400"></span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-semibold leading-[1.05] tracking-[-0.035em] text-gradient">
          Privacy Policy
        </h1>
        <p className="body-copy text-sm font-mono text-slate-400">
          Last updated: August 06, 2026
        </p>
      </div>

      {/* Main Legal Content Container */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-8 text-sm text-slate-300 leading-relaxed font-sans">
        <div className="space-y-4">
          <p>
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          <p>
            We use Your Personal Data to provide and improve the Service. We collect, use, and disclose Your information as described in this Privacy Policy and, where required by applicable law, only where We have a valid legal basis to do so, including Your consent (where consent is required).
          </p>
        </div>

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
          <p>For the purposes of this Privacy Policy:</p>

          <ul className="space-y-2.5 list-disc pl-5 text-slate-300">
            <li>
              <strong className="text-white">Account</strong> means a unique account created for You to access Our Service or parts of Our Service.
            </li>
            <li>
              <strong className="text-white">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
            </li>
            <li>
              <strong className="text-white">Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Privacy Policy) refers to <strong>BRC STAR (OPC) PRIVATE LIMITED</strong>, 7SJM-A, Anupgarh 335701, Rajasthan, India.
            </li>
            <li>
              <strong className="text-white">Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website, among its many uses.
            </li>
            <li>
              <strong className="text-white">Country/State</strong> refers to: Rajasthan, India.
            </li>
            <li>
              <strong className="text-white">Device</strong> means any device that can access the Service, such as a computer, a cell phone or a digital tablet.
            </li>
            <li>
              <strong className="text-white">Personal Data</strong> (or &quot;Personal Information&quot;) is any information that relates to an identified or identifiable individual. We use &quot;Personal Data&quot; and &quot;Personal Information&quot; interchangeably unless a law uses a specific term.
            </li>
            <li>
              <strong className="text-white">Service</strong> refers to the Website.
            </li>
            <li>
              <strong className="text-white">Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
            </li>
            <li>
              <strong className="text-white">Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
            </li>
            <li>
              <strong className="text-white">User</strong> means any individual who accesses or uses the Service.
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

        {/* Collecting and Using Your Personal Information */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-mono">
            Collecting and Using Your Personal Information
          </h2>

          <h3 className="text-lg font-semibold text-cyan-300 font-mono">
            Types of Data Collected
          </h3>

          <h4 className="text-base font-semibold text-white">
            Personal Data
          </h4>
          <p>
            While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
          </p>
          <ul className="space-y-1.5 list-disc pl-5 text-slate-300">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, State, Province, ZIP/Postal code, City</li>
          </ul>

          <h4 className="text-base font-semibold text-white pt-2">
            Usage Data
          </h4>
          <p>Usage Data is collected automatically when using the Service.</p>
          <p>
            Usage Data may include information such as Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of Our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
          </p>
          <p>
            When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device&apos;s unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
          </p>
          <p>
            We may also collect information that Your browser sends whenever You visit Our Service or when You access the Service by or through a mobile device.
          </p>

          <h4 className="text-base font-semibold text-white pt-2">
            Tracking Technologies and Cookies
          </h4>
          <p>
            We use tracking technologies (such as cookies) to track the activity and to improve Our Service. The technologies We use may include:
          </p>
          <ul className="space-y-2.5 list-disc pl-5 text-slate-300">
            <li>
              <strong className="text-white">Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of Our Service.
            </li>
            <li>
              <strong className="text-white">Web Beacons.</strong> Certain sections of Our Service may contain small electronic files known as web beacons that permit the Company to count users who have visited those pages and for other related website statistics.
            </li>
          </ul>
          <p>
            Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
          </p>
          <p>
            Where required by law, We use non-essential cookies only with Your consent. You can withdraw or change Your consent at any time using Our cookie preferences tool or through Your browser/device settings.
          </p>
          <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
          <ul className="space-y-2.5 list-disc pl-5 text-slate-300">
            <li>
              <strong className="text-white">Necessary / Essential Cookies</strong> — Type: Session Cookies. Administered by: Us. Purpose: essential to provide You with services available through the Website and to enable You to use some of its features, including authenticating users and preventing fraudulent use of user accounts.
            </li>
            <li>
              <strong className="text-white">Cookies Policy / Notice Acceptance Cookies</strong> — Type: Persistent Cookies. Administered by: Us. Purpose: identify whether users have accepted the use of cookies on the Website and record the consent choices You have made.
            </li>
            <li>
              <strong className="text-white">Functionality Cookies</strong> — Type: Persistent Cookies. Administered by: Us. Purpose: remember choices You make when You use the Website, such as login details or language preference, for a more personal experience.
            </li>
          </ul>
        </div>

        <hr className="border-slate-800" />

        {/* Use of Personal Data */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-mono">
            Use of Your Personal Data
          </h2>
          <p>The Company may use Personal Data for the following purposes:</p>
          <ul className="space-y-2 list-disc pl-5 text-slate-300">
            <li><strong>To provide and maintain Our Service</strong>, including to monitor the usage of Our Service.</li>
            <li><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service.</li>
            <li><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
            <li><strong>To contact You:</strong> by email, telephone calls, SMS, or other equivalent forms of electronic communication regarding updates or informative communications related to the functionalities, products or contracted services, including security updates, when necessary or reasonable.</li>
            <li><strong>To provide You</strong> with news, special offers, and general information about other goods, services and events which We offer that are similar to those You have already purchased or inquired about, only where permitted by applicable law. You may opt out at any time via the unsubscribe link in any marketing email or by contacting Us.</li>
            <li><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</li>
            <li><strong>For business transfers:</strong> We may use Your Personal Data to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets.</li>
            <li><strong>For other purposes:</strong> such as data analysis, identifying usage trends, determining the effectiveness of Our promotional campaigns, and evaluating and improving Our Service, products, services, marketing and Your experience.</li>
          </ul>
          <p>
            We may share Your Personal Data in the following situations: with Service Providers to monitor and analyze the use of Our Service; for business transfers in connection with a merger, sale of assets, financing, or acquisition; with Affiliates, who will be required to honor this Privacy Policy; with other users if Our Service offers public areas; and with Your consent for any other purpose.
          </p>
        </div>

        <hr className="border-slate-800" />

        {/* Text Messages Privacy Notice */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-mono">
            Text Messages Privacy Notice
          </h2>
          <p>
            You have the option to receive text (SMS) messages from Us. If You opt in, We will collect and store information such as Your phone number, the date and method of Your consent, and message delivery and read information. No mobile information will be shared with or sold to third parties or affiliates for marketing or promotional purposes.
          </p>
          <p>
            Consent to receive text messages is not a condition of any purchase or use of Our Service. If You consent, You agree to receive messages related to customer care and support, account notifications, delivery updates, authentication messages (OTPs and passcodes), security alerts, and marketing offers.
          </p>
          <p>
            Reply STOP to opt-out. Reply HELP for support. Message &amp; data rates may apply. Messaging frequency may vary. Carriers are not liable for delayed or undelivered messages.
          </p>
        </div>

        <hr className="border-slate-800" />

        {/* Retention & Transfer */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-mono">
            Retention of Your Personal Data
          </h2>
          <p>
            The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy, to comply with Our legal obligations, resolve disputes, and enforce Our legal agreements and policies.
          </p>
          <ul className="space-y-2 list-disc pl-5 text-slate-300">
            <li><strong>Account Information:</strong> retained for the duration of Your Account relationship plus up to 24 months after account closure.</li>
            <li><strong>Customer Support Data:</strong> support tickets and correspondence up to 24 months from ticket closure; chat transcripts up to 24 months for quality assurance and training.</li>
            <li><strong>Usage Data:</strong> website analytics data and server logs up to 24 months from the date of collection.</li>
          </ul>

          <h3 className="text-lg font-semibold text-cyan-300 font-mono pt-2">
            Transfer of Your Personal Data
          </h3>
          <p>
            Your information, including Personal Data, is processed at the Company&apos;s operating offices and in any other places where the parties involved in the processing are located. Where required by applicable law, We will ensure appropriate safeguards are in place for any international transfer of Your Personal Data.
          </p>

          <h3 className="text-lg font-semibold text-cyan-300 font-mono pt-2">
            Delete Your Personal Data
          </h3>
          <p>
            You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. You may update, amend, or delete Your information at any time by signing in to Your Account or by contacting Us.
          </p>

          <h3 className="text-lg font-semibold text-cyan-300 font-mono pt-2">
            Disclosure of Your Personal Data
          </h3>
          <p>
            <strong>Business Transactions:</strong> If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred with notice provided.
          </p>
          <p>
            <strong>Law Enforcement:</strong> The Company may disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities.
          </p>
          <p>
            <strong>Security:</strong> The security of Your Personal Data is important to Us, but no method of transmission over the Internet, or method of electronic storage, is 100% secure. While We strive to use commercially reasonable means to protect Your Personal Data, We cannot guarantee its absolute security.
          </p>
        </div>

        <hr className="border-slate-800" />

        {/* Children's Privacy & Links */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-mono">
            Children&apos;s and Minors&apos; Privacy
          </h2>
          <p>
            The Service is not directed to, and We do not knowingly collect Personal Information from, anyone under the age of 16. If You are a parent or guardian and believe Your child has provided Us with Personal Information, please contact Us so We can remove it.
          </p>

          <h2 className="text-2xl font-bold text-white font-mono pt-2">
            Links to Other Websites
          </h2>
          <p>
            Our Service may contain links to other websites that are not operated by Us. We strongly advise You to review the Privacy Policy of every site You visit. We have no control over and assume no responsibility for third-party content or practices.
          </p>

          <h2 className="text-2xl font-bold text-white font-mono pt-2">
            Indian Digital Personal Data Protection Act (DPDPA 2023) &amp; Pre-Booking Telemetry
          </h2>
          <p>
            In accordance with India&apos;s Digital Personal Data Protection Act (DPDPA), 2023, BRC STAR (OPC) PRIVATE LIMITED operates as a Data Fiduciary regarding the personal information you supply during vehicle pre-booking, priority waitlist registration, and investor NDA access:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-xs font-mono text-slate-300">
            <li>
              <strong>Purpose Limitation</strong>: Pre-booking data (full name, email, phone number, territory, and payment identifiers) is strictly collected to maintain your production priority reservation, deliver vehicle availability updates, and process refunds.
            </li>
            <li>
              <strong>Financial Security</strong>: Payment transactions are processed via PCI-DSS compliant banking partners (such as Razorpay/authorized escrow aggregators). BRC STAR does not store full credit/debit card numbers or UPI MPINs on company servers.
            </li>
            <li>
              <strong>Vehicle Telemetry &amp; CAN-Bus Stream</strong>: Any diagnostic or prototype simulator telemetry streamed through https://www.brcstar.in/app is anonymized and aggregated for powertrain algorithm calibration.
            </li>
            <li>
              <strong>Data Principal Rights</strong>: You possess the statutory right to request a summary of your personal data, rectify inaccuracies, or exercise erasure of your pre-booking contact record by writing to our designated Grievance Officer at <a href="mailto:contact@brcstar.in" className="text-cyan-400 underline">contact@brcstar.in</a>.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white font-mono pt-2">
            Changes to this Privacy Policy
          </h2>
          <p>
            We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date above.
          </p>
        </div>

        <hr className="border-slate-800" />

        {/* Contact Us */}
        <div className="space-y-4 p-6 rounded-2xl bg-slate-950 border border-slate-800">
          <h2 className="text-xl font-bold text-white font-mono">
            Contact Us
          </h2>
          <p>
            If You have any questions about this Privacy Policy, You can contact Us:
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
              <span>Registered Office: BRC STAR (OPC) PRIVATE LIMITED, 7SJM-A, Anupgarh, Ganganagar, Rajasthan 335701 (CIN: U34100RJ2019OPC066948)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
