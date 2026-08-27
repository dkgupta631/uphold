import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "outline";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: "md" | "lg";
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-dark text-neutral-900 hover:brightness-110 border border-transparent",
  ghost:
    "bg-transparent text-current hover:bg-white/10 border border-transparent",
  outline:
    "bg-transparent text-current border border-neutral-600 hover:border-neutral-400",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  showArrow = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-pill font-medium transition-all duration-200 ease-out hover:scale-[1.02] active:scale-[0.99]",
    size === "lg" ? "px-7 py-3.5 text-[16px]" : "px-5 py-2.5 text-[14px]",
    variantClasses[variant],
    className
  );

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight size={16} strokeWidth={2.25} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
