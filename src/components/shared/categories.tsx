import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

const cats = ["Пиццы", "Комбо", "Закуски", "Коктейли", "Кофе", "Десерты"];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-100 p-1 rounded-2xl", className)}
    >
      {cats.map((cat, index) => (
        <a
          key={index}
          className={cn("flex items-center font-medium rounded-2xl px-5 py-2", activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary')}
        >
            <button className="cursor-pointer">{cat}</button>
        </a>
      ))}
    </div>
  );
};
