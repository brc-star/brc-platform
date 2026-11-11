"use client";

import React from "react";
import { usePreBookDrawer, PreBookDrawerOptions } from "@/components/PreBookContext";

interface PreBookTriggerButtonProps extends PreBookDrawerOptions {
  className?: string;
  title?: string;
  children: React.ReactNode;
}

export function PreBookTriggerButton({
  modelSlug,
  trim,
  color,
  wheels,
  className,
  title,
  children,
}: PreBookTriggerButtonProps) {
  const { openDrawer } = usePreBookDrawer();

  return (
    <button
      type="button"
      title={title}
      onClick={() => openDrawer({ modelSlug, trim, color, wheels })}
      className={className}
    >
      {children}
    </button>
  );
}

export default PreBookTriggerButton;
