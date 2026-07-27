import { ShopSummary } from "../types/shop-summery";
import { ShopCard } from "./shopCard";

export interface Shop {
  id: string;
  name: string;
  description: string;
  productCount: number;
  pendingOrders: number;
}

interface ShopListProps {
  shops: ShopSummary[];
  onShopClick: (shopSlug: string) => void;
}

export function ShopList({
  shops,
  onShopClick,
}: ShopListProps) {
  return (
    <div className="space-y-4">
      {shops.map((shop) => (
        <ShopCard
          key={shop.id}
          name={shop.name}
          description={shop.description}
          productCount={shop.productCount}
          pendingOrders={shop.pendingOrders}
          onClick={() => onShopClick(shop.slug)}
        />
      ))}
    </div>
  );
}