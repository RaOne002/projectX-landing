"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BackgroundOrbs from "@/components/background-orbs";
import Button from "@/components/button";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    heading: "Pick your apps.",
    desc: "Browse the catalog — Blender, VS Code, Isaac Sim, DaVinci Resolve, and 30+ more. One click to pick. No download. No install. No driver setup.",
    image: "/images/how-it-works/step-1.png",
    alt: "Step 1 — pick your app",
  },
  {
    number: "02",
    heading: "Go to Infinity.projectx.cloud.",
    desc: "Open a browser. Any browser. Any device. Your workspace is already there — no configuration, no waiting, no environment setup.",
    image: "/images/how-it-works/step-2.png",
    alt: "Step 2 — open browser",
  },
  {
    number: "03",
    heading: "Pick your app.",
    desc: "Every app in the catalog is ready to launch. One click and it opens — with dedicated GPU, CPU, and RAM provisioned just for it.",
    image: "/images/how-it-works/step-3.png",
    alt: "Step 3 — launch app",
  },
  {
    number: "04",
    heading: "It launches with dedicated compute.",
    desc: "GPU, CPU, and RAM are allocated per app. Cold start under 3 seconds. No queue. No wait. Your app is ready before you finish your coffee.",
    image: "/images/how-it-works/step-4.png",
    alt: "Step 4 — dedicated compute",
  },
  {
    number: "05",
    heading: "Work. Add more Apps. They run independently.",
    desc: "Open Blender and Isaac Sim in the same session. Windows and Linux together. Hand off a live session with a link. Every app has its own computer.",
    image: "/images/how-it-works/step-5.png",
    alt: "Step 5 — multiple apps",
  },
];

