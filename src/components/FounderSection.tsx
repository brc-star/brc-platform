import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Mail, Sparkles } from "lucide-react";

const founder = {
  name: "Bishna Ram",
  role: "FOUNDER & CEO, BRC STAR OPC PRIVATE LIMITED",
  location: "from Anupgarh, Rajasthan",
  photo: "/founder.jpg",
  tagline:
    "Building a dual-pack kinetic energy recovery EV architecture from Anupgarh, Rajasthan.",
  story:
    "BRC STAR began in November 2019, inspired by a Mumbai trip and the Bada Business entrepreneurship program. Rooted in Anupgarh, Rajasthan, with a background connecting Surat's textile and diamond industry, I built this company without external funding or a large team.",
  why: "Highway range loss and single-battery thermal stress hold back high-duty electric fleets. Self Volt is our engineering answer: isolate the discharging pack from the recovery pack and route recovered energy intelligently.",
  quote:
    "We are building patiently and transparently: every number we publish is labelled simulated, bench-validated, or target, until the track proves it.",
  proof: [
    { label: "Indian Patent Application", value: "202511050655" },
    { label: "Recognition", value: "DPIIT-recognized" },
    { label: "Incubation", value: "iStart Rajasthan" },
    { label: "Stage", value: "TRL 3/4 bench validation" },
  ],
  roles: [
    {
      title: "EV Innovator",
      text: "Architect of the Self Volt dual-pack kinetic recovery system and its Alternator Control Module concept.",
    },
    {
      title: "Full-Stack Builder",
      text: "Designs and ships the company's digital platforms end to end, keeping execution fast and capital-efficient.",
    },
    {
      title: "Author & Educator",
      text: "Writes practical, Hindi-first ebooks on stock market education and B2B battery technology.",
    },
    {
      title: "Community Builder",
      text: "Grew a 14,000+ LinkedIn following through years of consistent, deliberate brand building.",
    },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/YOUR-HANDLE", // Replace with your LinkedIn profile URL
    email: "mailto:contact@brcstar.in",
    pitch: "/invest/pitch-deck",
    about: "/about",
  },
};

export function FounderSection() {
  return (
    <section
      id="founder"
      aria-labelledby="founder-heading"
      className="relative overflow-hidden bg-slate-50 dark:bg-[#060913] py-10 md:py-14 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300"
    >
      {/* Ambient background glow (responsive in both Day and Night modes) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Main Boxed Surface Card */}
        <div className="relative rounded-3xl bg-white dark:bg-[#0A0E1A]/90 border border-slate-200/90 dark:border-slate-800 shadow-sm dark:shadow-2xl dark:shadow-cyan-500/5 p-5 sm:p-6 md:p-8 transition-colors duration-300">
          {/* Eyebrow badge */}
          <div className="flex items-center gap-1.5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-400 font-mono">
              THE FOUNDER
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start gap-6 md:gap-8">
            {/* Circular Founder Portrait + Quick Actions */}
            <div className="flex flex-col items-center shrink-0 mx-auto md:mx-0 w-full sm:w-auto">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full aspect-square overflow-hidden shrink-0 mx-auto ring-2 ring-slate-200 dark:ring-slate-700 shadow-md bg-slate-100 dark:bg-slate-800">
                <Image
                  src={founder.photo}
                  alt={`Portrait of ${founder.name}, founder of BRC STAR`}
                  fill
                  sizes="(min-width: 768px) 176px, 160px"
                  className="object-cover object-top"
                  priority={false}
                />
              </div>

              {/* Quick links under portrait */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <a
                  href={founder.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Founder LinkedIn Profile"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100/80 hover:bg-slate-200 dark:bg-slate-900/80 dark:hover:bg-slate-800 px-3 py-1.5 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-[#0A66C2]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href={founder.links.email}
                  aria-label="Email the Founder"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100/80 hover:bg-slate-200 dark:bg-slate-900/80 dark:hover:bg-slate-800 px-3 py-1.5 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Core Text & Narrative Content */}
            <div className="space-y-4">
              {/* Header block: Name, Role, Location */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h2
                    id="founder-heading"
                    className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white font-display"
                  >
                    {founder.name}
                  </h2>
                  <span className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-400">
                    {founder.location}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 font-mono">
                  {founder.role}
                </p>
              </div>

              {/* Tagline */}
              <p className="text-base sm:text-lg font-medium leading-snug text-slate-900 dark:text-slate-100">
                {founder.tagline}
              </p>

              {/* Bio Story */}
              <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
                {founder.story}
              </p>

              {/* WHY SELF VOLT Callout Block */}
              <div className="mt-4 p-3.5 sm:p-4 rounded-xl text-xs sm:text-sm bg-blue-50/70 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 border-l-4 border-l-cyan-600 dark:border-l-cyan-400 shadow-sm transition-colors">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white font-mono flex items-center gap-1.5">
                  <span>WHY SELF VOLT</span>
                </h3>
                <p className="mt-1.5 leading-relaxed text-slate-700 dark:text-slate-300">
                  {founder.why}
                </p>
              </div>

              {/* Proof Points Grid */}
              <dl className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 pt-1">
                {founder.proof.map((p) => (
                  <div
                    key={p.label}
                    className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-3 sm:p-3.5 transition-colors"
                  >
                    <dt className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                      {p.label}
                    </dt>
                    <dd className="mt-1 text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-mono">
                      {p.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Roles Grid */}
              <ul className="grid gap-3 sm:grid-cols-2 pt-1">
                {founder.roles.map((r) => (
                  <li
                    key={r.title}
                    className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/50 p-3.5 sm:p-4 hover:border-cyan-500/40 dark:hover:border-cyan-400/40 transition-colors"
                  >
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                      {r.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      {r.text}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Founder Quote */}
              <blockquote className="border-l-2 border-cyan-600 dark:border-cyan-400 pl-4 py-1 text-sm sm:text-base italic leading-relaxed text-slate-800 dark:text-slate-200">
                &ldquo;{founder.quote}&rdquo;
                <footer className="mt-1 text-xs not-italic text-slate-500 dark:text-slate-400 font-sans">
                  — {founder.name}
                </footer>
              </blockquote>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href={founder.links.pitch}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 px-5 py-2.5 text-xs sm:text-sm font-bold font-mono text-slate-950 shadow-md shadow-cyan-500/20 active:scale-[0.98] transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Pitch Deck</span>
                </Link>
                <Link
                  href={founder.links.about}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 px-5 py-2.5 text-xs sm:text-sm font-semibold font-mono text-slate-800 dark:text-slate-200 hover:border-cyan-500/40 dark:hover:border-cyan-400/40 active:scale-[0.98] transition-all"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderSection;
