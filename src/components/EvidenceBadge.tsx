import React from "react";
import { EvidenceStatus } from "@/lib/claims";
import { CheckCircle2, Cpu, FlaskConical, Target, Clock, Info } from "lucide-react";

interface EvidenceBadgeProps {
  status: EvidenceStatus;
  size?: "xs" | "sm";
  className?: string;
}

const BADGE_CONFIG: Record<
  EvidenceStatus,
  {
    label: string;
    classes: string;
    title: string;
    Icon: React.ComponentType<{ className?: string }>;
  }
> = {
  verified: {
    label: "Verified",
    classes:
      "bg-emerald-100/90 text-emerald-900 border-emerald-300 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-500/40",
    title: "Verified corporate or official registry filing record",
    Icon: CheckCircle2,
  },
  bench: {
    label: "Bench-tested",
    classes:
      "bg-cyan-100/90 text-cyan-900 border-cyan-300 dark:bg-cyan-950/70 dark:text-cyan-300 dark:border-cyan-500/40",
    title: "Stage 1 laboratory bench rig test reading (not road-tested)",
    Icon: FlaskConical,
  },
  simulated: {
    label: "Simulated",
    classes:
      "bg-amber-100/90 text-amber-900 border-amber-300 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-500/40",
    title: "Numerical, CAD/CFD, or spreadsheet model simulation",
    Icon: Cpu,
  },
  illustrative: {
    label: "Illustrative",
    classes:
      "bg-indigo-100/90 text-indigo-900 border-indigo-300 dark:bg-indigo-950/70 dark:text-indigo-300 dark:border-indigo-500/40",
    title: "Illustrative management assumption scenario; not an audited figure",
    Icon: Info,
  },
  target: {
    label: "Target",
    classes:
      "bg-blue-100/90 text-blue-900 border-blue-300 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-500/40",
    title: "Engineering design goal subject to validation",
    Icon: Target,
  },
  planned: {
    label: "Planned",
    classes:
      "bg-slate-200/90 text-slate-800 border-slate-300 dark:bg-slate-800/80 dark:text-slate-300 dark:border-slate-700",
    title: "Planned regulatory or commercial milestone; not yet started",
    Icon: Clock,
  },
};

export function EvidenceBadge({
  status,
  size = "xs",
  className = "",
}: EvidenceBadgeProps) {
  const cfg = BADGE_CONFIG[status];
  const Icon = cfg.Icon;

  const sizeClasses =
    size === "sm"
      ? "px-2.5 py-0.5 text-[11px] gap-1.5"
      : "px-2 py-0.5 text-[10px] gap-1";

  return (
    <span
      title={cfg.title}
      className={`inline-flex items-center font-mono font-bold uppercase tracking-wider rounded-full border shrink-0 whitespace-nowrap ${sizeClasses} ${cfg.classes} ${className}`}
    >
      <Icon className={size === "sm" ? "w-3 h-3" : "w-2.5 h-2.5"} />
      <span>{cfg.label}</span>
    </span>
  );
}

export default EvidenceBadge;
