"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export type OrderStatus =
  | "pending"
  | "processing"
  | "completed"
  | "cancelled";

interface OrderTabsProps {
  value: OrderStatus;
  onValueChange: (value: OrderStatus) => void;
}

export function OrderTabs({
  value,
  onValueChange,
}: OrderTabsProps) {
  return (
    <Tabs
      value={value}
      onValueChange={(value) =>
        onValueChange(value as OrderStatus)
      }
    >
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="pending" className="hover:cursor-pointer">
          Pending
        </TabsTrigger>

        <TabsTrigger value="processing" className="hover:cursor-pointer">
          Processing
        </TabsTrigger>

        <TabsTrigger value="completed" className="hover:cursor-pointer">
          Completed
        </TabsTrigger>

        <TabsTrigger value="cancelled" className="hover:cursor-pointer">
          Cancelled
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}