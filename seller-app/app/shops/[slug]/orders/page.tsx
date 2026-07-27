"use client";

import { OrderTabs } from "@/features/shop/orders/components/orderTabs";
import { OrderList } from "@/features/shop/orders/components/orderList";
import { OrderStatus } from "@/features/shop/types/order";
import { mockOrders } from "@/mock/mockOrders";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OrdersPage() {
  const [status, setStatus] = useState<OrderStatus>("pending");

  const router = useRouter();

  const filteredOrders = useMemo(() => {
    return mockOrders.filter((order) => order.status === status);
  }, [status]);

  return (
    <main className="container mx-auto max-w-3xl space-y-6 px-4 py-6">
      <div className="flex gap-4 items-center">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-3xl font-bold">Orders</h1>
      </div>

      <OrderTabs value={status} onValueChange={setStatus} />

      <OrderList orders={filteredOrders} />
    </main>
  );
}
