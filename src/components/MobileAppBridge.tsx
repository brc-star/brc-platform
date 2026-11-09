"use client";

import React from "react";
import { useMobileApp } from "@/hooks/useMobileApp";
import { OfflineFallback } from "./OfflineFallback";

export const MobileAppBridge = () => {
  const { isOnline, showExitToast } = useMobileApp();

  return (
    <>
      <OfflineFallback isOnline={isOnline} />

      {/* Double-back exit toast on Android root page */}
      {showExitToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[90] px-4 py-2 rounded-full bg-slate-900/95 text-white border border-cyan-500/40 text-xs font-mono shadow-2xl backdrop-blur-xl animate-in fade-in duration-200 pointer-events-none"
        >
          Press back again to exit BRC STAR
        </div>
      )}
    </>
  );
};

export default MobileAppBridge;
