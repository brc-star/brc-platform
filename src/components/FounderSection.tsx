import React from "react";
import Image from "next/image";
import Link from "next/link";

const founder = {
  name: "Bishna Chauhan",
  role: "Founder & CEO, BRC STAR (OPC) Private Limited",
  photo: "/founder.jpg", // put a professional photo in /public/founder.jpg
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
      className="relative overflow-hidden bg-[#060913] py-20 text-slate-200 sm:py-28"
    >
      {/* soft background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 font-mono">
          06 · The Founder
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-16 items-start">
          {/* Photo + quick links */}
          <div className="mx-auto w-full max-w-xs lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-cyan-500/5">
              <Image
                src={founder.photo}
                alt={`Portrait of ${founder.name}, founder of BRC STAR`}
                fill
                sizes="(min-width: 1024px) 320px, 80vw"
                className="object-cover"
                priority={false}
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={founder.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                LinkedIn
              </a>
              <a
                href={founder.links.email}
                className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Email Founder
              </a>
            </div>
          </div>

          {/* Text content */}
          <div>
            <h2
              id="founder-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display"
            >
              {founder.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-cyan-300">
              {founder.role}
            </p>

            <p className="mt-6 text-xl font-medium leading-snug text-slate-100 sm:text-2xl">
              {founder.tagline}
            </p>

            <p className="mt-5 leading-relaxed text-slate-400">{founder.story}</p>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-slate-300">
              Why Self Volt
            </h3>
            <p className="mt-2 leading-relaxed text-slate-400">{founder.why}</p>

            {/* Proof points */}
            <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {founder.proof.map((p) => (
                <div
                  key={p.label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <dt className="text-[11px] uppercase tracking-wider text-slate-500 font-mono">
                    {p.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-white">
                    {p.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Roles */}
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {founder.roles.map((r) => (
                <li
                  key={r.title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/40"
                >
                  <h4 className="font-semibold text-white">{r.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                    {r.text}
                  </p>
                </li>
              ))}
            </ul>

            {/* Founder note */}
            <blockquote className="mt-10 border-l-2 border-cyan-400 pl-5 text-lg italic leading-relaxed text-slate-200">
              &ldquo;{founder.quote}&rdquo;
              <footer className="mt-2 text-sm not-italic text-slate-500 font-sans">
                — {founder.name}
              </footer>
            </blockquote>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={founder.links.pitch}
                className="rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-[#060913] transition hover:bg-cyan-300"
              >
                Request Pitch Deck
              </Link>
              <Link
                href={founder.links.about}
                className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Read Full Story &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderSection;
