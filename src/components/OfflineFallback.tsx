"use client";

import React, { useState } from "react";
import { WifiOff, RefreshCw, AlertTriangle } from "lucide-react";
import { Network } from "@capacitor/network";

interface OfflineFallbackProps {
  isOnline: boolean;
}

export const OfflineFallback: React.FC<OfflineFallbackProps> = ({ isOnline }) => {
  const [checking, setChecking] = useState(false);

  if (isOnline) return null;

  const handleRetry = async () => {
    setChecking(true);
    try {
      const status = await Network.getStatus();
      if (status.connected) {
        window.location.reload();
      }
    } catch {
      if (navigator.onLine) {
        window.location.reload();
      }
    } finally {
      setTimeout(() => setChecking(false), 800);
    }
  };

  return (
    <aside
      aria-label="Network status alert"
      className="fixed top-0 left-0 right-0 z-[100] bg-amber-500 text-slate-950 px-4 py-2 text-xs font-mono shadow-lg flex items-center justify-between border-b border-amber-600 transition-all animate-in slide-in-from-top duration-300 pt-[env(safe-area-inset-top,0px)]"
    >
      <div className="flex items-center gap-2 max-w-xl mx-auto w-full justify-between">
        <div className="flex items-center gap-2 truncate">
          <WifiOff className="w-4 h-4 shrink-0 text-slate-950 animate-pulse" />
          <span className="font-bold truncate">
            No Network Connection • Offline Mode Active
          </span>
        </div>
        <button
          onClick={handleRetry}
          disabled={checking}
          className="px-2.5 py-1 rounded bg-slate-950 text-amber-400 hover:bg-slate-900 transition-colors shrink-0 flex items-center gap-1 font-bold text-[11px] disabled:opacity-50"
        >
          <RefreshCw className={`w-3 h-3 ${checking ? "animate-spin" : ""}`} />
          <span>{checking ? "Checking..." : "Retry"}</span>
        </button>
      </div>
    </aside>
  );
};

export default OfflineFallback;
