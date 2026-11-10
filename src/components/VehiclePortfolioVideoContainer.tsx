"use client";

import React, { useEffect, useRef } from "react";

export const VehiclePortfolioVideoContainer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Respect user's motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    video.defaultMuted = true;
    video.muted = true;

    // Lazy load video playback via IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((err) => {
              console.warn("Portfolio video autoplay deferred:", err);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full relative rounded-2xl overflow-hidden min-h-[360px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[560px] flex items-center justify-center border border-cyan-500/30 bg-slate-950 shadow-2xl group">
      {/* Background Vehicle Portfolio Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          poster="/brc-star-hero-fleet.jpg"
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        >
          <source src="/BRC_STAR_30.mp4" type="video/mp4" />
        </video>

        {/* Ambient Subtle Edge Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/30 pointer-events-none" />
      </div>
    </div>
  );
};
