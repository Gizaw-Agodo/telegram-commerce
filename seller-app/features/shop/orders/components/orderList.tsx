import { Order } from "../../types/order";
import { OrderCard } from "./orderCard";


interface OrderListProps {
  orders: Order[];
}

export function OrderList({
  orders,
}: OrderListProps) {
  if (orders.length === 0) {
    return (
      <p className="py-8 text-center text-muted-foreground">
        No orders found.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
        />
      ))}
    </div>
  );
}