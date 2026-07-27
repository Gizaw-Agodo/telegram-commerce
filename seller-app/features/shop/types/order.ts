export type OrderStatus =
  | "pending"
  | "processing"
  | "completed"
  | "cancelled";

export interface Order {
  id: string;
  customerName: string;
  total: number;
  itemCount: number;
  status: OrderStatus;
  createdAt: string;
}