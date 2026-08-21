"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  sender: "vira" | "user";
  text: string;
  timestamp: string;
  links?: { label: string; url: string }[];
}

const PRESET_PROMPTS = [
  { label: "⚡ How does Self Volt™ work?", query: "How does the Self Volt kinetic energy recovery architecture work?" },
  { label: "🚗 StarCraft GT vs StarPulse SUV", query: "Tell me about the vehicle lineup: StarCraft GT and StarPulse SUV specs." },
  { label: "📈 Dealership Franchise Terms", query: "How can I apply for an exclusive BRC STAR franchise dealership?" },
  { label: "🛡️ Patent & IPO Protection", query: "What patent claims and IP protections does BRC STAR hold?" },
  { label: "💰 5-Year TCO Savings", query: "How much operating expense and fuel cost can I save with Self Volt EV?" },
  { label: "📍 Office & Contact Info", query: "Where is BRC STAR registered and how do I contact the team?" },
];

export const ViraChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "vira",
      text: "Namaste & Welcome to BRC STAR! ⚡\n\nI am **VIRA**, your AI Virtual Intelligent Recovery Assistant. How can I assist your clean electric mobility journey today?",
      timestamp: "Just now",
      links: [
        { label: "Explore Self Volt Tech", url: "/technology/self-volt" },
        { label: "Pre-Book Custom EV", url: "/pre-book" },
      ],
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

  const generateViraResponse = (userQuery: string): { text: string; links?: { label: string; url: string }[] } => {
    const q = userQuery.toLowerCase();

    // 1. Self Volt / Technology / How it works
    if (q.includes("self volt") || q.includes("how") || q.includes("technology") || q.includes("work") || q.includes("battery") || q.includes("recovery") || q.includes("alternator") || q.includes("pmg")) {
      return {
        text: "**BRC STAR Self Volt™** is a breakthrough closed-loop electric architecture developed in India:\n\n• **Dual-Pack A/B Switching**: Battery Pack A drives the high-efficiency PMSM traction motor, while kinetic rotation from the Permanent Magnet Generator (PMG) continuously charges Battery Pack B.\n• **Tri-Alternator Array**: Harnesses rotational momentum across Belt Driven (BDA), Iron Wheel (IWA), and Structural Frame (SFA) channels.\n• **ACM Controller**: Intelligently converts variable rotor RPM into a stabilized 400V DC charge stream with 98.4% peak inverter efficiency.\n• **Real-World Benefit**: 850 km range with drastically reduced dependency on external charging stations.",
        links: [
          { label: "Full Technology Architecture", url: "/technology/self-volt" },
          { label: "Energy Recovery System", url: "/technology/energy-recovery" },
        ],
      };
    }

    // 2. Vehicles / Models / Specs / Lineup
    if (q.includes("vehicle") || q.includes("car") || q.includes("starcraft") || q.includes("starpulse") || q.includes("starfleet") || q.includes("bus") || q.includes("suv") || q.includes("model") || q.includes("speed") || q.includes("range")) {
      return {
        text: "**BRC STAR Vehicle Portfolio**:\n\n1. **StarCraft GT** — Hyper-Sedan (0-100 in 3.2s, 850 km Dual-Pack range, 800V solid-state bus, ₹28.5L base).\n2. **StarPulse SUV** — Luxury All-Terrain EV (820 km range, 7-seater, intelligent air suspension).\n3. **StarFleet Commercial** — High-uptime urban cargo van (3.2-ton payload, 520 km route range, ₹4.8L annual OPEX savings).\n4. **StarTransit 12M Bus** — High-capacity municipal and intercity transit coach (650 km range).",
        links: [
          { label: "Configure StarCraft GT", url: "/vehicles/passenger" },
          { label: "Pre-Book Build Slot", url: "/pre-book" },
        ],
      };
    }

    // 3. Dealer / Franchise / Partnership
    if (q.includes("dealer") || q.includes("franchise") || q.includes("partner") || q.includes("distributor") || q.includes("territory") || q.includes("dealership")) {
      return {
        text: "**BRC STAR Dealer Franchise Network Expansion**:\n\n• **Exclusive Territory Rights**: Tier-1 Flagship, Regional Sales & Service, or Urban Boutique Experience Centers.\n• **Projected First-Year ROI**: 45%–62% with estimated CapEx payback in 14–18 months.\n• **Full Factory Support**: OEM diagnostic tools, HV technician certification, CRM integration, and customer lead allocations.\n• **Apply Online**: Submit your district territory application today.",
        links: [
          { label: "Dealership ROI Simulator & Application", url: "/invest/partners" },
          { label: "Contact Business Development", url: "/contact" },
        ],
      };
    }

    // 4. Patent / IP / IPO Filing
    if (q.includes("patent") || q.includes("ip") || q.includes("legal") || q.includes("defensibility") || q.includes("moat") || q.includes("ipo")) {
      return {
        text: "**Defensible Intellectual Property Moat**:\n\n• **Patent Application No.**: `202511050655` filed with the Indian Patent Office (IPO).\n• **Core Claims**: Closed-loop dual-battery dynamic switching, tri-alternator kinetic coupling, and smart thermochemical BMS equalization.\n• **International Protection**: PCT priority filings for international patent jurisdictions.\n• **Incubation**: DPIIT recognized & incubated under **iStart Rajasthan**.",
        links: [
          { label: "View Patent & IP Registry", url: "/technology/patent-ip" },
        ],
      };
    }

    // 5. TCO / Savings / ROI / Pricing / Price
    if (q.includes("tco") || q.includes("saving") || q.includes("savings") || q.includes("roi") || q.includes("price") || q.includes("cost") || q.includes("rupee") || q.includes("inr")) {
      return {
        text: "**Economic Impact & TCO Advantage**:\n\n• **Operating Expense**: ₹1.12 / km compared to ₹6.95 / km on diesel vehicles (up to **78% cost reduction**).\n• **Annual Net Savings**: ₹1,80,000 – ₹4,80,000 per vehicle depending on commercial/daily duty cycle.\n• **5-Year Cumulative Savings**: ₹9.5 Lakhs – ₹24 Lakhs with zero battery degradation due to dual-pack thermal isolation.\n• **CO₂ Avoided**: ~4.2 Metric Tons per year per vehicle.",
        links: [
          { label: "Launch Interactive ROI Engine", url: "/#calculator" },
          { label: "Pre-Book EV Custom Build", url: "/pre-book" },
        ],
      };
    }

    // 6. Contact / Address / Headquarters / Phone / Email / Office
    if (q.includes("contact") || q.includes("address") || q.includes("phone") || q.includes("mobile") || q.includes("email") || q.includes("headquarter") || q.includes("office") || q.includes("location") || q.includes("cin")) {
      return {
        text: "**BRC STAR Corporate Contact Details**:\n\n• **Registered Entity**: BRC STAR (OPC) PRIVATE LIMITED\n• **CIN**: `U34100RJ2019OPC066948`\n• **Registered Address**: 7SJM-A, Anupgarh, Ganganagar, Rajasthan 335701, India\n• **Email**: contact@brcstar.in\n• **Direct Mobile**: +91 99241 00759\n• **Incubation**: iStart Rajasthan Incubated Startup",
        links: [
          { label: "Executive Contact Desk", url: "/contact" },
          { label: "Privacy Policy", url: "/privacy" },
        ],
      };
    }

    // 7. Invest / Seed Round / Funding
    if (q.includes("invest") || q.includes("investor") || q.includes("funding") || q.includes("seed") || q.includes("pitch") || q.includes("deck") || q.includes("nda")) {
      return {
        text: "**Institutional Investment & Series-A Opportunity**:\n\n• **Market TAM**: Capturing India's $50B+ clean electric mobility transition.\n• **Current Phase**: Seed / Pre-Series A round targeting track validation, tooling deployment & high-volume assembly.\n• **Confidential Data Room**: 38-page Master Pitch Deck, audited financial unit economics, and cap table accessible under digital bilateral NDA.",
        links: [
          { label: "Request Pitch Deck (NDA Gated)", url: "/invest/pitch-deck" },
          { label: "Investor Overview", url: "/invest" },
        ],
      };
    }

    // Default Fallback
    return {
      text: `Thank you for your question regarding **"${userQuery}"**.\n\nBRC STAR is pioneering India's next-generation **Self Volt™ Electric Vehicles** with self-generating dual-pack kinetic energy recovery. How would you like to proceed?`,
      links: [
        { label: "Explore Technology", url: "/technology/self-volt" },
        { label: "Reserve Vehicle", url: "/pre-book" },
        { label: "Contact Executive Team", url: "/contact" },
      ],
    };
  };

  const handleSend = (textToSend?: string) => {
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

    // Simulate AI thinking and typing delay
    setTimeout(() => {
      const response = generateViraResponse(text);
      const viraMsg: Message = {
        id: `vira-${Date.now()}`,
        sender: "vira",
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        links: response.links,
      };
      setMessages((prev) => [...prev, viraMsg]);
      setIsTyping(false);
    }, 850);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: "vira",
        text: "Chat refreshed. How can I assist you with BRC STAR Self Volt™ EV technology today?",
        timestamp: "Just now",
        links: [
          { label: "Explore Self Volt Tech", url: "/technology/self-volt" },
          { label: "Pre-Book Custom EV", url: "/pre-book" },
        ],
      },
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {/* Floating Launcher Trigger Button */}
      {!isOpen && (
        <div className="relative group">
          {/* Tooltip speech bubble */}
          {hasUnread && (
            <div className="absolute bottom-full right-0 mb-3 w-52 p-2.5 rounded-xl bg-[#050814]/95 border border-cyan-500/40 text-xs shadow-2xl backdrop-blur-xl animate-bounce pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="font-semibold text-white font-mono">Ask VIRA AI</span>
              </div>
              <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                Ask about Self Volt™ EV, Specs, TCO savings &amp; Dealerships.
              </p>
              {/* Arrow pointing down */}
              <div className="absolute top-full right-6 w-0 h-0 border-x-6 border-x-transparent border-t-6 border-t-cyan-500/40" />
            </div>
          )}

          <button
            onClick={() => setIsOpen(true)}
            className="relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 text-slate-950 font-mono font-bold shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-400/60 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/40"
            aria-label="Open BRC STAR AI Chatbot"
          >
            <div className="relative w-7 h-7 rounded-full bg-slate-950 text-cyan-400 flex items-center justify-center shadow-inner">
              <Bot className="w-4 h-4 text-cyan-400" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950 animate-pulse" />
            </div>
            <span className="text-xs tracking-wider hidden sm:inline">VIRA AI</span>
            <Sparkles className="w-3.5 h-3.5 text-slate-950 animate-pulse" />
          </button>
        </div>
      )}

      {/* Main Chatbot Window */}
      {isOpen && (
        <div
          className={cn(
            "w-[92vw] sm:w-[410px] bg-[#050814]/95 border border-cyan-500/40 rounded-3xl shadow-2xl shadow-black/90 backdrop-blur-2xl flex flex-col overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5",
            isMinimized ? "h-16" : "h-[580px] max-h-[85vh]"
          )}
        >
          {/* Header */}
          <div className="px-4 py-3.5 bg-gradient-to-r from-cyan-950/90 via-[#050814] to-slate-900 border-b border-cyan-500/30 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/30">
                <div className="w-full h-full bg-[#050814] rounded-xl flex items-center justify-center">
                  <Bot className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#050814]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-display text-sm font-bold text-white tracking-wide">
                    VIRA <span className="text-cyan-400">AI</span>
                  </h3>
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                    Online
                  </span>
                </div>
                <p className="text-[10px] font-mono text-slate-400">
                  Virtual Intelligent Recovery Assistant
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Restart Chat"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? "Expand" : "Minimize"}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close"
                className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-800/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Message Feed */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "flex gap-2.5",
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    {msg.sender === "vira" && (
                      <div className="w-6 h-6 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-1">
                        <Zap className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                    )}

                    <div
                      className={cn(
                        "max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed",
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-medium rounded-tr-none shadow-md shadow-cyan-500/20"
                          : "bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-none space-y-2.5 shadow-md"
                      )}
                    >
                      <div className="whitespace-pre-line">
                        {msg.text.split("\n\n").map((paragraph, i) => (
                          <p key={i} className="mb-2 last:mb-0">
                            {paragraph.split("**").map((chunk, j) =>
                              j % 2 === 1 ? (
                                <strong key={j} className={msg.sender === "user" ? "text-slate-950 font-bold" : "text-white font-bold"}>
                                  {chunk}
                                </strong>
                              ) : (
                                chunk
                              )
                            )}
                          </p>
                        ))}
                      </div>

                      {/* Interactive Link Action Chips */}
                      {msg.links && msg.links.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {msg.links.map((link) => (
                            <Link
                              key={link.url}
                              href={link.url}
                              onClick={() => setIsOpen(false)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 hover:bg-cyan-900 transition-colors shadow-sm"
                            >
                              <span>{link.label}</span>
                              <ExternalLink className="w-3 h-3 text-cyan-400" />
                            </Link>
                          ))}
                        </div>
                      )}

                      <div
                        className={cn(
                          "text-[9px] font-mono text-right mt-1",
                          msg.sender === "user" ? "text-slate-900/60" : "text-slate-500"
                        )}
                      >
                        {msg.timestamp}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2.5 text-xs text-slate-400">
                    <div className="w-6 h-6 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0">
                      <Bot className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="bg-slate-900/90 border border-slate-800 px-3.5 py-2.5 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                      <span className="text-[10px] font-mono text-cyan-300 ml-1.5">VIRA thinking...</span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Preset Quick Chips */}
              <div className="px-3 py-2 border-t border-slate-800/80 bg-[#030611]/60 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
                {PRESET_PROMPTS.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => handleSend(preset.query)}
                    className="whitespace-nowrap px-2.5 py-1 rounded-full text-[10px] font-mono bg-slate-900/90 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-colors shrink-0"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* Input Bar */}
              <div className="p-3 bg-[#02040a] border-t border-slate-800">
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
                    placeholder="Ask VIRA anything about BRC STAR..."
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 font-sans"
                  />
                  <button
                    type="submit"
                    disabled={!inputMessage.trim() || isTyping}
                    className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 text-slate-950 hover:from-cyan-300 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-cyan-500/20"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
                <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 mt-1.5 px-1">
                  <span>BRC STAR (OPC) PRIVATE LIMITED</span>
                  <span className="text-cyan-400/80">Self Volt™ AI Core</span>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
