"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/button";
import BackgroundOrbs from "@/components/background-orbs";
import SessionFrame from "@/components/session-frame";

// Custom Hook to handle auto-scrolling with manual swipe freedom
function useAutoScroll(speed = 1) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isPaused) return;

    let animationId: number;
    let scrollPos = el.scrollLeft;

    const scroll = () => {
      if (!el) return;
      scrollPos += speed;

      // Infinite loop: When scrolled halfway (one full set), reset to 0
      if (scrollPos >= el.scrollWidth / 2) {
        scrollPos = 0;
      }

      el.scrollLeft = scrollPos;

      // Sync internal position if user manually swipes while it's unpaused
      if (Math.abs(el.scrollLeft - scrollPos) > speed + 2) {
        scrollPos = el.scrollLeft;
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, speed]);

  return { scrollRef, setIsPaused };
}

const steps = [
  {
    label: "step1",
    image: "/images/pick-app-step1.png",
    caption: "Choose your app — Blender, VS Code, DaVinci Resolve, Isaac Sim, anything",
  },
  {
    label: "step2",
    image: "/images/pick-app-step2.png",
    caption: "It launches with dedicated compute and GPU in seconds",
  },
  {
    label: "step3",
    image: "/images/pick-app-step3.png",
    caption: "Work. Add more apps. They all run independently. No limits.",
  },
];

const fourThings = [
  { num: "01", text: "Every app is its own computer." },
  { num: "02", text: "The OS is invisible." },
  { num: "03", text: "Cold start in seconds." },
  { num: "04", text: "Humans and agents coexist." },
];

