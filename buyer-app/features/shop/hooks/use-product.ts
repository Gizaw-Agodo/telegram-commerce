"use client";

import { useCallback, useEffect, useState } from "react";
import type { Product } from "../types/product";
import { productService } from "../services/product.service";

export function useProduct(shopId?: string, productId?: string) {
  const [product, setProduct] = useState<Product | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<Error | null>(null);

  const load = useCallback(async () => {
    if (!shopId || !productId) return;

    try {
      setLoading(true);

      const data = await productService.getProduct(shopId, productId);

      setProduct(data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, [shopId, productId]);

  useEffect(() => {
    void load();
  }, [load]);

  return {
    product,
    loading,
    error,
    reload: load,
  };
}