"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  Zap,
  ChevronDown,
  RotateCcw,
  ExternalLink,
  Shield,
  Phone,
  Car,
  TrendingUp,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  Minimize2,
  FileText,
  BadgeCheck,
  Check,
  Copy,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { queryPatentKnowledge, PATENT_CLAIMS_DATABASE } from "@/lib/patent-knowledge";

interface Message {
  id: string;
  sender: "vira" | "user";
  text: string;
  timestamp: string;
  links?: { label: string; url: string }[];
  auditHash?: string;
  citedClaims?: number[];
}

const PRESET_PROMPTS_GENERAL = [
  { label: "⚡ How does Self Volt™ work?", query: "How does the Self Volt kinetic energy recovery architecture work?" },
  { label: "🚗 StarCraft GT Specs & Price", query: "Tell me about the vehicle lineup: StarCraft GT base price and range." },
  { label: "📈 Dealership Franchise Terms", query: "How can I apply for an exclusive BRC STAR franchise dealership?" },
  { label: "💰 5-Year TCO Fuel Savings", query: "How much operating expense and fuel cost can I save with Self Volt EV?" },
];

const PRESET_PROMPTS_INVESTOR = [
  { label: "📜 Indian Patent 202511050655 Claims", query: "Break down the core independent and dependent claims of Indian Patent Application No. 202511050655." },
  { label: "🔬 Novelty vs Tesla & Toyota", query: "What specific novel topology distinguishes Claim 1 from Tesla and Toyota prior art?" },
  { label: "⚡ ACM +42 kW Inverter Boost", query: "How does the Alternator Control Module (ACM) achieve 98.4% efficiency across variable RPM?" },
  { label: "🛡️ AIS-156 & Immersion Safety", query: "How does the dual-pack dielectric immersion design satisfy AIS-156 and AIS-038 standards?" },
];

