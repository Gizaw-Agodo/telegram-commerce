import { products } from "@/mock/products";
import type { Product } from "../types/product";

export interface GetProductsParams {
  shopId?: string;
  search?: string;
  categoryId?: string;
}

class ProductService {
  async getProducts({
    shopId,
    search = "",
    categoryId,
  }: GetProductsParams): Promise<Product[]> {
    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 500));

    let result = products.filter((product) => product.shopId === shopId);

    if (categoryId && categoryId !== "all") {
      result = result.filter((product) => product.categoryId === categoryId);
    }

    if (search.trim()) {
      const query = search.toLowerCase().trim();

      result = result.filter((product) =>
        product.name.toLowerCase().includes(query),
      );
    }

    return result;
  }
}

export const productService = new ProductService();
