export interface DraftOrderItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
}

export interface DraftOrder {
  id: string;

  items: DraftOrderItem[];

  total: number;

  status: "draft";

  createdAt: string;
}