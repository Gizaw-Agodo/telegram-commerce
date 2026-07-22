"use client";

import { useCallback, useEffect, useState } from "react";
import { categoryService } from "../services/category.service";
import type { Category } from "../types/category";

interface UseCategoriesResult {
  categories: Category[];
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function useCategories(shopId?: string): UseCategoriesResult {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadCategories = useCallback(async () => {
    if (!shopId) {
      setCategories([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const data = await categoryService.getCategories(shopId);

      setCategories(data);
    } catch (err) {
      setError(err as Error);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  }, [shopId]);

  useEffect(() => {
    if (!shopId) return;

    void loadCategories();
  }, [shopId, loadCategories]);

  return {
    categories,
    loading,
    error,
    refetch: loadCategories,
  };
}