import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  size?: "sm" | "md" | "lg";
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  size = "md",
}: ButtonProps) {
  const sizeClasses = {
    sm: "h-[26px] px-[10px] text-[12px]",
    md: "h-[36px] px-[10px] text-[12px]",
    lg: "h-[51px] px-[17px] text-[20px]",
  };

  const variantClasses = {
    primary:
      "bg-white text-black border border-transparent hover:bg-black hover:text-white hover:border-white",
    ghost:
      "bg-black text-white border border-white hover:bg-white hover:text-black",
  };

  const classes = `inline-flex w-fit items-center gap-[8px] rounded-[4px] font-normal transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const arrow = <ArrowRight />;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {arrow}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {arrow}
    </button>
  );
}
