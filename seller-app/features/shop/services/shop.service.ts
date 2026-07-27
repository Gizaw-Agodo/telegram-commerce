import { ShopSummary } from "../types/shop-summery";

interface CreateShopInput {
  name: string;
  description: string;
}

export async function createShop(
  input: CreateShopInput
): Promise<ShopSummary> {
  // simulate network request
  await new Promise((resolve) => setTimeout(resolve, 500));

  const shop: ShopSummary = {
    id: crypto.randomUUID(),
    merchantId: "merchant-1",
    slug: input.name
      .toLowerCase()
      .replace(/\s+/g, "-"),

    name: input.name,
    description: input.description,

    logo: undefined,
    banner: undefined,

    rating: 0,
    isOpen: true,
    deliveryTime: "30-45 min",

    productCount: 0,
    pendingOrders: 0,
  };

  return shop;
}