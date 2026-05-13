"use client";

import { useState } from "react";
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

// Hamburger Icon for Mobile
function MenuIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}

// Close Icon for Mobile
function CloseIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="relative md:fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10 py-6 lg:py-[39px]">
      
      {/* Logo */}
      <Link href="/" className="shrink-0 hover:opacity-80 transition-opacity text-white" aria-label="Infinity by ProjectX">
        <div className="scale-50 md:scale-100 origin-left">
          <ProjectXLogo width={54} height={46} />
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden xl:flex bg-[rgba(34,34,34,0.6)] backdrop-blur-sm items-center gap-[35px] 2xl:gap-[45px] px-[10px] py-[8px] rounded-[12px] overflow-hidden border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[14px] 2xl:text-[16px] uppercase tracking-[0.33px] leading-[25px] transition-colors ${
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
          className="flex items-center gap-[10px] bg-[#e6eefa] text-black text-[16px] px-[16px] h-[40px] rounded-[6px] font-medium shadow-[inset_0px_1px_3px_0px_rgba(178,178,178,0.25),inset_0px_-1px_3px_0px_#b2b2b2] hover:bg-white transition-colors"
        >
          LOGIN
          <ArrowRight />
        </Link>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <button 
        className="xl:hidden text-white p-2 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1c1c1c]/95 backdrop-blur-lg border-b border-white/10 shadow-2xl xl:hidden flex flex-col px-6 py-8 gap-6 animate-in slide-in-from-top-2 fade-in duration-200">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`text-[18px] uppercase tracking-[0.33px] transition-colors border-b border-white/5 pb-4 ${
                    isActive
                      ? "text-white font-bold"
                      : "text-[#cbcbcb] font-normal hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          
          <Link
            href="/login"
            onClick={closeMenu}
            className="flex items-center justify-center gap-[10px] bg-[#e6eefa] text-black text-[18px] w-full py-[14px] rounded-[6px] font-medium shadow-[inset_0px_1px_3px_0px_rgba(178,178,178,0.25),inset_0px_-1px_3px_0px_#b2b2b2] hover:bg-white transition-colors mt-2"
          >
            LOGIN
            <ArrowRight />
          </Link>
        </div>
      )}
    </header>
  );
}