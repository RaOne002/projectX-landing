"use client";

import { useState } from "react";
import Image from "next/image";

// Data for our interactive calculator
const APP_CATALOG = [
  { id: "terminal", name: "Terminal", rate: 120, color: "bg-[#1E1E1E]", icon: "/images/logos/terminal.svg" },
  { id: "vscode", name: "VS Code", rate: 120, color: "bg-[#0066B8]/20", icon: "/images/logos/vscode.svg" },
  { id: "blender", name: "Blender", rate: 960, color: "bg-[#EA7600]/20", icon: "/images/logos/blender.svg" },
  { id: "davinci", name: "DaVinci Resolve", rate: 1200, color: "bg-[#D83B01]/20", icon: "/images/logos/davinci-resolve.svg" },
  { id: "pytorch", name: "PyTorch", rate: 2400, color: "bg-[#EE4C2C]/20", icon: "/images/logos/pytorch.svg" },
  { id: "isaac", name: "Isaac Sim", rate: 4800, color: "bg-[#76B900]/20", icon: "/images/logos/isaac.svg" },
];

const TIERS = [
  { id: "standard", name: "Standard", multiplier: 1 },
  { id: "pro", name: "Pro", multiplier: 1.5 },
  { id: "max", name: "Max", multiplier: 2.5 },
];

