"use client";

import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  value: number;
  onChange: (quantity: number) => void;
}

export function QuantitySelector({
  value,
  onChange,
}: QuantitySelectorProps) {
  const decrease = () => {
    onChange(Math.max(1, value - 1));
  };

  const increase = () => {
    onChange(value + 1);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={decrease}
        className="flex h-10 w-10 items-center justify-center rounded-full border hover:cursor-pointer"
      >
        <Minus size={18} />
      </button>

      <span className="w-6 text-center font-semibold">
        {value}
      </span>

      <button
        type="button"
        onClick={increase}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:cursor-pointer"
      >
        <Plus size={18} />
      </button>
    </div>
  );
}