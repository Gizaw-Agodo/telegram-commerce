import {
  DollarSign,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";

import { StatCard } from "./statCard";

export function StatsGrid() {
  return (
    <section className="grid grid-cols-2 gap-4">
      <StatCard
        title="Revenue"
        value="ETB 0"
        icon={<DollarSign className="h-3 w-3" />}
      />

      <StatCard
        title="Orders"
        value={0}
        icon={<ShoppingCart className="h-3 w-3" />}
      />

      <StatCard
        title="Products"
        value={0}
        icon={<Package className="h-3 w-3" />}
      />

      <StatCard
        title="Customers"
        value={0}
        icon={<Users className="h-3 w-3" />}
      />
    </section>
  );
}