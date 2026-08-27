import { cn } from "@/lib/utils";

interface StatCalloutProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatCallout({ value, label, className }: StatCalloutProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span className="text-h2 sm:text-h1 font-semibold text-primary-dark">{value}</span>
      <span className="text-body1 text-neutral-400 mt-1">{label}</span>
    </div>
  );
}
