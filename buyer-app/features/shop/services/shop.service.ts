import { shops } from "@/mock/shops";
import type { Shop } from "../types/shop";

class ShopService {
  async getShopBySlug(slug: string): Promise<Shop> {
    await new Promise((resolve) => setTimeout(resolve, 600));

    const shop = shops.find((shop) => shop.slug === slug);

    if (!shop) {
      throw new Error("Shop not found.");
    }

    return shop;
  }
}

export const shopService = new ShopService();