export default function HowItWorks() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">

      {/* Centralized background component */}
      <BackgroundOrbs />

      <Navbar />

      {/* ── Hero ── */}
      <section className="relative p-5 pb-16 px-6 mt-7 md:mt-60 overflow-hidden z-10">
        <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-gradient-primary font-bold text-[56px] md:text-[64px] leading-tight mb-6 tracking-tight">
            A New Computing
            <br />
            Primitive.
          </h1>
          <p className="text-muted text-lg max-w-[600px] leading-relaxed">
            Not a VM. Not a VDI. Not a remote desktop. Infinity is a full operating system that lives in the cloud.
          </p>
        </div>
      </section>

      {/* ── Steps with Central Timeline ── */}
      <section className="relative py-0 px-6 max-w-[1300px] mx-auto z-10 mt-10">

        {/* Central Vertical Timeline Line (Desktop Only) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20 z-0" />

        <div className="flex flex-col gap-32">
          {steps.map((step, i) => {
            const isTextLeft = i % 2 === 0;

            return (
              <div
                key={step.number}
                className={`relative flex flex-col ${isTextLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-12 md:gap-44 z-10 w-full`}
              >
                {/* Text Block - Animated */}
                <motion.div 
                  initial={{ opacity: 0, y: 50, x: isTextLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`flex-1 flex flex-col gap-4 relative ${isTextLeft ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} items-start text-left`}
                >

                  {/* --- CURVED HORIZONTAL CONNECTORS --- */}
                  {isTextLeft ? (
                    // Connector pointing LEFT towards text block
                    <div className="hidden md:block absolute top-[0px] -right-[87px] w-[85px] h-[40px] pointer-events-none">
                      <Image
                        src="/images/Arrow 16.svg"
                        alt="Arrow left"
                        fill
                        sizes="85px"
                        className="object-contain object-left-bottom"
                      />
                    </div>
                  ) : (
                    // Connector pointing RIGHT towards text block (Flipped horizontally)
                    <div className="hidden md:block absolute top-[0px] -left-[87px] w-[85px] h-[40px] pointer-events-none">
                      <Image
                        src="/images/Arrow 16.svg"
                        alt="Arrow right"
                        fill
                        sizes="85px"
                        className="object-contain object-right-bottom scale-x-[-1]"
                      />
                    </div>
                  )}
                  {/* ----------------------------- */}

                  <span className="text-emerald-300 text-sm font-mono font-semibold tracking-widest uppercase">
                    Step {step.number}
                  </span>
                  <h2 className="text-gradient-primary font-bold text-[32px] md:text-[42px] leading-tight">
                    {step.heading}
                  </h2>
                  <p className="text-muted text-base leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </motion.div>

                {/* Image Block - Animated */}
                <motion.div 
                  initial={{ opacity: 0, y: 50, x: isTextLeft ? 40 : -40 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="flex-1 w-full"
                >
                  <div className="bg-[rgba(34,34,34,0.6)] rounded-[12px] overflow-hidden shadow-2xl relative z-10">
                    <div className="bg-[rgba(44,44,44,0.61)] h-[33px] flex items-center px-4 gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                    </div>
                    <div className="relative w-full aspect-[16/9]">
                      <Image src={step.image} alt={step.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── "Orchestrate it like you'd ask a person." ── */}
      <section className="relative py-32 px-6 overflow-hidden z-10 mt-16">
        <div className="relative max-w-[1300px] mx-auto flex flex-col items-center gap-16 md:gap-[100px]">
          
          {/* Top Text Block */}
          <div className="flex flex-col items-center text-center max-w-[800px] gap-6">
            <h2 className="text-gradient-primary font-bold text-[40px] md:text-[56px] leading-tight">
              Orchestrate it like you&apos;d
              <br className="hidden md:block" />
              ask a person.
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              No API calls. No YAML. No provisioning shell. Infinity exposes a chat interface — for you and for your agents — that launches apps, allocates compute, moves sessions across devices, and fans work out in parallel.
            </p>
          </div>

          {/* Bottom Content Block: Window + List */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-[60px] w-full">
            
            {/* Browser/Macbook Frame */}
            <div className="relative w-full max-w-[800px] h-[300px] sm:h-[520px] bg-[rgba(34,34,34,0.6)] rounded-[12px] p-[12px] pt-[40px] md:pt-[60px] md:pb-[16px] md:px-[16px] flex flex-col justify-end shadow-2xl">
              
              {/* Window Controls (2 Grey Dots) */}
              <div className="absolute top-[14px] md:top-[24px] left-[16px] md:left-[24px] flex gap-2.5">
                <div className="w-[12px] h-[12px] rounded-full bg-neutral-300" />
                <div className="w-[12px] h-[12px] rounded-full bg-neutral-300" />
              </div>
              
              {/* Inner Screen with Green Gradient Orbs */}
              <div className="relative w-full h-full bg-neutral-800 rounded-[8px] overflow-hidden shadow-inner">
                {/* Background Blurs/Gradients */}
                <div 
                  className="absolute w-[1100px] h-[1100px] rounded-full"
                  style={{
                    left: '100px', 
                    top: '700px', 
                    transform: 'rotate(-47deg)', 
                    background: 'linear-gradient(180deg, #316759 0%, #499A85 50%, #DBFFF6 100%)', 
                    filter: 'blur(250px)',
                    opacity: 0.8
                  }} 
                />
                <div 
                  className="absolute w-[950px] h-[950px] rounded-full"
                  style={{
                    left: '600px', 
                    top: '-250px', 
                    transform: 'rotate(113deg)', 
                    background: 'linear-gradient(180deg, #316759 0%, #499A85 87%, #DBFFF6 100%)', 
                    filter: 'blur(250px)',
                    opacity: 0.8
                  }} 
                />
              </div>
            </div>

            {/* Feature List */}
            <div className="flex flex-col w-full max-w-[420px] gap-[30px] lg:pl-4">
              <div className="text-neutral-200 text-[18px] font-bold tracking-wide">Launch with resources</div>
              <div className="w-full h-[1px] bg-white/20" />
              
              <div className="text-neutral-200 text-[18px] font-bold tracking-wide">Device handoff</div>
              <div className="w-full h-[1px] bg-white/20" />
              
              <div className="text-neutral-200 text-[18px] font-bold tracking-wide">Parallel fan-out</div>
            </div>

          </div>
        </div>
      </section>

      {/* ── "Don't see yours? It still works." ── */}
      <section className="py-24 px-6 text-center relative overflow-hidden z-10">
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-gradient-primary font-bold text-[56px] md:text-[76px] leading-[1.1] mb-6">
            Don&apos;t see yours?
            <br />
            It still works.
          </h2>
          <p className="text-dim text-lg mb-10 leading-relaxed">
            If it runs on Linux or Windows, it almost certainly runs on Infinity.
            <br />
            Request an app or bring your own container.
          </p>
          <Button href="/how-it-works" size="md">
            Try Infinity Free
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}