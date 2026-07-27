import { Order } from "@/features/shop/types/order";

export const mockOrders: Order[] = [
  {
    id: "1001",
    customerName: "John Doe",
    total: 4500,
    itemCount: 2,
    status: "pending",
    createdAt: "2 min ago",
  },
  {
    id: "1002",
    customerName: "Jane Smith",
    total: 1200,
    itemCount: 1,
    status: "pending",
    createdAt: "8 min ago",
  },
  {
    id: "1003",
    customerName: "Michael Johnson",
    total: 8900,
    itemCount: 4,
    status: "processing",
    createdAt: "15 min ago",
  },
  {
    id: "1004",
    customerName: "Abel Tesfaye",
    total: 2500,
    itemCount: 3,
    status: "completed",
    createdAt: "Today",
  },
  {
    id: "1005",
    customerName: "Sara Ahmed",
    total: 6800,
    itemCount: 2,
    status: "completed",
    createdAt: "Yesterday",
  },
  {
    id: "1006",
    customerName: "David Wilson",
    total: 3100,
    itemCount: 1,
    status: "cancelled",
    createdAt: "Yesterday",
  },
];