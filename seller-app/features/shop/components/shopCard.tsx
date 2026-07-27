import { ChevronRight, Package, ShoppingBag } from "lucide-react";

export interface ShopCardProps {
  name: string;
  description?: string;
  productCount: number;
  pendingOrders: number;
  onClick: () => void;
}

export function ShopCard({
  name,
  description,
  productCount,
  pendingOrders,
  onClick,
}: ShopCardProps) {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        rounded-2xl
        border
        bg-card
        p-4
        text-left
        transition-all
        hover:border-primary
        hover:shadow-sm
        active:scale-[0.99]
        hover:cursor-pointer
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {description}
          </p>
        </div>

        <ChevronRight className="h-5 w-5 text-muted-foreground" />
      </div>

      <div className="mt-4 flex gap-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Package className="h-4 w-4" />
          <span>{productCount} Products</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ShoppingBag className="h-4 w-4" />
          <span>{pendingOrders} Orders</span>
        </div>
      </div>
    </button>
  );
}