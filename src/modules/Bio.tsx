import { NotionRenderer } from "@/components/blocks/NotionRenderer";
import { BehanceIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { SITE_CONFIG } from "@/config";
import { Skeleton } from "@/components/ui/skeleton";

interface BioProps {
  loading: boolean;
  blocks: unknown[];
}
const iconLink =
  "inline-flex size-10 items-center justify-center rounded-full transition-colors duration-150 bg-primary text-secondary hover:bg-primary/80";

export function Bio({ loading, blocks }: BioProps) {
  if (loading) return <BioSkeleton />;

  return (
    <section className="my-3 flex flex-col items-center justify-center gap-6 py-8 text-center sm:gap-8 sm:py-12">
      <div className="w-full min-w-0">
        <NotionRenderer blocks={blocks} />
      </div>

      <div className="flex items-center justify-center gap-3">
        <a
          href={SITE_CONFIG.socials.behance}
          aria-label="Behance profile"
          className={iconLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BehanceIcon size={18} />
        </a>

        <a
          href={SITE_CONFIG.socials.linkedin}
          aria-label="LinkedIn profile"
          className={iconLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon size={18} />
        </a>
      </div>
    </section>
  );
}

function BioSkeleton() {
  return (
    <section className="my-3 flex min-h-[320px] flex-col items-center justify-center gap-6 px-1 py-8 text-center sm:min-h-[400px] sm:gap-8 sm:py-12 lg:min-h-[420px]">
      <article className="w-full space-y-2">
        <div className="flex justify-center pt-3">
          <Skeleton className="h-5 w-52 max-w-full sm:h-6 sm:w-64" />
        </div>

        <div className="flex flex-col items-center gap-2 pt-4">
          <Skeleton className="h-8 w-full max-w-4xl sm:h-12" />
          <Skeleton className="h-8 w-11/12 max-w-4xl sm:h-12" />
          <Skeleton className="h-8 w-4/5 max-w-3xl sm:h-12" />
        </div>
      </article>

      <div className="flex w-full justify-center">
        <Skeleton className="h-4 w-3/4 max-w-xl sm:h-5" />
      </div>

      <div className="flex items-center justify-center gap-3">
        <Skeleton className="size-9 rounded-full sm:size-10" />
        <Skeleton className="size-9 rounded-full sm:size-10" />
      </div>
    </section>
  );
}
