"use client";

import { telegramService } from "@/features/orders/services/telegram.service";
import type { Product } from "@/features/shop/types/product";

interface ProductActionBarProps {
  product: Product;
  quantity: number;
}

export function ProductActionBar({
  
}: ProductActionBarProps) {

  const handleChatSeller = async () => {
    telegramService.openChat("gzag15" );
  };

  return (
    <div className="sticky bottom-0 border-t bg-background p-4">
      <button
        type="button"
        onClick={handleChatSeller}
        className="w-full rounded-xl bg-primary py-3 font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-60 hover:cursor-pointer disabled:cursor-not-allowed"
      >
       Chat with Seller 
      </button>
    </div>
  );
}