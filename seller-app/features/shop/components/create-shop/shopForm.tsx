"use client";

import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ShopFormProps {
  name: string;
  description: string;
  onNameChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onValidityChange: (isValid: boolean) => void;
}

export function ShopForm({
  name,
  description,
  onNameChange,
  onDescriptionChange,
  onValidityChange,
}: ShopFormProps) {
  const [touched, setTouched] = useState(false);

  const trimmedName = name.trim();

  const isValid = trimmedName.length >= 4;

  useEffect(() => {
    onValidityChange(isValid);
  }, [isValid, onValidityChange]);

  let error = "";

  if (touched) {
    if (trimmedName.length === 0) {
      error = "Shop name is required.";
    } else if (trimmedName.length < 4) {
      error = "Shop name must be at least 4 characters.";
    }
  }

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">
          Shop Name <span className="text-destructive">*</span>
        </Label>

        <Input
          id="name"
          value={name}
          placeholder="Gizaw Electronics"
          onChange={(e) => onNameChange(e.target.value)}
          onBlur={() => setTouched(true)}
        />

        {error && (
          <p className="text-sm text-destructive">
            {error}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">
          Description
        </Label>

        <Textarea
          id="description"
          value={description}
          rows={4}
          placeholder="Tell customers about your shop..."
          onChange={(e) =>
            onDescriptionChange(e.target.value)
          }
        />
      </div>
    </div>
  );
}