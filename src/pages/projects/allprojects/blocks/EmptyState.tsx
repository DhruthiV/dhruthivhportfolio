import { Skeleton } from "@/components/ui/skeleton";

export function EmptyState() {
  return (
    <article className="overflow-hidden border border-border bg-card shadow-sm">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Skeleton className="aspect-[4/3] w-full rounded-none" />
      </div>

      {/* Header */}
      <header className="p-6">
        <Skeleton className="h-7 w-3/4 max-w-xs" />

        {/* Project type */}
        <div className="mt-3 flex flex-wrap gap-2">
          <Skeleton className="h-6 w-28 rounded-full" />
        </div>

        {/* Description */}
        <div className="mt-5 space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </header>

      {/* Footer links */}
      <footer className="border-t border-border p-5">
        <div className="flex flex-wrap gap-3">
          <Skeleton className="h-10 w-28 rounded-md" />
          <Skeleton className="h-10 w-28 rounded-md" />
        </div>
      </footer>
    </article>
  );
}
