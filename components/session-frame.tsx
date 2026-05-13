import Image from "next/image";

export default function SessionFrame() {
  return (
    <div className="w-full mx-auto rounded-[12px] bg-[rgba(34,34,34,0.6)] border border-white/5 shadow-2xl overflow-hidden">
      
      {/* ── Title Bar ── */}
      <div className="bg-[rgba(44,44,44,0.61)] h-[36px] flex items-center px-4 gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-white/80 text-[12px] font-bold ml-2">demo</span>
      </div>

      {/* ── Screen Content ── */}
      <div className="relative w-full aspect-[16/10] md:aspect-[1069/610] bg-[#101918] overflow-hidden">
        
        {/* Desktop Wallpaper */}
        <Image
          src="/images/session-bg-abstract.png" 
          alt="Desktop Wallpaper"
          fill
          sizes="(max-width: 768px) 100vw, 1200px" // Added sizes here for the big background
          className="object-cover object-center opacity-80"
        />

        {/* ── Central Elements (Search + LOREM) ── */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[90%] md:w-[60%] max-w-[665px] flex flex-col gap-4 md:gap-6 pointer-events-none">
          
          {/* Search Bar */}
          <div className="w-full bg-black/50 backdrop-blur-xl rounded-[16px] h-[50px] md:h-[60px] flex items-center justify-between px-4 md:px-6 shadow-[0_25px_50px_-12px_rgba(249,115,22,0.05)] border border-white/5 pointer-events-auto">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="relative w-5 h-5 md:w-6 md:h-6">
                {/* Added sizes="24px" for small icon */}
                <Image src="/images/session-icon-plus.png" alt="Add" fill sizes="24px" className="object-contain" />
              </div>
              <span className="text-white/50 font-mono text-sm md:text-base">Ask Guddu...</span>
            </div>
            <div className="relative w-5 h-5 md:w-6 md:h-6">
              {/* Added sizes="24px" for small icon */}
              <Image src="/images/session-icon-mic.png" alt="Mic" fill sizes="24px" className="object-contain" />
            </div>
          </div>

          {/* LOREM Buttons */}
          <div className="flex items-center justify-between gap-3 md:gap-4 pointer-events-auto">
            {[1, 2, 3, 4].map((i) => (
              <button
                key={i}
                className="flex-1 bg-black/50 backdrop-blur-xl rounded-[12px] md:rounded-[16px] h-[40px] md:h-[48px] flex items-center justify-center border border-white/5 hover:bg-white/10 transition shadow-[0_25px_50px_-12px_rgba(249,115,22,0.05)]"
              >
                <span className="text-white font-mono text-xs md:text-sm">LOREM</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Bottom Taskbar Area ── */}
        <div className="absolute bottom-4 md:bottom-8 left-0 w-full px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 pointer-events-none">

          {/* Left: COMPLETED Badge */}
          <div className="hidden sm:flex bg-black/50 backdrop-blur-xl rounded-[12px] md:rounded-[16px] border border-white/5 px-4 md:px-5 py-2.5 md:py-3 items-center gap-3 shadow-[0_25px_50px_-12px_rgba(249,115,22,0.05)] pointer-events-auto">
            <div className="relative w-5 h-5 md:w-6 md:h-6">
              {/* Added sizes="24px" for small icon */}
              <Image src="/images/session-completed-vector.png" alt="Completed" fill sizes="24px" className="object-contain" />
            </div>
            <span className="text-white font-mono text-xs md:text-sm tracking-wide">COMPLETED</span>
          </div>

          {/* Center: App Dock */}
          <div className="bg-black/50 backdrop-blur-xl rounded-[16px] md:rounded-[20px] border border-white/5 px-4 md:px-6 py-2.5 md:py-3 flex items-center gap-3 md:gap-5 shadow-[0_25px_50px_-12px_rgba(249,115,22,0.05)] pointer-events-auto">
            {/* Menu Icon */}
            <div className="relative w-7 h-7 md:w-9 md:h-9 hover:scale-105 transition cursor-pointer">
              {/* Added sizes="36px" for small icon */}
              <Image src="/images/session-icon-menu.png" alt="Menu" fill sizes="36px" className="object-contain" />
            </div>

            {/* Divider */}
            <div className="w-[1px] h-6 md:h-8 bg-white/10 mx-1" />

            {/* App Icons */}
            {[
              { src: "/images/session-icon-chrome.png", active: true },
              { src: "/images/session-icon-gimp.png", active: false },
              { src: "/images/session-icon-files.png", active: true },
              { src: "/images/session-icon-vscode.png", active: true },
              { src: "/images/session-icon-folder.png", active: false },
              { src: "/images/session-icon-terminal.png", active: true },
            ].map((app, i) => (
              <div key={i} className="flex flex-col items-center justify-between h-9 md:h-11 cursor-pointer group">
                <div className="relative w-7 h-7 md:w-8 md:h-8 group-hover:-translate-y-1 transition-transform duration-200">
                  {/* Added sizes="32px" for small icons */}
                  <Image src={app.src} alt="App" fill sizes="32px" className="object-contain" />
                </div>
                {/* Green Active Indicator */}
                <div className={`w-3 md:w-5 h-[2px] rounded-full transition-colors ${app.active ? 'bg-[#00BF8F]' : 'bg-transparent'}`} />
              </div>
            ))}
          </div>

          {/* Right: System Tray */}
          <div className="hidden sm:flex bg-black/50 backdrop-blur-xl rounded-[12px] md:rounded-[16px] border border-white/5 px-4 md:px-5 py-2.5 md:py-3 items-center gap-4 shadow-[0_25px_50px_-12px_rgba(249,115,22,0.05)] pointer-events-auto">
            <div className="flex items-center gap-3">
              <div className="relative w-4 h-4 opacity-80">
                {/* Added sizes="16px" for tiny tray icons */}
                <Image src="/images/session-icon-wifi.png" alt="WiFi" fill sizes="16px" className="object-contain" />
              </div>
              <div className="relative w-4 h-4 opacity-80">
                <Image src="/images/session-icon-volume.png" alt="Volume" fill sizes="16px" className="object-contain" />
              </div>
              <div className="relative w-4 h-4 opacity-80">
                <Image src="/images/session-icon-battery.png" alt="Battery" fill sizes="16px" className="object-contain" />
              </div>
            </div>
            <div className="flex flex-col items-end text-white font-mono leading-none">
              <span className="text-xs md:text-[13px] mb-1">22:10</span>
              <span className="text-[9px] md:text-[10px] text-white/60">10-04-2026</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}