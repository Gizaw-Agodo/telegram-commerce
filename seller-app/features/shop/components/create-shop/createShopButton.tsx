import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

interface CreateShopButtonProps {
  loading: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export function CreateShopButton({
  loading,
  disabled = false,
  onClick,
}: CreateShopButtonProps) {
  return (
    <Button
      className="w-full hover:cursor-pointer"
      disabled={loading || disabled}
      onClick={onClick}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Creating Shop...
        </>
      ) : (
        "Create Shop"
      )}
    </Button>
  );
}