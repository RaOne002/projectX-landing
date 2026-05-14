import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-8 px-6 relative overflow-hidden flex flex-col items-center border-t border-[rgba(255,255,255,0.05)]">
      
      {/* Top Section: Info & Links */}
      <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-0 z-10 relative">
        
        {/* Left Side: Logo & Info */}
        <div className="flex flex-col max-w-[600px]">
          <div className="flex items-center gap-2">
            <span className="text-white text-[40px] font-bold tracking-tight">infinity</span>
            <div className="relative w-[45px] h-[45px]">
              <Image 
                src="/images/Vector.svg" 
                alt="Infinity Logo" 
                fill 
                sizes="45px" // <-- ADDED THIS to fix the warning
                className="object-contain" 
              />
            </div>
          </div>
          <p className="text-[#b4dad1] text-[18px] leading-[1.4] mt-6 font-medium tracking-wide">
            Infinity by ProjectX.<br/>
            Made in San Francisco. YC P26.
          </p>
        </div>

        {/* Right Side: Link Columns */}
        <div className="flex flex-wrap md:flex-nowrap gap-16 md:gap-24 pr-[1px]">
          {/* Product */}
          <div className="flex flex-col">
            <h4 className="text-neutral-400 text-[14px] font-medium mb-4">Product</h4>
            <Link href="#" className="text-white text-[14px] mb-3 hover:text-emerald-300 transition-colors">Overview</Link>
            <Link href="#" className="text-white text-[14px] mb-3 hover:text-emerald-300 transition-colors">For agents</Link>
            <Link href="#" className="text-white text-[14px] mb-3 hover:text-emerald-300 transition-colors">For developers</Link>
            <Link href="#" className="text-white text-[14px] mb-3 hover:text-emerald-300 transition-colors">Pricing</Link>
          </div>

          {/* Resources */}
          <div className="flex flex-col">
            <h4 className="text-neutral-400 text-[14px] font-medium mb-4">Resources</h4>
            <Link href="#" className="text-white text-[14px] mb-3 hover:text-emerald-300 transition-colors">Docs</Link>
            <Link href="#" className="text-white text-[14px] mb-3 hover:text-emerald-300 transition-colors">API</Link>
            <Link href="#" className="text-white text-[14px] mb-3 hover:text-emerald-300 transition-colors">Changelog</Link>
            <Link href="#" className="text-white text-[14px] mb-3 hover:text-emerald-300 transition-colors">Status</Link>
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <h4 className="text-neutral-400 text-[14px] font-medium mb-4">Company</h4>
            <Link href="#" className="text-white text-[14px] mb-3 hover:text-emerald-300 transition-colors">About</Link>
            <Link href="#" className="text-white text-[14px] mb-3 hover:text-emerald-300 transition-colors">Blog</Link>
            <Link href="#" className="text-white text-[14px] mb-3 hover:text-emerald-300 transition-colors">Contact</Link>
            <Link href="#" className="text-white text-[14px] mb-3 hover:text-emerald-300 transition-colors">Careers</Link>
          </div>
        </div>
      </div>

      {/* Middle Section: Giant 3D Image */}
      {/* We use a container with a fixed height and overflow-hidden to crop the bottom off. 
          The translate-y pushes the image down so it looks embedded. */}
      <div className="w-full mt-12 sm:mt-8 mb-5 flex justify-center items-end pointer-events-none select-none overflow-hidden h-[180px] sm:h-[350px] lg:h-[450px] relative z-0">
        <div className="relative w-[120%] sm:w-full max-w-[1300px] h-full translate-y-[20%] sm:translate-y-[15%] opacity-90">
          <Image 
            src="/images/infinity.png" 
            alt="infinity 3D text background" 
            fill 
            sizes="(max-width: 1600px) 100vw, 1600px" // Also added this to prevent warnings on your big image!
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="w-full text-center mt-6 sm:-mt-6 pt-12 relative z-10">
        <p className="text-neutral-500 text-[20px] font-medium pr-1">
          © 2026 ProjectX Technologies, Inc.
        </p>
      </div>

    </footer>
  );
}