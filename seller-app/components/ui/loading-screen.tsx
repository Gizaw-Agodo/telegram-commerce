"use client";

import { ShoppingCart } from "lucide-react";

interface LoadingScreenProps {
  text?: string;
}

export function LoadingScreen({
  text = "Preparing your shop...",
}: LoadingScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-background px-6">
      <div className="relative flex h-20 w-20 items-center justify-center">
        {/* Rotating Ring */}
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-muted border-t-primary" />

        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full">
          <ShoppingCart className="h-9 w-9 text-primary" strokeWidth={2.2} />
        </div>
      </div>

      <p className="mt-2 text-center text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
