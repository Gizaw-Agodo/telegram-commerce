"use client";

import { useCallback, useEffect, useState } from "react";
import { productService } from "../services/product.service";
import type { Product } from "../types/product";

interface Filters {
  search: string;
  categoryId: string;
}

interface UseProductsResult {
  products: Product[];

  loading: boolean;

  error: Error | null;

  filters: Filters;

  setSearch: (value: string) => void;

  setCategory: (categoryId: string) => void;

  refetch: () => Promise<void>;
}

export function useProducts(shopId?: string): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<Error | null>(null);

  const [filters, setFilters] = useState<Filters>({
    search: "",
    categoryId: "all",
  });

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await productService.getProducts({
        shopId,
        search: filters.search,
        categoryId: filters.categoryId,
      });

      setProducts(data);
    } catch (err) {
      setError(err as Error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, [shopId, filters]);

  useEffect(() => {
    void loadProducts();
  }, [ loadProducts]);

  const setSearch = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      search: value,
    }));
  };

  const setCategory = (categoryId: string) => {
    setFilters((prev) => ({
      ...prev,
      categoryId,
    }));
  };

  return {
    products,

    loading,

    error,

    filters,

    setSearch,

    setCategory,

    refetch: loadProducts,
  };
}