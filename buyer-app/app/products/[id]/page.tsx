"use client";

import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { LoadingScreen } from "@/components/ui/loading-screen";
import { ProductGallery } from "@/components/product/product-gallery";
import { QuantitySelector } from "@/components/product/quantity-selector";
import { ProductActionBar } from "@/components/product/product-action-bar";
import { use } from "react";
import { useProduct } from "@/features/shop/hooks/use-product";
import { useShop } from "@/features/shop/hooks/use-shop";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const shopId = "shop-1";
  const { id } = use(params);

  const { product, loading } = useProduct(shopId, id);
  const {shop} = useShop(shopId)
  const [quantity, setQuantity] = useState(1);

  if (loading) {
    return (
      <div className="min-h-screen! flex items-center justify-center">
        <LoadingScreen text="Loading product..." />
      </div>
    );
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="flex items-center gap-3 border-b p-4">
        <Link href="/">
          <ArrowLeft className="h-5 w-5" />
        </Link>

        <h1 className="font-semibold">Product Details</h1>
      </div>

      <ProductGallery image={product.image} alt={product.name} />

      <section className="space-y-5 p-4">
        <div className="flex flex-row justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">{product.name}</h2>

            <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="fill-yellow-400 text-yellow-400" size={16} />
                {product.rating}
              </div>

              <span>{product.sold} sold</span>
            </div>
          </div>

          <div className=" text-2xl font-bold">
            {product.currency} {product.price.toLocaleString()}
          </div>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">Description</h3>

          <p className="text-sm text-muted-foreground">{product.description}</p>
        </div>

        {/* <div>
          <h3 className="mb-3 font-semibold">Quantity</h3>

          <QuantitySelector value={quantity} onChange={setQuantity} />
        </div> */}
      </section>

      <ProductActionBar product={product} quantity={quantity} />
    </main>
  );
}
