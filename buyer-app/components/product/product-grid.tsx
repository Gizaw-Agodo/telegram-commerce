import type { Product } from "@/features/shop/types/product";
import { ProductCard } from "./product-card";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <section className="flex flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-4 text-5xl">🔍</div>

        <h3 className="text-lg font-semibold">
          No products found
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Try another search or browse a different category.
        </p>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-2 gap-4 px-4 py-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </section>
  );
}