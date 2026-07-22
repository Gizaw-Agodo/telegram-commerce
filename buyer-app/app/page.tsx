"use client";

import { LoadingScreen } from "@/components/ui/loading-screen";
import { ShopHeader } from "@/components/shop/shop-header";
import { useShop } from "@/features/shop/hooks/use-shop";
import { useProducts } from "@/features/shop/hooks/use-products";
import { SearchBar } from "@/components/ui/search-bar";
import { ProductGrid } from "@/components/product/product-grid";
import { CategoryList } from "@/components/category/category-list";
import { useCategories } from "@/features/shop/hooks/use-categories";
import { CategoryListSkeleton } from "@/components/category/category-list-skeleton";
import { ProductCardSkeleton } from "@/components/product/product-card-skeleton";

export default function HomePage() {
  const shopSlug = "addis-bookstore";

  const { shop, loading, error, reload } = useShop(shopSlug);
  const {
    products,
    loading: productsLoading,
    filters,
    setSearch,
    setCategory,
  } = useProducts(shop?.id);
  const { categories, loading: categoriesLoading } = useCategories(shop?.id);

  if (loading) {
    return (
      <div className="min-h-screen! flex items-center justify-center">
        <LoadingScreen text="Preparing your shop..." />
      </div>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6">
        <p className="text-center text-sm text-muted-foreground">
          {error.message}
        </p>

        <button
          onClick={reload}
          className="rounded-lg bg-primary px-4 py-2 text-primary-foreground"
        >
          Try Again
        </button>
      </main>
    );
  }

  if (!shop) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background">
      <ShopHeader shop={shop} />
      <SearchBar value={filters.search} onChange={setSearch} />
      {categoriesLoading ? (
        <CategoryListSkeleton></CategoryListSkeleton>
      ) : (
        <CategoryList
          categories={categories}
          selectedCategory={filters.categoryId}
          onSelect={setCategory}
        />
      )}

      {productsLoading ? (
        <ProductCardSkeleton></ProductCardSkeleton>
      ) : (
        <ProductGrid products={products} />
      )}
    </main>
  );
}
