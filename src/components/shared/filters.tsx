import React from "react";
import { FilterCheckbox } from "./filter-checkbox";
import { cn } from "@/lib/utils";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <h2 className="text-2xl font-bold">Filtration</h2>

      {/* Top filters */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="You can assemble" value="1" />
        <FilterCheckbox text="New items" value="2" />
      </div>

      {/* Pricing filters */}
      <div className="flex flex-col gap-4 my-4 py-4 border-y border-gray-200">
        <h3 className="text-xl font-semibold">Price from and to:</h3>
        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={50}
            defaultValue={0}
          />
          <Input type="number" placeholder="50" min={10} max={50} />
        </div>
        <RangeSlider min={0} max={50} step={1} value={[0, 50]} />
      </div>

      {/* Bottom filters */}
    </div>
  );
};
