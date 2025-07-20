import React from "react";
import { FilterCheckbox } from "./filter-checkbox";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('flex flex-col gap-4', className)}>
            <h2 className="text-2xl font-bold">Фильтрация</h2>
            <div className="flex flex-col gap-4">
                <FilterCheckbox text='Можно собирать' value='1' />
                <FilterCheckbox text='Новинки' value='2' />
            </div>
        </div>
    )
}