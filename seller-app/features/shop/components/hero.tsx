import { ShoppingCart } from "lucide-react";

interface HeroProps {
  title: string;
  description: string;
  logo?: React.ReactNode;
}

export function Hero({
  title,
  description,
  logo,
}: HeroProps) {
  return (
    <section className="flex flex-col items-center text-center py-4 px-6 ">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-card m-4">
        <ShoppingCart className="h-10 w-10" />
      </div>

      <h1 className="text-2xl font-bold tracking-tight">
        {title}
      </h1>

      <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </section>
  );
}