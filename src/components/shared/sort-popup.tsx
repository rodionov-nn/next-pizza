import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 bg-gray-100 px-5 py-3 rounded-2xl cursor-pointer select-none",
        className
      )}
    >
      <ArrowUpDown />
      <p>Sort by:</p>
      <p className="text-primary">Popular</p>
    </div>
  );
};
