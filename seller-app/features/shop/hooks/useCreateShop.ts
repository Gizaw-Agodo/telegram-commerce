import { useState } from "react";

import { createShop } from "../services/shop.service";

interface CreateShopInput {
  name: string;
  description: string;
}

export function useCreateShop() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleCreateShop = async (
    input: CreateShopInput
  ) => {
    setLoading(true);
    setError(null);

    try {
      const shop = await createShop(input);
      return shop;
    } catch (err) {
      const error =
        err instanceof Error
          ? err
          : new Error("Failed to create shop.");

      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    createShop: handleCreateShop,
    loading,
    error,
  };
}