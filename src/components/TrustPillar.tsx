import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface TrustPillarProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export default function TrustPillar({ icon: Icon, title, description, href }: TrustPillarProps) {
  return (
    <div className="flex flex-col items-start">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 mb-5">
        <Icon size={22} className="text-primary-dark" strokeWidth={1.75} />
      </div>
      <h3 className="text-h4 font-semibold text-base-white mb-2">{title}</h3>
      <p className="text-body1 text-neutral-400">{description}</p>
      {href && (
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-1.5 text-body1 font-medium text-primary-dark hover:gap-2.5 transition-all"
        >
          Learn more
          <ArrowRight size={15} />
        </Link>
      )}
    </div>
  );
}
