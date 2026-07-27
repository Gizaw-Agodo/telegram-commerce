import { Store } from "lucide-react";

interface EmptyShopsProps {
  onCreateShop: () => void;
}

export function EmptyShops({
  onCreateShop,
}: EmptyShopsProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed p-8 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
        <Store className="h-8 w-8 text-muted-foreground" />
      </div>

      <h2 className="text-xl font-semibold">
        No shops yet
      </h2>

      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        Create your first shop to start selling your products on Telegram.
      </p>

      <button
        onClick={onCreateShop}
        className="mt-6 rounded-lg bg-primary px-5 py-2 text-primary-foreground transition-opacity hover:opacity-90"
      >
        Create Shop
      </button>
    </div>
  );
}