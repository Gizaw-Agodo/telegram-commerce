import { categories } from "@/mock/categories";
import type { Category } from "../types/category";

class CategoryService {
  async getCategories(shopId: string): Promise<Category[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return categories
      .filter((category) => category.shopId === shopId)
      .sort((a, b) => a.order - b.order);
  }
}

export const categoryService = new CategoryService();