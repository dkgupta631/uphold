import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  className?: string;
  light?: boolean;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  linkLabel = "Learn more",
  className,
  light = false,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-7 border transition-colors",
        light
          ? "bg-base-white border-neutral-200"
          : "bg-neutral-800 border-neutral-700 hover:border-neutral-600",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center justify-center w-11 h-11 rounded-full mb-5",
          light ? "bg-[#EAF9EC]" : "bg-neutral-700"
        )}
      >
        <Icon size={20} className="text-primary-light" strokeWidth={1.75} />
      </div>
      <h3 className={cn("text-h4 font-semibold mb-2", light ? "text-neutral-900" : "text-base-white")}>
        {title}
      </h3>
      <p className={cn("text-body1", light ? "text-neutral-900/70" : "text-neutral-400")}>
        {description}
      </p>
      {href && (
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-1.5 text-body1 font-medium text-primary-light hover:gap-2.5 transition-all"
        >
          {linkLabel}
          <ArrowRight size={15} />
        </Link>
      )}
    </div>
  );
}
