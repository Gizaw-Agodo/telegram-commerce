"use client";

import {
  Boxes,
  Package,
  ShoppingCart,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { ManagementCard } from "./managementCard";

interface ManagementGridProps {
  shopSlug: string;
}

export function ManagementGrid({
  shopSlug,
}: ManagementGridProps) {
  const router = useRouter();

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">
        Manage Shop
      </h2>

      <div className="space-y-4">
        <ManagementCard
          title="Orders"
          description="Manage customer orders"
          icon={<ShoppingCart className="h-6 w-6" />}
          onClick={() =>
            router.push(`/shops/${shopSlug}/orders`)
          }
        />

        <ManagementCard
          title="Products"
          description="Manage your products"
          icon={<Package className="h-6 w-6" />}
          onClick={() =>
            router.push(`/shops/${shopSlug}/products`)
          }
        />

        <ManagementCard
          title="Categories"
          description="Organize your catalog"
          icon={<Boxes className="h-6 w-6" />}
          onClick={() =>
            router.push(`/shops/${shopSlug}/categories`)
          }
        />
      </div>
    </section>
  )

}