export default function EstimateCalculator() {
  // --- State ---
  const [hours, setHours] = useState(20);
  const [selectedApps, setSelectedApps] = useState(["terminal", "blender"]); // Default selected
  const [activeTier, setActiveTier] = useState(0); // 0 = Standard, 1 = Pro, 2 = Max

  // --- Logic ---
  const toggleApp = (id: string) => {
    if (selectedApps.includes(id)) {
      setSelectedApps(selectedApps.filter((appId) => appId !== id));
    } else {
      setSelectedApps([...selectedApps, id]);
    }
  };

  // Calculate Base Rate (Sum of selected apps)
  const baseRate = selectedApps.reduce((sum, appId) => {
    const app = APP_CATALOG.find((a) => a.id === appId);
    return sum + (app ? app.rate : 0);
  }, 0);

  // Calculate Total
  const multiplier = TIERS[activeTier].multiplier;
  const totalCredits = baseRate * hours * multiplier;

  // Max visual scale for the progress bar (arbitrary high number for visuals)
  const maxPossibleCredits = 4800 * 6 * 160 * 2.5; 
  const progressPercent = Math.min((totalCredits / maxPossibleCredits) * 100 + 5, 100);

  return (
    <section className="relative py-24 px-6 w-full max-w-[1600px] mx-auto z-10">
      <div className="flex flex-col gap-2 mb-10 text-center md:text-left">
        <span className="text-emerald-300 text-xs font-mono tracking-widest uppercase">
          03 · Calculator
        </span>
        <h2 className="text-gradient-primary text-[32px] md:text-[48px] font-bold leading-tight">
          Estimate your month.
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* ── Left Panel: Inputs ── */}
        <div className="flex-[1.3] bg-neutral-800/80 backdrop-blur-md rounded-[12px] p-6 md:p-10 border border-white/5 flex flex-col gap-8 shadow-2xl">
          
          {/* Slider */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <span className="text-neutral-400 text-[16px]">Hours / month</span>
              <span className="text-[#DEECE6] text-[24px] font-bold">
                {hours}
                <span className="text-neutral-400 text-[14px] font-normal ml-1">h</span>
              </span>
            </div>
            
            {/* Custom Interactive Slider */}
            <div className="relative w-full h-[6px] bg-white/10 rounded-full mt-2">
              <div 
                className="absolute top-0 left-0 h-full bg-[#00BF8F] rounded-full pointer-events-none" 
                style={{ width: `${(hours / 160) * 100}%` }} 
              />
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-[16px] h-[16px] bg-[#00BF8F] rounded-full shadow-[0_0_10px_rgba(0,191,143,0.5)] pointer-events-none" 
                style={{ left: `calc(${(hours / 160) * 100}% - 8px)` }} 
              />
              <input 
                type="range" 
                min="1" 
                max="160" 
                value={hours} 
                onChange={(e) => setHours(Number(e.target.value))} 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
              />
            </div>
          </div>

          {/* Apps Selection */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <span className="text-neutral-400 text-[16px]">Apps</span>
              <span className="text-neutral-400 text-[12px] font-mono">{selectedApps.length} selected</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {APP_CATALOG.map((app) => {
                const isActive = selectedApps.includes(app.id);
                return (
                  <div 
                    key={app.id} 
                    onClick={() => toggleApp(app.id)}
                    className={`border rounded-[4px] p-3 flex items-center gap-3 transition-all cursor-pointer ${
                      isActive 
                        ? "bg-white/5 border-[#00BF8F]/50 opacity-100 shadow-[0_0_15px_rgba(0,191,143,0.1)]" 
                        : "bg-white/5 border-transparent opacity-50 hover:opacity-80"
                    }`}
                  >
                    <div className={`relative w-10 h-10 rounded-[4px] flex items-center justify-center overflow-hidden ${app.color}`}>
                      {/* Only renders image if you have the SVGs uploaded, otherwise falls back to the color block */}
                      <Image src={app.icon} alt={app.name} fill className="object-contain p-2" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-[14px]">{app.name}</span>
                      <span className="text-[#00BF8F] text-[11px] font-bold">{app.rate.toLocaleString()}/h</span>
                    </div>
                    
                    {/* Checkbox Graphic */}
                    <div className={`ml-auto w-5 h-5 rounded-[3px] border flex items-center justify-center transition-colors ${
                      isActive ? "border-[#00BF8F] bg-[#00BF8F]/20" : "border-white/20 bg-transparent"
                    }`}>
                      {isActive && <div className="w-2.5 h-2.5 bg-[#00BF8F] rounded-[1px]" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tier Selection */}
          <div className="flex flex-wrap gap-3 mt-4">
            {TIERS.map((t, index) => (
              <button 
                key={t.id}
                onClick={() => setActiveTier(index)}
                className={`flex-1 font-medium py-3 rounded-[4px] transition-all duration-300 ${
                  activeTier === index 
                    ? "bg-white text-black shadow-lg scale-[1.02]" 
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>

        {/* ── Right Panel: Output ── */}
          <div className="flex-1 bg-neutral-800/80 backdrop-blur-md rounded-[12px] p-6 md:p-10 border border-white/5 flex flex-col shadow-2xl relative overflow-hidden">
            
            {/* Faint Glow effect behind the number */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00BF8F] rounded-full blur-[120px] opacity-10 pointer-events-none" />

            <span className="text-neutral-400 text-[14px] font-bold tracking-wider mb-2 relative z-10">ESTIMATE</span>
            
            <div className="text-[#DBFFF6] text-[56px] md:text-[64px] font-bold leading-none mb-1 tracking-tight relative z-10 drop-shadow-[0_0_15px_rgba(219,255,246,0.1)]">
              {totalCredits.toLocaleString()}
            </div>
            <div className="text-neutral-400 text-[14px] mb-8 relative z-10">
              Credits / month
            </div>

            <div className="mt-auto relative z-10 w-full">
              
              {/* Premium Glowing Progress Bar Divider */}
              <div className="relative w-full h-[2px] bg-white/5 rounded-full mb-6 overflow-visible">
                <div 
                  className="absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-out" 
                  style={{ 
                    width: `${progressPercent}%`,
                    background: 'linear-gradient(90deg, transparent 0%, #00BF8F 100%)',
                    boxShadow: '0 0 15px rgba(0, 191, 143, 0.6)'
                  }}
                >
                  {/* Glowing tip */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-white rounded-full shadow-[0_0_10px_#fff]" />
                </div>
              </div>

              {/* Terminal-Style Breakdown Box */}
              <div className="bg-[#101010]/80 border border-white/5 rounded-[8px] p-4 md:p-5 shadow-inner">
                {/* Mini Terminal Header */}
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                  <span className="text-emerald-300 text-[10px] font-mono uppercase tracking-widest ml-1">Calculation</span>
                </div>
                
                {/* Math Readout */}
                <div className="flex flex-col gap-2.5 font-mono text-[12px] md:text-[13px]">
                  <div className="flex items-start gap-3">
                    <span className="text-[#00BF8F] opacity-70">{`>`}</span>
                    <span className="text-neutral-400">
                      <span className="text-white font-medium">{baseRate.toLocaleString()}</span> cr/h (base rate)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#00BF8F] opacity-70">{`>`}</span>
                    <span className="text-neutral-400 leading-relaxed">
                      <span className="text-white font-medium">× {selectedApps.length}</span> apps 
                      <span className="text-white font-medium"> × {hours}</span>h 
                      <span className="text-white font-medium"> × {multiplier}</span> tier
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

      </div>
    </section>
  );
}