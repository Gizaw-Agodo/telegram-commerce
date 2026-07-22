export function CategoryListSkeleton() {
  return (
    <section className="mt-6">
      <div className="no-scrollbar flex gap-3 overflow-x-auto px-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-10 w-20 shrink-0 animate-pulse rounded-full bg-muted"
          />
        ))}
      </div>
    </section>
  );
}