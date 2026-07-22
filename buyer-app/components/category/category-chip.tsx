interface CategoryChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function CategoryChip({
  label,
  active = false,
  onClick,
}: CategoryChipProps) {
  return (
    <button
      onClick={onClick}
      className={[
        "h-10 whitespace-nowrap rounded-full border px-5 text-sm font-medium transition-all duration-200 hover:cursor-pointer",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-sm"
          : "border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
      ].join(" ")}
    >
      {label}
    </button>
  );
}