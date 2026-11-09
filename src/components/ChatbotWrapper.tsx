"use client";

import dynamic from "next/dynamic";

const ViraChatbot = dynamic(
  () => import("@/components/ViraChatbot").then((mod) => mod.ViraChatbot),
  { ssr: false }
);

export default function ChatbotWrapper() {
  return <ViraChatbot />;
}
