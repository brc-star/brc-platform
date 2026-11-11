"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export const RAZORPAY_PREBOOK_PAYMENT_LINK = "https://rzp.io/rzp/MDNuR0jL";
export const PREBOOK_TOKEN_AMOUNT_INR = 25000;

export interface PreBookDrawerOptions {
  modelSlug?: string;
  trim?: string;
  color?: string;
  wheels?: string;
}

interface PreBookContextValue {
  isOpen: boolean;
  options: PreBookDrawerOptions;
  openDrawer: (opts?: PreBookDrawerOptions) => void;
  closeDrawer: () => void;
}

const PreBookContext = createContext<PreBookContextValue | undefined>(undefined);

export function PreBookProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<PreBookDrawerOptions>({
    modelSlug: "starcraft-gt",
    trim: "standard",
    color: "cosmic-obsidian",
    wheels: "aero-19",
  });

  const openDrawer = useCallback((opts?: PreBookDrawerOptions) => {
    if (opts) {
      setOptions((prev) => ({ ...prev, ...opts }));
    }
    setIsOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <PreBookContext.Provider value={{ isOpen, options, openDrawer, closeDrawer }}>
      {children}
    </PreBookContext.Provider>
  );
}

export function usePreBookDrawer() {
  const ctx = useContext(PreBookContext);
  if (!ctx) {
    throw new Error("usePreBookDrawer must be used within a PreBookProvider");
  }
  return ctx;
}
