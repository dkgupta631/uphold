"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  question: string;
  answer: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-neutral-800 border-y border-neutral-800">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-h4 font-medium text-base-white">{item.question}</span>
              <ChevronDown
                size={20}
                className={cn(
                  "shrink-0 text-neutral-400 transition-transform duration-200",
                  isOpen && "rotate-180 text-primary-dark"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 text-body1 text-neutral-400 max-w-3xl">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
