import { Card, CardContent } from "@/components/ui/card";
import { Order } from "../../types/order";


interface OrderCardProps {
  order: Order;
}

export function OrderCard({
  order,
}: OrderCardProps) {
  return (
    <Card className="cursor-pointer hover:border-primary">
      <CardContent className="space-y-2 p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">
            Order #{order.id}
          </h3>

          <span className="text-sm capitalize text-muted-foreground">
            {order.status}
          </span>
        </div>

        <p>{order.customerName}</p>

        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{order.itemCount} item(s)</span>

          <span>ETB {order.total.toLocaleString()}</span>
        </div>

        <p className="text-xs text-muted-foreground">
          {order.createdAt}
        </p>
      </CardContent>
    </Card>
  );
}