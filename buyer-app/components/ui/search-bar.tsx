import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Search products...",
}: SearchBarProps) {
  return (
    <div className="px-4">
      <div className="flex h-12 items-center gap-3 rounded-xl border border-border bg-card px-4 transition-colors focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">
        <Search className="h-5 w-5 text-muted-foreground" />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>
    </div>
  );
}