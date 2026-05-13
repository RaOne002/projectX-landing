import Image from "next/image";

interface MacbookMockupProps {
  src: string;
  alt?: string;
  label?: string;
  className?: string;
}

export default function MacbookMockup({
  src,
  alt = "",
  label,
  className = "",
}: MacbookMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Window chrome */}
      <div className="bg-[rgba(34,34,34,0.6)] rounded-[8px] overflow-hidden">
        {/* Title bar */}
        <div className="bg-[rgba(79,79,79,0.61)] h-[33px] flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          {label && (
            <span className="text-white text-xs font-bold ml-2">{label}</span>
          )}
        </div>
        {/* Screen */}
        <div className="relative w-full overflow-hidden rounded-b-[4px]">
          <Image
            src={src}
            alt={alt}
            width={1069}
            height={610}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
