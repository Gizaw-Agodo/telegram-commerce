"use client"

import { Plus } from "lucide-react";

interface CreateShopCardProps {
  onClick: () => void;
}

export function CreateShopCard({
  onClick,
}: CreateShopCardProps) {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        rounded-2xl
        border-2
        border-dashed
        border-primary/30
        bg-primary/5
        p-6
        transition-all
        hover:border-primary
        hover:bg-primary/10
        active:scale-[0.98]
        hover:cursor-pointer
      "
    >
      <div className="flex flex-col items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground ">
          <Plus className="h-6 w-6" />
        </div>

        <div className="space-y-1">
          <h2 className="text-lg font-semibold">
            Create New Shop
          </h2>

          <p className="text-sm text-muted-foreground">
            Start selling on Telegram in just a few steps.
          </p>
        </div>
      </div>
    </button>
  );
}