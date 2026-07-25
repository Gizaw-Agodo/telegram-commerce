import type { DraftOrder, DraftOrderItem } from "../types/order";

interface CreateDraftOrderInput {
  items: DraftOrderItem[];
}

class OrderService {
  async createDraftOrder({
    items,
  }: CreateDraftOrderInput): Promise<DraftOrder> {
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 800));

    const total = items.reduce(
      (sum, item) => sum + item.unitPrice * item.quantity,
      0,
    );

    return {
      id: crypto.randomUUID(),

      items,

      total,

      status: "draft",

      createdAt: new Date().toISOString(),
    };
  }
}

export const orderService = new OrderService();
