import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface ManagementCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  onClick: () => void;
}

export function ManagementCard({
  title,
  description,
  icon,
  onClick,
}: ManagementCardProps) {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer transition-all hover:border-primary hover:shadow-md"
    >
      <CardContent className="flex items-center justify-between p-5">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-primary/10 p-3 text-primary">
            {icon}
          </div>

          <div>
            <h3 className="font-semibold">
              {title}
            </h3>

            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          </div>
        </div>

        <ChevronRight className="h-5 w-5 text-muted-foreground" />
      </CardContent>
    </Card>
  );
}