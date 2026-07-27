import { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
}

export function StatCard({
  title,
  value,
  icon,
}: StatCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-2">
        <div>
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="mt-1 text-xl font-semibold">
            {value}
          </h2>
        </div>

        <div className="rounded-full bg-primary/10 p-2 text-primary">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
}