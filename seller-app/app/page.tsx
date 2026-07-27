"use client"

import { Hero } from "@/features/shop/components/hero";
import { CreateShopCard } from "@/features/shop/components/createShopCard";
import { EmptyShops } from "@/features/shop/components/emptyShops";
import { ShopList } from "@/features/shop/components/shopList";
import { mockShops } from "@/mock/mockShops";
import { useRouter } from "next/navigation";
import { ShopSummary } from "@/features/shop/types/shop-summery";

export default function HomePage() {
 const router = useRouter();

  const handleCreateShop = () => {
    router.push("/shops/create");
  };

  const handleShopClick = (shopSlug: string) => {
    router.push( `/shops/${shopSlug}`)
  };

  return (
    <main className="container mx-auto max-w-2xl space-y-8 px-4 py-8">
      <Hero
        title="TeleShop Seller"
        description="Manage your Telegram stores and grow your business."
      />

      <CreateShopCard onClick={handleCreateShop} />

      {mockShops.length === 0 ? (
        <EmptyShops onCreateShop={handleCreateShop} />
      ) : (
        <ShopList
          shops={mockShops}
          onShopClick={handleShopClick}
        />
      )}
    </main>
  );
}