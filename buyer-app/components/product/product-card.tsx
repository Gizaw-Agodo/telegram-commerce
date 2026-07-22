import Image from "next/image";
import { Plus, ImageIcon } from "lucide-react";
import type { Product } from "@/features/shop/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-card transition-shadow hover:shadow-md">
      <div className="relative aspect-square bg-muted">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <ImageIcon className="h-10 w-13 text-muted-foreground" />
          </div>
        )}
      </div>

      <div className="space-y-0 p-2">
        <h3 className="line-clamp-2 text-sm font-normal">
          {product.name}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-[16px] font-semibold">
            {product.currency} {product.price.toLocaleString()}
          </span>

          <button className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:opacity-90">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}