"use client";

import { useCallback, useEffect, useState } from "react";
import { shopService } from "../services/shop.service";
import type { Shop } from "../types/shop";

interface UseShopResult {
  shop: Shop | null;
  loading: boolean;
  error: Error | null;
  reload: () => Promise<void>;
}

export function useShop(shopSlug: string): UseShopResult {
  const [shop, setShop] = useState<Shop | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadShop = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await shopService.getShopBySlug(shopSlug);

      setShop(data);
    } catch (err) {
      setError(err as Error);
      setShop(null);
    } finally {
      setLoading(false);
    }
  }, [shopSlug]);

  useEffect(() => {
    void loadShop();
  }, [loadShop]);

  return {
    shop,
    loading,
    error,
    reload: loadShop,
  };
}