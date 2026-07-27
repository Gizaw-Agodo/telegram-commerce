"use client";

import { ArrowLeft, Settings } from "lucide-react";
import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShopSummary } from "../../types/shop-summery";


interface DashboardHeaderProps {
  shop: ShopSummary;
}

export function DashboardHeader({
  shop,
}: DashboardHeaderProps) {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push("/")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        <Avatar className="h-14 w-14">
          <AvatarImage
            src={shop.logo}
            alt={shop.name}
          />

          <AvatarFallback>
            {shop.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold">
              {shop.name}
            </h1>

            <Badge
              variant={
                shop.isOpen
                  ? "default"
                  : "secondary"
              }
            >
              {shop.isOpen ? "Open" : "Closed"}
            </Badge>
          </div>

          <p className="text-sm text-muted-foreground">
            {shop.description}
          </p>
        </div>
      </div>

      {/* <Button variant="outline" size="icon">
        <Settings className="h-5 w-5" />
      </Button> */}
    </header>
  );
}