const useCasesData = [
  {
    title: "Robotics and Simulation",
    description: 'Launch Isaac Sim in 3 seconds. Chat: "Run 320 parallel simulations." Done.',
    image: "/images/use-cases-macbook.png"
  },
  {
    title: "AI/ML Development",
    description: '"Launch a PyTorch notebook with A100." Ready in 3 seconds.',
    image: "/images/use-cases-macbook.png"
  },
  {
    title: "Game Development & VFX",
    description: "Run Unreal Engine 5 with full raytracing. Render massive environments in real-time.",
    image: "/images/use-cases-macbook.png"
  },
  {
    title: "Education & Academia",
    description: "Provide instant computing labs for entire classrooms without hardware constraints.",
    image: "/images/use-cases-macbook.png"
  },
  {
    title: "3D Modeling & CAD",
    description: "Seamlessly run Blender, Maya, or AutoCAD with dedicated GPU acceleration.",
    image: "/images/use-cases-macbook.png"
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCase, setActiveCase] = useState<number | null>(null);
  const [activePlan, setActivePlan] = useState(1);

  // Initialize auto-scroll hooks for both carousels
  const stepsScroll = useAutoScroll(1);
  const useCasesScroll = useAutoScroll(0.8);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden mx-1 md:mx-0">

      <BackgroundOrbs />

      <Navbar />

      {/* 1. Hero */}
      <section className="relative z-10 pt-7 md:pt-57 pb-0 flex flex-col items-center text-center px-4">
        <div className="flex flex-col items-center gap-6 max-w-full mx-auto">
          <h1 className="text-gradient-primary font-bold text-[48px] md:text-[72px] leading-[1.1] md:leading-[1.2] tracking-[-1px] md:tracking-[-2px] text-center">
            Run Anything
            <br />
            On Everything
          </h1>
          <p className="text-muted text-[16px] md:text-[18px] leading-7 tracking-[0.1px] text-center max-w-[460px]">
            The heaviest apps, every OS, the most powerful GPUs — for you and your agents. Works on any device.
          </p>
          <Button href="/how-it-works" size="md">
            Try Infinity
          </Button>
        </div>
      </section>

      {/* 2. Hero OS Mockup */}
      <section className="relative z-10 mt-8 md:mt-12 px-4 md:px-8 xl:px-0">

        {/* Desktop View (Annotations) */}
        <div
          className="hidden xl:block relative mx-auto"
          style={{ maxWidth: "1300px", aspectRatio: "1280 / 660" }}
        >
          {/* Image */}
          <div
            className="absolute rounded-[18px] overflow-hidden"
            style={{ left: "12%", top: "7%", width: "76%", height: "84%" }}
          >
            <Image
              src="/images/homepage-frame-1.png"
              alt="Infinity OS"
              fill
              sizes="(min-width: 1440px) 76vw"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Desktop Only SVG Annotations (Hidden on mobile) */}
          <div className="absolute pointer-events-none flex items-center justify-center" style={{ left: "83.5%", top: "3.5%", width: "0px", height: "53px" }}>
            <svg viewBox="0 0 54 7.364" width="53" height="7.23" fill="none" style={{ overflow: "visible", flexShrink: 0, transform: "rotate(-90deg)" }}>
              <path d="M0.5 3.182C0.224 3.182 0 3.406 0 3.682C0 3.958 0.224 4.182 0.5 4.182V3.682V3.182ZM53.854 4.036C54.049 3.84 54.049 3.524 53.854 3.328L50.672 0.146C50.476 -0.049 50.16 -0.049 49.964 0.146C49.769 0.342 49.769 0.658 49.964 0.854L52.793 3.682L49.964 6.51C49.769 6.706 49.769 7.022 49.964 7.218C50.16 7.413 50.476 7.413 50.672 7.218L53.854 4.036ZM0.5 3.682V4.182H53.5V3.682V3.182H0.5V3.682Z" fill="white" />
            </svg>
          </div>
          <div className="absolute pointer-events-none flex items-center justify-center" style={{ left: "11%", top: "24.41%", width: "51.29px", height: "19.35px" }}>
            <svg viewBox="0 0 52.644 15.938" width="50" height="15.14" fill="none" style={{ overflow: "visible", flexShrink: 0, transform: "rotate(-174.88deg)" }}>
              <path d="M0.578 0.482C0.305 0.439 0.049 0.625 0.006 0.898C-0.037 1.171 0.15 1.427 0.423 1.47L0.5 0.976L0.578 0.482ZM51.13 0.335C51.038 0.074 50.753 -0.063 50.492 0.028L46.245 1.515C45.984 1.606 45.847 1.891 45.938 2.152C46.03 2.413 46.315 2.55 46.575 2.459L50.351 1.137L51.672 4.913C51.764 5.173 52.049 5.311 52.309 5.219C52.57 5.128 52.707 4.843 52.616 4.582L51.13 0.335ZM0.5 0.976L0.423 1.47C5.419 2.254 10.081 4.562 14.537 7.133C18.961 9.686 23.226 12.529 27.307 14.263C31.413 16.008 35.459 16.69 39.468 14.827C43.45 12.977 47.282 8.665 51.108 0.717L50.658 0.5L50.207 0.283C46.416 8.158 42.714 12.216 39.046 13.92C35.404 15.613 31.682 15.035 27.698 13.343C23.691 11.64 19.546 8.869 15.037 6.267C10.559 3.683 5.764 1.296 0.578 0.482L0.5 0.976Z" fill="white" />
            </svg>
          </div>
          <div className="absolute pointer-events-none flex items-center justify-center" style={{ left: "10%", top: "46.55%", width: "68.75px", height: "26.49px" }}>
            <svg viewBox="0 0 68.594 24.681" width="68" height="24.47" fill="none" style={{ overflow: "visible", flexShrink: 0, transform: "scaleY(-1) rotate(-176.82deg)" }}>
              <path d="M0.348 2.986C0.085 3.07 -0.06 3.352 0.024 3.615C0.108 3.878 0.389 4.023 0.652 3.939L0.5 3.463L0.348 2.986ZM68.194 23.768C68.465 23.713 68.639 23.448 68.584 23.178L67.681 18.769C67.626 18.499 67.361 18.324 67.091 18.38C66.82 18.435 66.646 18.699 66.701 18.97L67.504 22.889L63.585 23.691C63.315 23.747 63.14 24.011 63.196 24.281C63.251 24.552 63.515 24.726 63.786 24.671L68.194 23.768ZM0.5 3.463L0.652 3.939C13.852 -0.28 23.993 0.291 34.135 4.074C44.32 7.874 54.509 14.911 67.819 23.695L68.094 23.278L68.369 22.861C55.11 14.109 44.804 6.987 34.484 3.137C24.122 -0.728 13.75 -1.297 0.348 2.986L0.5 3.463Z" fill="white" />
            </svg>
          </div>
          <div className="absolute pointer-events-none flex items-center justify-center" style={{ left: "82%", top: "57.09%", width: "106.88px", height: "61.68px" }}>
            <svg viewBox="0 0 110.09 20.476" width="109" height="20.28" fill="none" style={{ overflow: "visible", flexShrink: 0, transform: "rotate(-24.4deg)" }}>
              <path d="M0.248 18.313C0.009 18.453 -0.071 18.759 0.068 18.997C0.208 19.236 0.514 19.316 0.752 19.176L0.5 18.745L0.248 18.313ZM51.131 0.54L51.11 0.04L51.131 0.54ZM109.726 19.226C109.992 19.15 110.146 18.874 110.07 18.608L108.84 14.28C108.764 14.014 108.488 13.86 108.222 13.935C107.956 14.011 107.802 14.288 107.878 14.553L108.972 18.401L105.124 19.495C104.859 19.57 104.705 19.847 104.78 20.112C104.856 20.378 105.132 20.532 105.398 20.456L109.726 19.226ZM0.5 18.745C0.752 19.176 0.753 19.176 0.753 19.176C0.753 19.176 0.753 19.176 0.754 19.176C0.754 19.175 0.756 19.174 0.757 19.174C0.761 19.172 0.766 19.169 0.773 19.164C0.787 19.156 0.808 19.144 0.836 19.128C0.892 19.096 0.976 19.047 1.086 18.984C1.306 18.858 1.633 18.673 2.056 18.436C2.903 17.963 4.137 17.286 5.684 16.47C8.779 14.838 13.124 12.653 18.124 10.44C28.142 6.006 40.727 1.489 51.153 1.04L51.131 0.54L51.11 0.04C40.485 0.498 27.755 5.084 17.719 9.525C12.693 11.75 8.327 13.946 5.218 15.586C3.663 16.406 2.422 17.087 1.568 17.563C1.142 17.802 0.812 17.989 0.589 18.116C0.477 18.18 0.392 18.229 0.335 18.262C0.307 18.279 0.285 18.292 0.27 18.3C0.263 18.304 0.257 18.308 0.254 18.31C0.252 18.311 0.25 18.312 0.249 18.312C0.249 18.313 0.248 18.313 0.248 18.313C0.248 18.313 0.248 18.313 0.5 18.745ZM51.131 0.54L51.153 1.04C63.008 0.529 77.538 5.043 89.151 9.719C94.947 12.054 99.998 14.42 103.6 16.203C105.401 17.095 106.839 17.84 107.826 18.362C108.319 18.623 108.7 18.829 108.957 18.968C109.086 19.038 109.183 19.092 109.249 19.128C109.281 19.146 109.306 19.159 109.322 19.168C109.33 19.173 109.336 19.176 109.34 19.178C109.342 19.18 109.344 19.18 109.345 19.181C109.345 19.181 109.346 19.181 109.346 19.181C109.346 19.182 109.346 19.182 109.589 18.745C109.833 18.308 109.833 18.308 109.832 18.308C109.832 18.307 109.832 18.307 109.831 18.307C109.83 18.306 109.828 18.305 109.826 18.304C109.822 18.302 109.815 18.298 109.807 18.294C109.79 18.284 109.764 18.27 109.731 18.252C109.664 18.215 109.565 18.161 109.435 18.09C109.174 17.948 108.79 17.741 108.293 17.478C107.299 16.952 105.853 16.203 104.044 15.307C100.425 13.516 95.35 11.138 89.524 8.792C77.893 4.108 63.193 -0.48 51.11 0.04L51.131 0.54Z" fill="#A7A7A7" />
            </svg>
          </div>
          <div className="absolute pointer-events-none flex items-center justify-center" style={{ left: "82%", top: "77.8%", width: "114.74px", height: "75.12px" }}>
            <svg viewBox="0 0 109.349 39.3" width="108" height="38.79" fill="none" style={{ overflow: "visible", flexShrink: 0, transform: "rotate(-21.38deg)" }}>
              <path d="M0.902 5.078C0.738 4.855 0.425 4.808 0.203 4.972C-0.019 5.136 -0.066 5.449 0.098 5.671L0.5 5.374L0.902 5.078ZM109.228 0.486C109.22 0.21 108.99 -0.007 108.714 0L104.216 0.122C103.94 0.129 103.722 0.359 103.73 0.635C103.737 0.911 103.967 1.129 104.243 1.121L108.241 1.013L108.35 5.012C108.357 5.288 108.587 5.506 108.863 5.498C109.139 5.491 109.357 5.261 109.349 4.985L109.228 0.486ZM0.5 5.374L0.098 5.671C19.073 31.389 35.989 41.231 53.44 38.992C62.137 37.877 70.905 33.764 80.06 27.231C89.215 20.697 98.785 11.722 109.091 0.844L108.728 0.5L108.365 0.156C98.077 11.016 88.558 19.938 79.479 26.417C70.399 32.896 61.787 36.913 53.312 38C36.418 40.167 19.813 30.708 0.902 5.078L0.5 5.374Z" fill="white" />
            </svg>
          </div>
          <div className="absolute pointer-events-none flex items-center justify-center" style={{ left: "44.92%", top: "88%", width: "127.06px", height: "84.44px" }}>
            <svg viewBox="0 0 124.483 38.064" width="123" height="37.59" fill="none" style={{ overflow: "visible", flexShrink: 0, transform: "rotate(24.9deg)" }}>
              <path d="M0.993 1.714C0.949 1.441 0.692 1.257 0.419 1.301C0.147 1.346 -0.038 1.603 0.007 1.876L0.5 1.795L0.993 1.714ZM124.462 1.939C124.541 1.674 124.391 1.395 124.127 1.316L119.817 0.021C119.553 -0.058 119.274 0.092 119.194 0.356C119.115 0.621 119.265 0.9 119.529 0.979L123.36 2.13L122.209 5.961C122.13 6.225 122.28 6.504 122.544 6.583C122.809 6.663 123.088 6.513 123.167 6.248L124.462 1.939ZM0.5 1.795L0.007 1.876C2.004 14.039 5.294 23.142 10.531 29.182C15.791 35.248 22.964 38.167 32.575 38.062C42.161 37.957 54.195 34.845 69.251 28.85C84.314 22.853 102.44 13.953 124.22 2.235L123.983 1.795L123.746 1.354C101.978 13.065 83.891 21.945 68.881 27.921C53.864 33.901 41.965 36.959 32.564 37.062C23.187 37.164 16.318 34.33 11.286 28.527C6.231 22.696 2.98 13.812 0.993 1.714L0.5 1.795Z" fill="white" />
            </svg>
          </div>
          <div className="absolute" style={{ left: "83.3%", top: "-3%", maxWidth: "170px" }}>
            <p className="font-bold leading-tight" style={{ color: "#fff", fontSize: "12px" }}>Its just a Browser tab</p>
            <p className="leading-tight mt-0.5" style={{ color: "#0DF0B7", fontSize: "10px" }}>No install,No driver setup, works<br /> on a chromebook</p>
          </div>
          <div className="absolute text-right" style={{ right: "88.5%", top: "27%", maxWidth: "170px" }}>
            <p className="font-bold leading-tight" style={{ color: "#fff", fontSize: "12px" }}>Per-app GPU telemetry</p>
            <p className="leading-tight mt-0.5" style={{ color: "#0DF0B7", fontSize: "10px" }}>See exactly which app is using GPU,live</p>
          </div>
          <div className="absolute" style={{ left: "-1%", top: "50%", maxWidth: "170px" }}>
            <p className="font-bold leading-tight" style={{ color: "#fff", fontSize: "12px" }}>Two GPUs.One workspace</p>
            <p className="leading-tight mt-0.5 text-right" style={{ color: "#0DF0B7", fontSize: "10px" }}>Pytorch training on the A100.<br /> IsaacSim running on the <br /> Blackwell</p>
          </div>
          <div className="absolute" style={{ left: "89%", top: "50%", maxWidth: "200px" }}>
            <p className="font-bold leading-tight" style={{ color: "#fff", fontSize: "12px" }}>The agent that uses real apps</p>
            <p className="leading-tight mt-0.5" style={{ color: "#0DF0B7", fontSize: "10px" }}>&ldquo;Render frame 240.&rdquo; It opens blender and does it</p>
          </div>
          <div className="absolute" style={{ left: "89%", top: "69%", maxWidth: "200px" }}>
            <p className="font-bold leading-tight" style={{ color: "#fff", fontSize: "12px" }}>Hands off a running workspace</p>
            <p className="leading-tight mt-0.5" style={{ color: "#0DF0B7", fontSize: "10px" }}>Send a link. Your teammate picks up where you left off</p>
          </div>
          <div className="absolute" style={{ left: "55%", top: "93%", maxWidth: "285px" }}>
            <p className="font-bold leading-tight" style={{ color: "#fff", fontSize: "12px" }}>Windows and linux apps together</p>
            <p className="leading-tight mt-0.5" style={{ color: "#0DF0B7", fontSize: "10px" }}>Blender, Fusion, Isaac Sim in the same <br /> workspace.</p>
          </div>
        </div>

        {/* Mobile/tablet -- plain image */}
        <div className="xl:hidden max-w-[1000px] w-full mx-auto">
          <div className="relative w-full rounded-[12px] md:rounded-[18px] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.4)] border border-white/5" style={{ aspectRatio: "837/514" }}>
            <Image
              src="/images/homepage-frame-1.png"
              alt="Infinity OS — one session, multiple apps"
              fill
              sizes="(max-width: 1280px) 100vw, 1100px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* 3. iMessage / Problem -- Solution */}
      <section className="relative z-10 mt-16 px-4 md:px-1 max-w-[760px] mx-auto flex flex-col gap-4">
        <div className="flex items-end gap-0">
          <div className="relative bg-neutral-800 rounded-[18px] rounded-bl-[4px] p-4 sm:px-[12px] sm:py-[6px] max-w-[476px]">
            <p className="text-neutral-200 text-[15px] sm:text-[18px] leading-6 tracking-[0.22px] capitalize font-normal">
              OpenClaw. Claude Cowork. Manus. Perplexity Computer. The smartest agents ever built — all trapped inside
              machines designed in 1973. One cursor. One keyboard. One thing at a time. The most intelligent software in
              history, forced to work like a human intern using remote desktop.
            </p>
            <svg className="absolute -bottom-[6px] -left-[8px]" width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M16 0 Q16 12 0 12 Q6 12 8 6 Z" fill="#262827" />
            </svg>
          </div>
        </div>
        <div className="flex justify-end items-end gap-0">
          <div className="relative bg-[#00a87e] rounded-[12px] rounded-br-[4px] px-[14px] py-[8px]">
            <p className="text-[rgba(255,255,255,0.9)] text-[15px] sm:text-[18px] leading-[22px] tracking-[-0.4px] text-right whitespace-nowrap">
              We Fixed that
            </p>
            <svg className="absolute -bottom-[6px] -right-[8px]" width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M0 0 Q0 12 16 12 Q10 12 8 6 Z" fill="#00a87e" />
            </svg>
          </div>
        </div>
      </section>

      {/* 4. "The OS for the age of AI agents" */}
      <section className="relative z-10 mt-24 px-4 sm:px-1 max-w-[1300px] mx-auto">
        <div className="flex flex-col xl:flex-row items-center text-center xl:text-left gap-12 xl:gap-[133px]">
          {/* Left text */}
          <div className="flex flex-col items-center xl:items-start gap-6 w-full max-w-[494px] shrink-0">
            <h2 className="text-gradient-primary font-bold text-[40px] md:text-[56px] leading-[1.1] md:leading-[1.2]">
              The OS for the age of AI agents
            </h2>
            <p className="text-white text-[16px] leading-relaxed font-normal w-full md:w-[392px]">
              Agents don&apos;t call APIs. They chat. Infinity&apos;s chat interface lets any agent orchestrate GPU
              workloads — spin up environments, run apps, share results. One conversation. Unlimited compute
            </p>
            <Button href="/for-agents" size="md">
              Learn More
            </Button>
          </div>
          {/* Right card */}
          <div className="relative shrink-0 w-full max-w-[460px] flex flex-col gap-[10px]">
            <div className="bg-[rgba(34,34,34,0.6)] rounded-[8px] overflow-hidden shadow-xl">
              <div className="h-[33px] bg-[rgba(44,44,44,0.6)] flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-white text-[12px] font-bold ml-1">agentic AI</span>
              </div>
              <div className="relative w-full" style={{ aspectRatio: "460/271" }}>
                <Image
                  src="/images/agentic-ai-card.png"
                  alt="Agentic AI session"
                  fill
                  sizes="(max-width: 460px) 100vw, 460px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Annotation (Desktop only) */}
            <div className="hidden xl:flex absolute pointer-events-none items-center gap-[10px]"
              style={{ left: "82%", top: "200px", marginLeft: "8px" }}>
              <svg viewBox="0 0 86.4561 19.9932" width="80" height="19" fill="none" style={{ overflow: "visible", flexShrink: 0 }}>
                <path d="M0.200932 18.3441C-0.0203546 18.5093 -0.0658318 18.8226 0.0993557 19.0439C0.264543 19.2652 0.577842 19.3106 0.799129 19.1455L0.50003 18.7448L0.200932 18.3441ZM40.1624 0.539997L40.1898 1.03924L40.1624 0.539997ZM86.0392 19.2378C86.3115 19.1919 86.495 18.9339 86.4491 18.6616L85.7007 14.2243C85.6548 13.952 85.3969 13.7685 85.1246 13.8144C84.8523 13.8603 84.6687 14.1183 84.7147 14.3906L85.3799 18.3349L81.4356 19.0001C81.1633 19.046 80.9798 19.304 81.0257 19.5763C81.0716 19.8486 81.3296 20.0321 81.6019 19.9862L86.0392 19.2378ZM0.50003 18.7448C0.799129 19.1455 0.799155 19.1454 0.79927 19.1454C0.799426 19.1452 0.799628 19.1451 0.79994 19.1449C0.800562 19.1444 0.801536 19.1437 0.80286 19.1427C0.805507 19.1407 0.809554 19.1377 0.814985 19.1337C0.825847 19.1256 0.842249 19.1134 0.864075 19.0973C0.907728 19.0651 0.973081 19.017 1.05922 18.9541C1.2315 18.8282 1.48693 18.6431 1.81821 18.4068C2.4808 17.9344 3.44668 17.2577 4.65759 16.4426C7.07985 14.812 10.4804 12.6287 14.3934 10.4178C22.2421 5.98317 32.0699 1.4858 40.1898 1.03924L40.1624 0.539997L40.1349 0.0407513C31.7649 0.501062 21.7616 5.10609 13.9015 9.54715C9.96024 11.774 6.53705 13.9719 4.09916 15.613C2.88 16.4337 1.90671 17.1156 1.23764 17.5926C0.903097 17.8312 0.644573 18.0186 0.469365 18.1465C0.38176 18.2105 0.314981 18.2597 0.269939 18.293C0.247418 18.3096 0.230331 18.3223 0.218792 18.3308C0.213022 18.3351 0.20864 18.3384 0.205658 18.3406C0.204168 18.3417 0.203027 18.3425 0.202239 18.3431C0.201845 18.3434 0.201518 18.3437 0.201321 18.3438C0.201082 18.344 0.200932 18.3441 0.50003 18.7448ZM40.1624 0.539997L40.1898 1.03924C49.4213 0.531555 60.7647 5.02334 69.863 9.70033C74.3987 12.0319 78.3517 14.3963 81.1708 16.1779C82.5801 17.0686 83.7054 17.8132 84.4777 18.3346C84.8639 18.5954 85.1618 18.8003 85.3627 18.9398C85.4632 19.0095 85.5395 19.0629 85.5904 19.0987C85.6159 19.1166 85.635 19.1301 85.6477 19.1391C85.654 19.1436 85.6588 19.1469 85.6619 19.1491C85.6634 19.1502 85.6646 19.151 85.6653 19.1515C85.6656 19.1518 85.6659 19.152 85.6661 19.1521C85.6662 19.1522 85.6662 19.1522 85.9561 18.7448C86.2459 18.3374 86.2457 18.3372 86.2455 18.337C86.2452 18.3369 86.2448 18.3366 86.2444 18.3363C86.2435 18.3356 86.2421 18.3347 86.2404 18.3335C86.2369 18.331 86.2318 18.3274 86.2251 18.3226C86.2116 18.3131 86.1917 18.299 86.1655 18.2806C86.1129 18.2437 86.035 18.1891 85.9329 18.1182C85.7286 16.9794 85.4272 17.7691 85.0373 17.5059C84.2576 16.9794 83.1238 16.2292 81.705 15.3326C78.868 13.5397 74.8887 11.1595 70.3202 8.81096C61.2098 4.12773 49.6564 -0.482883 40.1349 0.0407513L40.1624 0.539997Z" fill="#A7A7A7" />
              </svg>
              <div>
                <p className="font-bold leading-tight text-white w-[180px]" style={{ fontSize: "16px" }}>Orchestrate by chat</p>
                <p className="leading-tight mt-1" style={{ color: "#0DF0B7", fontSize: "11px" }}>&ldquo;Launch Blender, render frame 240&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "This is One Session" */}
      <section className="relative z-10 mt-24 px-4 text-center mb-7">
        <h2 className="text-gradient-primary capitalize font-bold text-[40px] md:text-[70px] leading-[1.1] md:leading-[1.05] tracking-[0.22px] whitespace-normal sm:whitespace-nowrap">
          This is one session
        </h2>
      </section>

      {/* 6. Session Frame */}
      <section className="relative py-4 md:py-8 px-4 md:px-6 w-full max-w-[1300px] mx-auto z-10">
        <SessionFrame />
      </section>

      {/* 7. Stats Bar */}
      <section className="relative z-10 mt-12 md:mt-16 px-4 md:px-1 max-w-[1300px] mx-auto">
        <div className="bg-[rgba(34,34,34,0.6)] rounded-[12px] p-8 md:px-12 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
            <div className="flex flex-col gap-2 text-center flex-1">
              <p className="text-neutral-400 text-[13px] font-normal">Performance</p>
              <p className="text-white text-[48px] font-bold leading-none">&lt;3s</p>
              <p className="text-neutral-500 text-[11px]">cold starts</p>
            </div>
            <div className="flex flex-col gap-2 text-center flex-1">
              <p className="text-neutral-400 text-[13px] font-normal">Ecosystem</p>
              <p className="text-white text-[48px] font-bold leading-none">36+</p>
              <p className="text-neutral-500 text-[11px]">native apps</p>
            </div>
            <div className="flex flex-col gap-2 text-center flex-1">
              <p className="text-neutral-400 text-[13px] font-normal">Adoption</p>
              <p className="text-white text-[48px] font-bold leading-none">2M+</p>
              <p className="text-neutral-500 text-[11px]">launch views</p>
            </div>
            <div className="flex flex-col gap-2 text-center flex-1">
              <p className="text-neutral-400 text-[13px] font-normal">Support</p>
              <p className="text-white text-[76px] font-normal leading-none">∞</p>
              <p className="text-neutral-500 text-[11px]">devices supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. "Pick your app. It's already running." */}
      <section className="relative z-10 mt-24 px-4 text-center">
        <div className="flex flex-col items-center gap-0">
          <h2 className="text-gradient-primary font-bold text-[40px] md:text-[56px] leading-[1.1] md:leading-[1.2] inline-block">
            Pick your app.
          </h2>
          <h2 className="text-gradient-primary font-bold text-[40px] md:text-[56px] leading-[1.1] md:leading-[1.2]">
            It&apos;s already running
          </h2>
        </div>
      </section>

      {/* 9. 3-step cards (Desktop: Centered, Mobile: Infinite Marquee) */}
      <section className="relative z-10 mt-12 w-full max-w-[1300px] mx-auto">
        {/* Desktop View */}
        <div className="hidden md:flex gap-8 items-start justify-center px-6">
          {steps.map((step) => (
            <div key={step.label} className="flex-1 max-w-[500px] flex flex-col gap-[19px]">
              <div className="bg-[rgba(34,34,34,0.6)] rounded-[8px] overflow-hidden">
                <div className="flex items-center gap-[7px] px-4 py-[10px]">
                  <div className="w-[14px] h-[13px] rounded-full bg-neutral-300" />
                  <div className="w-[14px] h-[13px] rounded-full bg-neutral-300" />
                  <span className="text-white text-[12px] font-bold" style={{ fontFamily: '"Sk Modernist", sans-serif' }}>
                    {step.label}
                  </span>
                </div>
                <div className="relative w-full" style={{ aspectRatio: "357/208" }}>
                  <Image src={step.image} alt={step.label} fill sizes="360px" className="object-cover rounded-b-[8px]" />
                </div>
              </div>
              <p className="text-neutral-400 text-[18px] font-bold leading-normal">{step.caption}</p>
            </div>
          ))}
        </div>

        {/* Mobile View: Infinite Scroll Marquee */}
        <div
          ref={stepsScroll?.scrollRef}
          onMouseEnter={() => stepsScroll?.setIsPaused(true)}
          onMouseLeave={() => stepsScroll?.setIsPaused(false)}
          onTouchStart={() => stepsScroll?.setIsPaused(true)}
          onTouchEnd={() => stepsScroll?.setIsPaused(false)}
          className="flex md:hidden w-full overflow-x-auto gap-6 pb-8 px-4 hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {[...steps, ...steps].map((step, i) => (
            <div key={`${step.label}-${i}`} className="flex-none w-[85vw] max-w-[350px] flex flex-col gap-[19px]">
              <div className="bg-[rgba(34,34,34,0.6)] rounded-[8px] overflow-hidden">
                <div className="flex items-center gap-[7px] px-4 py-[10px]">
                  <div className="w-[14px] h-[13px] rounded-full bg-neutral-300" />
                  <div className="w-[14px] h-[13px] rounded-full bg-neutral-300" />
                  <span className="text-white text-[12px] font-bold" style={{ fontFamily: '"Sk Modernist", sans-serif' }}>
                    {step.label}
                  </span>
                </div>
                <div className="relative w-full" style={{ aspectRatio: "357/208" }}>
                  <Image src={step.image} alt={step.label} fill sizes="85vw" className="object-cover rounded-b-[8px]" />
                </div>
              </div>
              <p className="text-neutral-400 text-[16px] font-bold leading-normal px-2">{step.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. "The paradigm shift" */}
      <section className="relative z-10 mt-24 md:mt-32 px-4 text-center">
        <h2 className="text-gradient-primary font-bold text-[40px] md:text-[56px] leading-[1.1] md:leading-[1.2] inline-block">
          The paradigm shift
        </h2>
      </section>

      {/* 11. Comparison: Every other computer vs The computer just grew up */}
      <section className="relative z-10 mt-16 md:mt-[128px] px-4 md:px-8 max-w-[1300px] mx-auto w-full">
        {/* Responsive gap to fit perfectly in 1300px */}
        <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-20 items-center lg:items-start justify-center w-full">

          {/* Left Column: THE OLD WAY */}
          {/* Changed from strict max-w to flex-1 to allow fluid scaling */}
          <div className="flex flex-col w-full flex-1 max-w-[600px] lg:max-w-none mb-16 lg:mb-0">
            <div className="flex flex-col gap-[7px]">
              <div className="flex flex-col gap-[12px]">
                <p className="text-neutral-400 text-[14px] font-bold leading-normal">THE OLD WAY</p>
                <h3 className="text-gradient-primary font-bold text-[40px] lg:text-[48px] xl:text-[56px] leading-[1.1] md:leading-[1.05] tracking-[-1px]">
                  Every other<br className="hidden md:block" />computer.
                </h3>
              </div>
              <p className="text-neutral-400 text-[14px] font-bold leading-normal mt-2 max-w-[416px]">
                One screen. One cursor. One app you can really use at a time. Everything else queues, waits, or freezes.
              </p>
            </div>

            {/* MacBook Mockup */}
            <div className="mt-9 bg-neutral-800 rounded-[8px] overflow-hidden">
              <div className="h-[33px] bg-transparent flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-white text-[12px] font-bold ml-1">every other computer</span>
              </div>
              <div className="relative w-full aspect-[481/307] overflow-hidden rounded-b-[8px]">
                <Image
                  src="/images/old-way-macbook.png"
                  alt="Every other computer mockup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover rounded-b-[10px]"
                />
              </div>
            </div>

            {/* The Old Way Icon List */}
            <div className="mt-4 bg-neutral-800 rounded-[12px] p-6 md:px-8 xl:px-10 md:py-[17px]">
              <div className="flex flex-col sm:flex-row gap-6 lg:gap-4 xl:gap-8 items-start sm:items-center">
                <div className="flex gap-[10px] items-center shrink-0">
                  <div className="bg-[rgba(105,105,105,0.5)] rounded-[4px] w-[33px] h-[33px] flex items-center justify-center">
                    <span className="text-white text-[18px]">⏱️</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-neutral-100 text-[14px] leading-normal font-bold">Running one at a time</p>
                    <p className="text-muted text-[12px] leading-normal">Everything else waits</p>
                  </div>
                </div>
                <div className="flex gap-[10px] items-center shrink-0">
                  <div className="bg-[rgba(105,105,105,0.5)] rounded-[4px] w-[33px] h-[33px] flex items-center justify-center">
                    <span className="text-white text-[18px]">⏱️</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-neutral-100 text-[14px] leading-normal font-bold">Waiting Queue</p>
                    <p className="text-muted text-[12px] leading-normal">Slow blocking limit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: INFINITY */}
          {/* Changed to flex-1 for fluid scaling */}
          <div className="flex flex-col w-full flex-1 max-w-[600px] lg:max-w-none">
            <div className="flex flex-col gap-[22px] mb-[22px]">
              <div className="flex flex-col gap-[12px]">
                <p className="text-accent text-[14px] font-bold leading-normal">INFINITY</p>
                <h3 className="text-gradient-primary font-bold text-[40px] lg:text-[48px] xl:text-[56px] leading-[1.1] md:leading-[1.05] tracking-[-1px]">
                  The computer<br className="hidden md:block" />just grew up.
                </h3>
              </div>
              <p className="text-neutral-400 text-[14px] font-bold leading-normal max-w-[450px]">
                Every app gets its own dedicated computer. They all run simultaneously. You — or your agents — work across all of them at once.
              </p>
            </div>

            {/* Infinity MacBook Mockup */}
            <div className="bg-neutral-800 rounded-[8px] overflow-hidden mb-[16px]">
              <div className="relative h-[37px] w-full flex items-center px-4 gap-[14px]">
                <div className="flex gap-1.5">
                  <div className="w-[11px] h-[11px] rounded-full bg-red-400" />
                  <div className="w-[11px] h-[11px] rounded-full bg-amber-400" />
                  <div className="w-[11px] h-[11px] rounded-full bg-green-500" />
                </div>
                <span className="text-white text-[12px] font-bold">infinity</span>
              </div>
              <div className="relative w-full aspect-[472/306] overflow-hidden rounded-b-[8px]">
                <Image
                  src="/images/infinity-macbook.png"
                  alt="Infinity computer mockup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Infinity Features Bar */}
            <div className="bg-neutral-800 rounded-[12px] w-full p-6 sm:px-8 xl:px-8 sm:py-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-4 lg:gap-2 xl:gap-4">
                <div className="flex items-center gap-[6px] shrink-0">
                  <div className="w-[36px] h-[36px] bg-[rgba(105,105,105,0.5)] rounded-[4px] flex items-center justify-center shrink-0">
                    <span className="text-white text-[18px]">⚡</span>
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-neutral-100 text-[12px] font-bold leading-normal">Runs in parallel</p>
                    <p className="text-neutral-400 text-[12px] leading-normal">All apps, always</p>
                  </div>
                </div>
                <div className="flex items-center gap-[6px] shrink-0">
                  <div className="w-[37px] h-[37px] bg-[rgba(105,105,105,0.5)] rounded-[4px] flex items-center justify-center shrink-0">
                    <span className="text-white text-[16px]">⚙️</span>
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-neutral-100 text-[12px] font-bold leading-normal">Dedicated compute</p>
                    <p className="text-neutral-400 text-[12px] leading-normal">No slowdown</p>
                  </div>
                </div>
                <div className="flex items-center gap-[6px] shrink-0">
                  <div className="w-[38px] h-[38px] flex items-center justify-center shrink-0">
                    <span className="text-accent text-[24px] font-bold">∞</span>
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-neutral-100 text-[12px] font-bold leading-normal">No Queue</p>
                    <p className="text-muted text-[12px] leading-normal">Freedom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. "What people are building" */}
      <section className="relative z-10 mt-24 md:mt-32 w-full max-w-[1300px] mx-auto flex flex-col items-center">
        <h2 className="text-gradient-primary font-bold text-[40px] md:text-[56px] leading-[1.1] md:leading-[1.2] text-center mb-10 md:mb-[80px] px-4">
          What people are<br className="hidden md:block" /> building
        </h2>

        {/* Desktop View: Accordion + Image */}
        <div className="hidden xl:flex flex-row gap-[90px] items-start justify-center w-full px-4">
          {/* Left: use-cases list (Accordion) */}
          <div className="flex flex-col gap-8 w-full max-w-[480px] shrink-0 mt-15">
            <div className="flex flex-col">
              {useCasesData.map((uc, i) => {
                const isOpen = activeCase === i;
                return (
                  <div key={uc.title} className="flex flex-col">
                    <div
                      className="flex items-center justify-between cursor-pointer py-[16px] group"
                      onClick={() => setActiveCase(isOpen ? null : i)}
                    >
                      <p className={`text-[18px] font-bold whitespace-nowrap transition-colors duration-200 ${isOpen ? 'text-white' : 'text-[#ddd] group-hover:text-white'}`}>
                        {uc.title}
                      </p>
                      <svg width="17" height="10" viewBox="0 0 17 10" fill="none" className={`transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}>
                        <path d="M1 1L8.5 8.5L16 1" stroke="#555" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[150px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                      <p className="text-muted text-[14px] leading-relaxed pr-8">{uc.description}</p>
                    </div>
                    {i < useCasesData.length - 1 && <div className="h-px w-full bg-[rgba(255,255,255,0.08)]" />}
                  </div>
                );
              })}
            </div>
            <div className="mt-2">
              <Button href="/use-cases" size="md">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right: macbook card */}
          <div className="relative shrink-0 w-full max-w-[751px] aspect-[751/495]">
            <div className="absolute inset-0 bg-[rgba(34,34,34,0.6)] rounded-[12px]" />
            <div className="absolute top-[12px] left-[15px] flex gap-1.5 z-20">
              <div className="w-[11px] h-[11px] rounded-full bg-red-400" />
              <div className="w-[11px] h-[11px] rounded-full bg-amber-400" />
              <div className="w-[11px] h-[11px] rounded-full bg-green-500" />
            </div>
            <div className="absolute left-[10px] right-[10px] top-[37px] bottom-[10px] bg-neutral-800 rounded-[8px] overflow-hidden">
              <div className="absolute inset-0 rounded-[8px] overflow-hidden">
                <Image
                  src={activeCase !== null ? useCasesData[activeCase].image : useCasesData[0].image}
                  alt="Use cases"
                  fill
                  sizes="730px"
                  className="object-cover rounded-[8px] transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Horizontal Infinite Carousel */}
        <div
          ref={useCasesScroll?.scrollRef}
          onMouseEnter={() => useCasesScroll.setIsPaused(true)}
          onMouseLeave={() => useCasesScroll.setIsPaused(false)}
          onTouchStart={() => useCasesScroll.setIsPaused(true)}
          onTouchEnd={() => useCasesScroll.setIsPaused(false)}
          className="flex xl:hidden w-full overflow-x-auto gap-4 pb-8 px-4 hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {[...useCasesData, ...useCasesData].map((uc, i) => (
            <div key={`${uc.title}-${i}`} className="flex-none w-[85vw] sm:w-[400px] bg-[rgba(34,34,34,0.6)] border border-white/5 rounded-[12px] flex flex-col overflow-hidden">
              <div className="relative aspect-[16/10] w-full">
                <Image src={uc.image} alt={uc.title} fill className="object-cover" sizes="(max-width: 768px) 85vw, 400px" />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1 bg-[#1a1a1a]">
                <h3 className="text-white text-[20px] font-bold">{uc.title}</h3>
                <p className="text-muted text-[14px] leading-relaxed flex-1">{uc.description}</p>
                <div className="pt-2">
                  <Button href="/use-cases" size="sm">Learn More</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 14. Pricing */}
      <section className="relative z-10 mt-24 px-4 max-w-[1300px] mx-auto">
        <h2 className="text-gradient-primary font-bold text-[40px] md:text-[56px] leading-[1.1] md:leading-[1.2] text-center mb-12">
          Pricing
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[23px] items-center justify-center">

          {/* Starter */}
          <div
            onClick={() => setActivePlan(0)}
            className={`pricing-card ${activePlan === 0 ? 'pricing-card-active' : 'pricing-card-inactive'}`}
          >
            <div className="flex flex-col gap-[16px]">
              <div className="flex gap-1.5 mb-2">
                <div className="w-[6px] h-[6px] rounded-full bg-neutral-300" />
                <div className="w-[6px] h-[6px] rounded-full bg-neutral-300" />
              </div>
              <p className="text-muted text-[20px] font-bold">Starter</p>
              <p className="text-accent-light text-[36px] font-bold leading-none">Free</p>
              <p className="text-dim text-[14px]">Forever. No card.</p>
              <div className="text-accent-light text-[24px] font-bold leading-tight mt-2">
                <p>10,000</p>
                <p>credits / month</p>
              </div>
              <ul className="list-disc text-muted text-[16px] pl-6 mt-2 space-y-1 marker:text-dim">
                <li><span className="leading-[1.6]">Single user</span></li>
                <li><span className="leading-[1.6]">Community support</span></li>
                <li><span className="leading-[1.6]">Standard cold starts</span></li>
                <li><span className="leading-[1.6]">Public app catalog</span></li>
              </ul>
            </div>
            <div className={`rounded-[4px] h-[51px] flex items-center justify-center transition-colors mt-6 ${activePlan === 0 ? 'pricing-btn-active' : 'pricing-btn-inactive'}`}>
              <span className="text-white text-[18px] font-medium">Get Started</span>
            </div>
          </div>

          {/* Pro */}
          <div
            onClick={() => setActivePlan(1)}
            className={`pricing-card ${activePlan === 1 ? 'pricing-card-active' : 'pricing-card-inactive'}`}
          >
            <div className="flex flex-col gap-[16px]">
              <div className="flex gap-1.5 mb-2">
                <div className="w-[6px] h-[6px] rounded-full bg-neutral-300" />
                <div className="w-[6px] h-[6px] rounded-full bg-neutral-300" />
              </div>
              <p className="text-muted text-[20px] font-bold">Pro</p>
              <p className="text-accent-light text-[36px] font-bold leading-none">$49</p>
              <p className="text-neutral-700 text-[14px]">Forever. No card.</p>
              <div className="text-accent-light text-[24px] font-bold leading-tight mt-2">
                <p>10,000</p>
                <p>credits / month</p>
              </div>
              <ul className="list-disc text-muted text-[16px] pl-6 mt-2 space-y-1 marker:text-dim">
                <li><span className="leading-[1.6]">Single user</span></li>
                <li><span className="leading-[1.6]">Priority support</span></li>
                <li><span className="leading-[1.6]">Fast cold starts</span></li>
                <li><span className="leading-[1.6]">Public app catalog</span></li>
              </ul>
            </div>
            <div className={`rounded-[4px] h-[51px] flex items-center justify-center transition-colors mt-6 ${activePlan === 1 ? 'pricing-btn-active' : 'pricing-btn-inactive'}`}>
              <span className="text-white text-[18px] font-medium">Start Pro trial</span>
            </div>
          </div>

          {/* Max */}
          <div
            onClick={() => setActivePlan(2)}
            className={`pricing-card ${activePlan === 2 ? 'pricing-card-active' : 'pricing-card-inactive'}`}
          >
            <div className="flex flex-col gap-[16px]">
              <div className="flex gap-1.5 mb-2">
                <div className="w-[6px] h-[6px] rounded-full bg-neutral-300" />
                <div className="w-[6px] h-[6px] rounded-full bg-neutral-300" />
              </div>
              <p className="text-muted text-[20px] font-bold">Max</p>
              <p className="text-accent-light text-[36px] font-bold leading-none">$99</p>
              <p className="text-neutral-700 text-[14px]">Forever. No card.</p>
              <div className="text-accent-light text-[24px] font-bold leading-tight mt-2">
                <p>Unlimited</p>
                <p>credits / month</p>
              </div>
              <ul className="list-disc text-muted text-[16px] pl-6 mt-2 space-y-1 marker:text-dim">
                <li><span className="leading-[1.6]">Team access</span></li>
                <li><span className="leading-[1.6]">Dedicated support</span></li>
                <li><span className="leading-[1.6]">Priority cold starts</span></li>
                <li><span className="leading-[1.6]">Private app catalog</span></li>
              </ul>
            </div>
            <div className={`rounded-[4px] h-[51px] flex items-center justify-center transition-colors mt-6 ${activePlan === 2 ? 'pricing-btn-active' : 'pricing-btn-inactive'}`}>
              <span className="text-white text-[18px] font-medium">Start Max trial</span>
            </div>
          </div>

        </div>
      </section>

      {/* 15. "Already running in production" logo bar */}
      <section className="relative z-10 mt-24 px-4 max-w-[1300px] mx-auto text-center">
        <div className="flex flex-col gap-6 md:gap-[36px] items-center w-full max-w-[905px] mx-auto">
          <p className="text-neutral-400 text-[16px] md:text-[20px] font-bold">Already running in production</p>
          <div className="flex flex-wrap gap-6 md:gap-[47px] items-center justify-center text-white text-[24px] md:text-[32px] font-bold">
            {["LOGO", "LOGO", "LOGO", "LOGO", "LOGO", "LOGO", "LOGO"].map((l, i) => (
              <span key={i} className="opacity-40">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 16. CTA */}
      <section className="relative z-10 mt-24 pb-24 px-4 text-center">
        <div className="flex flex-col gap-6 md:gap-[30px] items-center w-full max-w-[510px] mx-auto">
          <h2 className="text-gradient-primary font-bold text-[40px] md:text-[64px] leading-[1.1] md:leading-[80px]">
            The computer just grew up.
          </h2>
          <p className="text-neutral-500 text-[14px] md:text-[16px] font-bold">Start building on Infinity.</p>
          <Button href="/how-it-works" size="md">
            Try Infinity
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}