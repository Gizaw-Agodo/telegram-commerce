"use client";

import { useCallback, useState } from "react";
import { orderService } from "../services/order.service";
import type { DraftOrder, DraftOrderItem } from "../types/order";

interface CreateDraftOrderInput {
  items: DraftOrderItem[];
}

interface UseOrderResult {
  loading: boolean;
  error: Error | null;
  createDraftOrder: (
    input: CreateDraftOrderInput
  ) => Promise<DraftOrder>;
}

export function useOrder(): UseOrderResult {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const createDraftOrder = useCallback(
    async (
      input: CreateDraftOrderInput
    ): Promise<DraftOrder> => {
      try {
        setLoading(true);
        setError(null);

        return await orderService.createDraftOrder(input);
      } catch (err) {
        const error =
          err instanceof Error
            ? err
            : new Error("Failed to create draft order");

        setError(error);

        throw error;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    loading,
    error,
    createDraftOrder,
  };
}