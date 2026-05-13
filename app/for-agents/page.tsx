import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BackgroundOrbs from "@/components/background-orbs";
import SessionFrame from "@/components/session-frame"; // Your reusable component

// Helper for the arrow icon in the buttons
function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Updated data structure to match the new Figma cards
const problems = [
  {
    number: "01",
    metric: "< 3s",
    metricLabel: "cold start",
    title: "Too slow",
    before: "VM boot times. 30–90 seconds before an agent can do anything.",
    infinity: "Cold starts under 3 seconds. Parallel launch of 100 instances in 4.2s.",
  },
  {
    number: "02",
    metric: "0",
    metricLabel: "DevOps required",
    title: "Too complex",
    before: "DevOps config. API auth. Rate limits. Agents drown in infrastructure.",
    infinity: "Chat is the interface. No SDKs to integrate. No keys to rotate.",
  },
  {
    number: "03",
    metric: "0",
    metricLabel: "parallel tasks",
    title: "Not chat-native",
    before: "Existing infra is built for humans clicking buttons, not agents describing intent.",
    infinity: "Chat is the interface. No SDKs to integrate. No keys to rotate.",
  },
];

export default function ForAgents() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      
      <BackgroundOrbs />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative w-full flex justify-center px-6 p-5 mt-60 overflow-hidden z-10">
        <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="font-bold text-[48px] md:text-[64px] leading-[1.1] tracking-tight text-gradient-primary mb-6 max-w-5xl capitalize">
            Agents Don&apos;t Call APIs.<br /> They Chat.
          </h1>
          <p className="text-muted text-[18px] max-w-[560px] mx-auto leading-relaxed mb-8">
            Infinity is the first OS where agents are first-class citizens. No API keys. No rate limits. Just compute through conversation.
          </p>
        </div>
      </section>

      {/* ── 01. Why agents need Infinity (NEW DESIGN) ── */}
      <section className="relative py-16 px-6 max-w-[1600px] mx-auto z-10">
        
        {/* Header Block matching Figma */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-emerald-300 text-[12px] font-mono tracking-widest uppercase mb-2">
              01 · Why agents need Infinity
            </span>
            <h2 className="text-gradient-primary text-[36px] md:text-[42px] font-bold leading-[1.1] tracking-tight">
              Agents need compute.<br />
              Existing infra wasn&apos;t built for them.
            </h2>
          </div>
          <p className="text-muted text-[15px] max-w-sm leading-relaxed md:mt-10">
            Agents need to launch apps, run simulations, and process data. They speak in intent — &quot;render this,&quot; &quot;train that.&quot; Infinity is built for that language.
          </p>
        </div>

        {/* The 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div key={p.number} className="bg-[rgba(34,34,34,0.84)] rounded-[12px] p-6 md:p-8 flex flex-col relative border border-white/5 shadow-xl hover:bg-[rgba(44,44,44,0.84)] transition-colors">
              
              {/* Card Header (Number + Metric) */}
              <div className="flex justify-between items-start mb-10">
                <span className="text-dim text-[12px] font-mono">{p.number}</span>
                <div className="text-right flex flex-col items-end">
                  <span className="text-white text-[28px] md:text-[32px] font-bold leading-none tracking-tight">
                    {p.metric}
                  </span>
                  <span className="text-muted text-[10px] mt-1.5 whitespace-nowrap">
                    {p.metricLabel}
                  </span>
                </div>
              </div>

              {/* Card Title */}
              <h3 className="text-white text-[22px] font-bold mb-6">{p.title}</h3>

              {/* Before / Infinity Comparisons */}
              <div className="flex flex-col gap-4 mt-auto">
                <div className="flex flex-col gap-1">
                  <span className="text-emerald-300 text-[13px] font-medium tracking-wide">Before</span>
                  <p className="text-muted text-[13.5px] leading-[1.6]">{p.before}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-emerald-300 text-[13px] font-medium tracking-wide">Infinity</span>
                  <p className="text-muted text-[13.5px] leading-[1.6]">{p.infinity}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ── 02. Chat-driven orchestration ── */}
      <section className="relative py-20 px-6 w-full max-w-[1600px] mx-auto z-10 flex flex-col items-center">
        <div className="w-full max-w-[1600px] flex flex-col gap-3 mb-12 text-center md:text-left">
          <span className="text-emerald-300 text-xs font-mono tracking-widest uppercase">
            02 · Chat-driven orchestration
          </span>
          <h2 className="text-gradient-primary text-[32px] md:text-[40px] font-bold leading-tight">
            A full training workflow, in six messages.
          </h2>
          <p className="text-dim text-base md:text-lg">
            Provision, train, aggregate, release. One channel.
          </p>
        </div>
        
        <SessionFrame />
      </section>

      {/* ── 03. Multi-agent orchestration ── */}
      <section className="relative py-20 px-6 w-full max-w-[1600px] mx-auto z-10 flex flex-col items-center">
        <div className="w-full max-w-[1600px] flex flex-col gap-3 mb-12 text-center md:text-left">
          <span className="text-emerald-300 text-xs font-mono tracking-widest uppercase">
            03 · Multi-agent orchestration
          </span>
          <h2 className="text-gradient-primary text-[32px] md:text-[40px] font-bold leading-tight">
            One orchestrator. Infinite workers. No shared state to fight over.
          </h2>
          <p className="text-dim text-base md:text-lg">
            Each worker gets its own GPU environment. Results stream back through the same chat channel.
          </p>
        </div>
        
        <SessionFrame />
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative py-32 px-6 text-center overflow-hidden z-10">
        <div className="relative max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="font-bold text-[56px] md:text-[64px] leading-[1.1] text-gradient-primary mb-4">
            The computer just
            <br />
            grew up.
          </h2>
          <p className="text-dim text-[16px] md:text-[18px] font-bold mb-10">
            Start building on Infinity. Free tier. No credit card.
          </p>
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2.5 bg-btn text-black text-[14px] px-[24px] py-[14px] rounded-[4px] font-medium shadow-[inset_0px_1px_3px_0px_rgba(178,178,178,0.25),inset_0px_-1px_3px_0px_#b2b2b2] hover:bg-white transition-colors"
          >
            Try Infinity
            <ArrowRight />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}