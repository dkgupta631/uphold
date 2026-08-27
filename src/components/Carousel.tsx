"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * 260, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-1"
      >
        {children}
      </div>
      <div className="hidden sm:flex items-center gap-2 mt-4">
        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          className="flex items-center justify-center w-9 h-9 rounded-full border border-neutral-700 text-neutral-400 hover:text-base-white hover:border-neutral-500 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          className="flex items-center justify-center w-9 h-9 rounded-full border border-neutral-700 text-neutral-400 hover:text-base-white hover:border-neutral-500 transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