export const ViraChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [botMode, setBotMode] = useState<"general" | "investor">("investor");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "vira",
      text: "Namaste & Welcome to BRC STAR! ⚡\n\nI am **BRC ViraBot**, equipped with the **Indian Patent Application No. 202511050655 Due-Diligence Engine**. You can ask about our proprietary dual-pack kinetic topology, vehicle specs, dealership expansion, or legal patent claims.",
      timestamp: "Just now",
      links: [
        { label: "View Patent & IP Registry", url: "/technology/patent-ip" },
        { label: "Configure StarCraft GT", url: "/vehicles" },
        { label: "Request Investor NDA", url: "/invest/pitch-deck" },
      ],
      auditHash: "BRC-IP-VERIFIED",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen, isMinimized]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
      setHasUnread(false);
    }
  }, [isOpen, isMinimized]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsTyping(true);

    try {
      // Query the live Server-Side RAG Endpoint
      const response = await fetch("/api/v1/ai/patent-rag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: text, mode: botMode }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.answer) {
          const viraMsg: Message = {
            id: `vira-${Date.now()}`,
            sender: "vira",
            text: data.answer,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            links: data.relatedLinks,
            auditHash: data.auditHash,
            citedClaims: data.patentClaimsCited,
          };
          setMessages((prev) => [...prev, viraMsg]);
          setIsTyping(false);
          return;
        }
      }
    } catch {
      // Fallback to client-side RAG knowledge base if server fetch encounters offline state
    }

    // Client-side fallback
    const fallbackData = queryPatentKnowledge(text, botMode);
    const viraMsg: Message = {
      id: `vira-${Date.now()}`,
      sender: "vira",
      text: fallbackData.answer,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      links: fallbackData.links,
      auditHash: "BRC-IP-OFFLINE-OK",
      citedClaims: fallbackData.citedClaims,
    };
    setMessages((prev) => [...prev, viraMsg]);
    setIsTyping(false);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: "vira",
        text: "Due-Diligence Session reset. How can I assist you with BRC STAR Self Volt™ EV technology and Patent 202511050655 today?",
        timestamp: "Just now",
        links: [
          { label: "View Patent & IP Registry", url: "/technology/patent-ip" },
          { label: "Pre-Book Custom EV", url: "/pre-book" },
        ],
        auditHash: "BRC-IP-VERIFIED",
      },
    ]);
  };

  return (
    <div className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-[calc(1.25rem+env(safe-area-inset-right,0px))] z-50 font-sans">
      {/* Floating Launcher Trigger Button */}
      {!isOpen && (
        <div className="relative group">
          {/* Tooltip speech bubble */}
          {hasUnread && (
            <div className="absolute bottom-full right-0 mb-3 w-56 p-2.5 rounded-xl bg-white/95 border border-slate-300 dark:bg-[#050814]/95 dark:border-cyan-500/40 text-xs shadow-2xl backdrop-blur-xl animate-bounce pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                <span className="font-semibold text-slate-900 dark:text-white font-mono">
                  BRC ViraBot
                </span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-snug">
                Ask about Indian Patent 202511050655, Technical Specs &amp; Due-Diligence.
              </p>
              <div className="absolute top-full right-6 w-0 h-0 border-x-6 border-x-transparent border-t-6 border-t-slate-300 dark:border-t-cyan-500/40" />
            </div>
          )}

          <button
            onClick={() => setIsOpen(true)}
            className="relative flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-slate-950 font-mono font-bold shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-400/60 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/50"
            aria-label="Open BRC ViraBot AI Due-Diligence Chatbot"
          >
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-slate-950 border border-cyan-200/80 shadow-inner">
                <Image
                  src="/brc-virabot-avatar.jpg"
                  alt="BRC ViraBot"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950 animate-pulse z-10" />
            </div>
            <span className="text-xs tracking-wider hidden sm:inline">BRC ViraBot</span>
            <Sparkles className="w-3.5 h-3.5 text-slate-950 animate-pulse" />
          </button>
        </div>
      )}

      {/* Main Chatbot Window */}
      {isOpen && (
        <div
          className={cn(
            "w-[94vw] sm:w-[440px] bg-white/95 border border-slate-200/90 dark:bg-[#050814]/95 dark:border-cyan-500/40 rounded-3xl shadow-2xl shadow-slate-900/20 dark:shadow-black/90 backdrop-blur-2xl flex flex-col overflow-hidden transition-all duration-300",
            isMinimized ? "h-16" : "h-[620px] max-h-[88vh]"
          )}
        >
          {/* Header */}
          <div className="px-4 py-3 bg-slate-50 dark:bg-gradient-to-r dark:from-cyan-950/90 dark:via-[#050814] dark:to-slate-900 border-b border-slate-200 dark:border-cyan-500/30 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-xl overflow-visible shrink-0">
                <div className="w-8 h-8 rounded-xl overflow-hidden bg-slate-950 border border-cyan-400/60 shadow-sm flex items-center justify-center">
                  <Image
                    src="/brc-virabot-avatar.jpg"
                    alt="BRC ViraBot"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border-2 border-slate-950 z-10" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-mono">
                    BRC <span className="text-cyan-600 dark:text-cyan-400">ViraBot</span>
                  </h3>
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 font-semibold">
                    PATENT RAG
                  </span>
                </div>
                <p className="text-[9px] sm:text-[10px] font-mono text-slate-500 dark:text-slate-400">
                  Indian Patent App No. 202511050655
                </p>
              </div>
            </div>

            {/* Mode Switcher & Controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setBotMode(botMode === "investor" ? "general" : "investor")}
                title="Toggle Mode"
                className={cn(
                  "px-2 py-1 rounded-lg text-[9px] font-mono font-semibold transition-all border",
                  botMode === "investor"
                    ? "bg-cyan-100 text-cyan-800 border-cyan-300 dark:bg-cyan-950 dark:text-cyan-300 dark:border-cyan-500/40"
                    : "bg-slate-100 text-slate-600 border-slate-300 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800"
                )}
              >
                {botMode === "investor" ? "VC / IP Mode" : "Buyer Mode"}
              </button>

              <button
                onClick={handleResetChat}
                title="Restart Chat"
                className="p-1 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? "Expand" : "Minimize"}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close"
                className="p-1 rounded-lg text-slate-400 hover:text-red-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Message Feed */}
              <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3.5 scrollbar-thin">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "flex gap-2.5",
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    {msg.sender === "vira" && (
                      <div className="w-6 h-6 rounded-full overflow-hidden bg-slate-950 border border-cyan-400/50 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                        <Image
                          src="/brc-virabot-avatar.jpg"
                          alt="BRC ViraBot"
                          width={24}
                          height={24}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div
                      className={cn(
                        "max-w-[88%] rounded-2xl p-3 sm:p-3.5 text-xs leading-relaxed",
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-tr-none shadow-md shadow-cyan-500/20"
                          : "bg-slate-50 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none space-y-2.5 shadow-sm"
                      )}
                    >
                      {/* Audit Stamp for VIRA AI */}
                      {msg.auditHash && msg.sender === "vira" && (
                        <div className="flex items-center justify-between text-[9px] font-mono text-cyan-700 dark:text-cyan-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-1.5">
                          <span className="flex items-center gap-1 font-bold">
                            <BadgeCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                            {msg.auditHash}
                          </span>
                          {msg.citedClaims && msg.citedClaims.length > 0 && (
                            <span className="px-1.5 py-0.2 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300">
                              Claims: {msg.citedClaims.map((c) => `#${c}`).join(", ")}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Message Content with Markdown Formatting */}
                      <div className="whitespace-pre-line space-y-2">
                        {msg.text.split("\n\n").map((paragraph, i) => (
                          <div key={i} className="last:mb-0">
                            {paragraph.startsWith("### ") ? (
                              <h4 className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
                                {paragraph.replace("### ", "")}
                              </h4>
                            ) : (
                              <p>
                                {paragraph.split("**").map((chunk, j) =>
                                  j % 2 === 1 ? (
                                    <strong
                                      key={j}
                                      className={
                                        msg.sender === "user"
                                          ? "text-white font-bold"
                                          : "text-slate-950 dark:text-white font-bold"
                                      }
                                    >
                                      {chunk}
                                    </strong>
                                  ) : (
                                    chunk
                                  )
                                )}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Interactive Link Action Chips */}
                      {msg.links && msg.links.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-slate-200/80 dark:border-slate-800">
                          {msg.links.map((link) => (
                            <Link
                              key={link.url}
                              href={link.url}
                              onClick={() => setIsOpen(false)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-300/80 dark:bg-cyan-950/80 dark:hover:bg-cyan-900 dark:text-cyan-300 dark:border-cyan-500/40 text-[10px] font-mono transition-colors shadow-sm font-semibold"
                            >
                              <span>{link.label}</span>
                              <ExternalLink className="w-3 h-3" />
                            </Link>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 mt-1 pt-1">
                        {msg.sender === "vira" ? (
                          <button
                            onClick={() => handleCopy(msg.id, msg.text)}
                            className="hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center gap-1"
                          >
                            {copiedId === msg.id ? (
                              <Check className="w-3 h-3 text-emerald-500" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                            <span>{copiedId === msg.id ? "Copied" : "Copy"}</span>
                          </button>
                        ) : (
                          <span />
                        )}
                        <span>{msg.timestamp}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2.5 text-xs text-slate-400">
                    <div className="w-6 h-6 rounded-full overflow-hidden bg-slate-950 border border-cyan-400/50 flex items-center justify-center shrink-0 shadow-sm">
                      <Image
                        src="/brc-virabot-avatar.jpg"
                        alt="BRC ViraBot"
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 px-3.5 py-2.5 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                      <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-300 ml-1.5 font-semibold">
                        Querying Patent Knowledge Base...
                      </span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Preset Due-Diligence Quick Chips */}
              <div className="px-3 py-2 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#030611]/80 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
                {(botMode === "investor" ? PRESET_PROMPTS_INVESTOR : PRESET_PROMPTS_GENERAL).map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => handleSend(preset.query)}
                    className="whitespace-nowrap px-2.5 py-1 rounded-full text-[10px] font-mono bg-white hover:bg-cyan-50 text-slate-700 hover:text-cyan-900 border border-slate-300 dark:bg-slate-900/90 dark:hover:bg-cyan-950 dark:text-slate-300 dark:hover:text-cyan-300 dark:border-slate-800 dark:hover:border-cyan-500/40 transition-colors shrink-0 shadow-sm font-medium"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* Input Bar */}
              <div className="p-3 bg-white dark:bg-[#02040a] border-t border-slate-200 dark:border-slate-800">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder={
                      botMode === "investor"
                        ? "Ask about Claim 1, ACM inverter, AIS-156 safety..."
                        : "Ask BRC ViraBot anything about BRC STAR..."
                    }
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 dark:bg-slate-900/90 dark:border-slate-800 dark:text-white text-xs placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 font-sans"
                  />
                  <button
                    type="submit"
                    disabled={!inputMessage.trim() || isTyping}
                    className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-cyan-500/20"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 mt-1.5 px-1">
                  <span>BRC STAR • CIN: U34100RJ2019OPC066948 • GSTIN: 08AAICB7401R1Z7</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                    Patent 202511050655 RAG Core
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ViraChatbot;
