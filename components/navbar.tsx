"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ProjectXLogo from "@/components/icons/ProjectXLogo";

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const navLinks = [
  { label: "HOW IT WORKS", href: "/how-it-works" },
  { label: "USE CASES", href: "/use-cases" },
  { label: "FOR AGENTS", href: "/for-agents" },
  { label: "BLOG", href: "/blog" },
  { label: "PRICING", href: "/pricing" },
  { label: "DOCS", href: "/docs" },
];


export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-[39px]">
      <Link href="/" className="shrink-0 hover:opacity-80 transition-opacity text-white" aria-label="Infinity by ProjectX">
        <ProjectXLogo width={74} height={66} />
      </Link>

      <nav className="bg-[rgba(34,34,34,0.6)] backdrop-blur-sm flex items-center gap-[45px] px-[10px] py-[8px] rounded-[12px] overflow-hidden border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              // Increased text size, tracking, and leading
              className={`text-[16px] uppercase tracking-[0.33px] leading-[25px] transition-colors ${
                isActive
                  ? "text-white font-bold"
                  : "text-[#cbcbcb] font-normal hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          );
        })}

        <Link
          href="/login"
          // Increased gap, text size, px, h, and rounded values
          className="flex items-center gap-[10px] bg-[#e6eefa] text-black text-[16px] px-[16px] h-[40px] rounded-[6px] font-medium shadow-[inset_0px_1px_3px_0px_rgba(178,178,178,0.25),inset_0px_-1px_3px_0px_#b2b2b2] hover:bg-white transition-colors"
        >
          LOGIN
          <ArrowRight />
        </Link>
      </nav>
    </header>
  );
}
