"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BackgroundOrbs from "@/components/background-orbs";
import EstimateCalculator from "@/components/estimate-calculator";

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const appRates = [
  { app: "Terminal", cpu: "2", gpu: "—", ram: "4 GB", credits: "120" },
  { app: "Blender", cpu: "16", gpu: "—", ram: "32 GB", credits: "960" },
  { app: "Isaac Sim (A100)", cpu: "8", gpu: "1", ram: "64 GB", credits: "4800" },
];

const tiers = [
  {
    name: "Starter",
    price: "Free",
    priceNote: "Forever. No card.",
    credits: "10,000\ncredits / month",
    features: [
      "Single user",
      "Community support",
      "Standard cold starts",
      "Public app catalog",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$49",
    priceNote: "Forever. No card.", 
    credits: "10,000\ncredits / month",
    features: [
      "Single user",
      "Priority support",
      "Fast cold starts",
      "Public app catalog",
    ],
    cta: "Start Pro trial",
  },
  {
    name: "Max",
    price: "$99", 
    priceNote: "Forever. No card.",
    credits: "Unlimited\ncredits / month",
    features: [
      "Team access",
      "Dedicated support",
      "Priority cold starts",
      "Private app catalog",
    ],
    cta: "Start Max trial",
  },
];

export default function Pricing() {
  
  const [activePlan, setActivePlan] = useState(1);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      
      <BackgroundOrbs />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative w-full flex justify-center pb-10 px-6 py-5 mt-7 md:mt-60 overflow-hidden z-10">
        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center text-center">
          <h1 className="font-bold text-[48px] md:text-[64px] leading-[1.1] tracking-tight text-gradient-primary mb-6">
            Pay For What You Use.
            <br />
            Nothing More.
          </h1>
          <p className="text-muted text-[16px] md:text-[18px] max-w-[560px] mx-auto leading-relaxed">
            Credits-based pricing. No upfront hardware. No surprises.
          </p>
        </div>
      </section>

      {/* ── 01. One Unit. Three Inputs. ── */}
      <section className="relative py-16 px-6 w-full max-w-[1300px] mx-auto z-10">
        <div className="flex flex-col gap-2 mb-10 text-center md:text-left">
          <span className="text-emerald-300 text-xs font-mono tracking-widest uppercase">
            01 · What&apos;s a credit
          </span>
          <h2 className="text-zinc-50 text-[32px] md:text-[48px] font-bold leading-tight text-gradient-primary">
            One unit. Three inputs.<br className="hidden md:block"/> Predictable math.
          </h2>
        </div>

        {/* Math Equation Row */}
        <div className="flex flex-wrap items-center justify-center md:justify-center gap-4 mb-10 font-mono">
          <div className="bg-neutral-900/50 border border-white/5 px-6 py-3 rounded-[4px] text-white text-[16px] md:text-[20px]">
            credits
          </div>
          <span className="text-accent text-[20px]">=</span>
          <div className="bg-neutral-900/50 border border-white/5 px-6 py-3 rounded-[4px] text-white text-[16px] md:text-[20px]">
            CPU cores × hrs
          </div>
          <span className="text-accent text-[20px]">+</span>
          <div className="bg-neutral-900/50 border border-white/5 px-6 py-3 rounded-[4px] text-white text-[16px] md:text-[20px]">
            GPU × hrs × tier
          </div>
          <span className="text-accent text-[20px]">+</span>
          <div className="bg-neutral-900/50 border border-white/5 px-6 py-3 rounded-[4px] text-white text-[16px] md:text-[20px]">
            RAM GB × hrs
          </div>
        </div>

        {/* App Rates Table Card */}
        <div className="bg-neutral-800/80 backdrop-blur-md rounded-[12px] border border-white/5 shadow-2xl p-6 md:p-10 flex flex-col relative">
          <div className="hidden md:flex gap-2 absolute top-6 left-6">
            <div className="w-2.5 h-2.5 bg-neutral-300 rounded-full" />
            <div className="w-2.5 h-2.5 bg-neutral-300 rounded-full" />
          </div>

          <div className="overflow-x-auto mt-6 md:mt-2">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr>
                  <th className="pb-6 text-muted text-[16px] font-bold font-mono">App</th>
                  <th className="pb-6 text-muted text-[16px] font-bold font-mono text-center">CPU</th>
                  <th className="pb-6 text-muted text-[16px] font-bold font-mono text-center">GPU</th>
                  <th className="pb-6 text-muted text-[16px] font-bold font-mono text-center">RAM</th>
                  <th className="pb-6 text-muted text-[16px] font-bold font-mono text-right">Credits/hr</th>
                </tr>
              </thead>
              <tbody className="text-white text-[16px] font-bold">
                {appRates.map((row) => (
                  <tr key={row.app}>
                    <td className="py-4">{row.app}</td>
                    <td className="py-4 text-muted text-center">{row.cpu}</td>
                    <td className="py-4 text-muted text-center">{row.gpu}</td>
                    <td className="py-4 text-muted text-center">{row.ram}</td>
                    <td className="py-4 text-right font-mono">{row.credits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 02. Three Tiers (Fully Interactive) ── */}
      <section className="relative py-16 px-6 w-full max-w-[1300px] mx-auto z-10">
        <div className="flex flex-col gap-2 mb-10 text-center md:text-left">
          <span className="text-emerald-300 text-xs font-mono tracking-widest uppercase">
            02 · Choose your tier
          </span>
          <h2 className="text-gradient-primary text-[32px] md:text-[48px] font-bold leading-tight">
            Three tiers. Start on Free.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-[23px]">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              onClick={() => setActivePlan(i)}
              className={`pricing-card cursor-pointer transition-all duration-300 ${
                activePlan === i ? 'pricing-card-active scale-[1.02]' : 'pricing-card-inactive hover:-translate-y-1'
              }`}
            >
              <div className="flex flex-col gap-[16px] h-full">
                
                {/* Window Dots */}
                <div className="flex gap-1.5 mb-2">
                  <div className="w-[6px] h-[6px] rounded-full bg-neutral-300" />
                  <div className="w-[6px] h-[6px] rounded-full bg-neutral-300" />
                </div>
                
                {/* Text Content */}
                <p className="text-muted text-[20px] font-bold">{tier.name}</p>
                <p className="text-accent-light text-[36px] font-bold leading-none">{tier.price}</p>
                <p className="text-dim text-[14px]">{tier.priceNote}</p>
                
                <div className="text-accent-light text-[24px] font-bold leading-tight mt-2 whitespace-pre-wrap">
                  {tier.credits}
                </div>
                
                <ul className="list-disc text-muted text-[16px] pl-6 mt-2 space-y-1 marker:text-dim">
                  {tier.features.map((f, idx) => (
                    <li key={idx}><span className="leading-[1.6]">{f}</span></li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className={`mt-auto rounded-[4px] h-[51px] flex items-center justify-center transition-colors ${
                  activePlan === i ? 'pricing-btn-active' : 'pricing-btn-inactive'
                }`}>
                  <span className="text-white text-[18px] font-medium">{tier.cta}</span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 03. Estimate Calculator ── */}
      <EstimateCalculator />

      {/* ── CTA ── */}
      <section className="relative pb-10 md:py-32 px-6 text-center overflow-hidden z-10">
        <div className="relative max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="font-bold text-[56px] md:text-[64px] leading-[1.1] text-gradient-primary mb-4">
            Don&apos;t see yours?
            <br />
            It still works.
          </h2>
          <p className="text-dim text-[16px] md:text-[18px] font-medium mb-10 max-w-xl">
            If it runs on Linux, macOS, or Windows, it runs on Infinity.<br/> Bring your own image.
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