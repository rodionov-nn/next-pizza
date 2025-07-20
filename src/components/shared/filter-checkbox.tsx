import React from "react";
import { Checkbox } from "../ui";

export interface FilterCheckboxProps {
    text: string;
    value: string;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
    text,
    value,
    endAdornment,
    onCheckedChange,
    checked,
}) => {
    return (
        <div className="flex items-center space-x-2 select-none">
            <Checkbox 
            onCheckedChange={onCheckedChange}
            checked={checked}
            value={value}
            className="rounded-md size-6 cursor-pointer bg-gray-100 border-gray-200"
            id={`checkbox-${String(value)}`}/>
            <label htmlFor={`checkbox-${String(value)}`} className="leading-none cursor-pointer flex-1">
                {text}
            </label>
            {endAdornment}
        </div>
    );
};