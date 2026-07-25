import { ShoppingCart, Star } from "lucide-react";
import { Shop } from "@/features/shop/types/shop";

interface ShopHeaderProps {
  shop: Shop;
}

export function ShopHeader({ shop }: ShopHeaderProps) {
  return (
    <header className="flex flex-col items-center px-4 pt-8 pb-6">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-card">
        <ShoppingCart className="h-10 w-10" />
      </div>

      <h1 className="mt-4 text-xl font-bold">{shop.name}</h1>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs">
        <span
          className={`rounded-full px-3 py-1 font-medium ${
            shop.isOpen
              ? " text-green-700 dark:bg-green-900/30 dark:text-green-400"
              : " text-red-700 dark:bg-red-900/30 dark:text-red-400"
          }`}
        >
          {shop.isOpen ? "● Open" : "● Closed"}
        </span>

        <div className="flex items-center gap-1">
          <Star className="fill-yellow-400 text-yellow-400" size={16} />
          {shop.rating.toFixed(1)}
        </div>

        <span className="rounded-full  px-3 py-1 font-medium text-muted-foreground">
          🚚 free delivery
        </span>
      </div>
    </header>
  );
}
