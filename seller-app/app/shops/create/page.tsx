"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useCreateShop } from "@/features/shop/hooks/useCreateShop";
import { ShopForm } from "@/features/shop/components/create-shop/shopForm";
import { CreateShopButton } from "@/features/shop/components/create-shop/createShopButton";

export default function CreateShopPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const { createShop, loading, error } = useCreateShop();

  const handleCreateShop = async () => {
    try {
      const shop = await createShop({
        name,
        description,
      });

      router.push(`/shops/${shop.slug}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="container mx-auto max-w-2xl space-y-8 px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Create Your Shop</h1>

        <p className="text-muted-foreground">
          Give your shop a name and description. You can customize everything
          later.
        </p>
      </div>

      <ShopForm
        name={name}
        description={description}
        onNameChange={setName}
        onDescriptionChange={setDescription}
        onValidityChange={setIsFormValid}
      />

      {error && <p className="text-sm text-destructive">{error.message}</p>}

      <CreateShopButton
        loading={loading}
        disabled={!isFormValid}
        onClick={handleCreateShop}
      />
    </main>
  );
}
