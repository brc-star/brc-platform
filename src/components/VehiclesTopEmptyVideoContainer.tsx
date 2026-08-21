"use client";

import React, { useEffect, useRef } from "react";

export const VehiclesTopEmptyVideoContainer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Top vehicles video autoplay deferred:", err);
        });
      }
    }
  }, []);

  return (
    <div className="w-full relative rounded-2xl overflow-hidden min-h-[360px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[560px] flex items-center justify-center border border-cyan-500/30 bg-slate-950 shadow-2xl group">
      {/* Section 03 Top Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/BRC_homepage.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        >
          <source src="/BRC_homepage.mp4" type="video/mp4" />
        </video>

        {/* Ambient Subtle Edge Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/30 pointer-events-none" />
      </div>
    </div>
  );
};
