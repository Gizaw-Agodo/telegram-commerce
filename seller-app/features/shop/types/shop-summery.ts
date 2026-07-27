import { Shop } from "./shop";

export interface ShopSummary extends Shop{
  productCount: number;
  pendingOrders: number;
}