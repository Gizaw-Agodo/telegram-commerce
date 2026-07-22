"use client";

import { CategoryChip } from "./category-chip";

import type { Category } from "@/features/shop/types/category";
interface CategoryListProps {
  categories: Category[];
  selectedCategory: string;
  onSelect: (categoryId: string) => void;
}

export function CategoryList({
  categories,
  selectedCategory,
  onSelect,
}: CategoryListProps) {
  return (
    <section className="mt-6">
      <div className="no-scrollbar flex gap-3 overflow-x-auto px-4">
        {categories.map((category) => (
          <CategoryChip
            key={category.id}
            label={category.name}
            active={selectedCategory === category.id}
            onClick={() => onSelect(category.id)}
          />
        ))}
      </div>
    </section>
  );
}