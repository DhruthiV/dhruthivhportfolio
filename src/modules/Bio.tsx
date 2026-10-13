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
    <section className="flex flex-col items-center text-center justify-center gap-8 my-3 py-12 lg:min-h-[calc(10dvh)]">
      <div className="flex flex-col">
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
    <section className="flex flex-col items-center justify-center gap-8 my-3 py-12 text-center min-h-[420px] sm:min-h-[440px] lg:min-h-[460px]">
      <article className="w-full space-y-2">
        {/* Availability heading */}
        <div className="flex justify-center pt-3">
          <Skeleton className="h-6 w-64 max-w-full" />
        </div>

        {/* Main heading: reserve room for longer wording */}
        <div className="flex flex-col items-center gap-2 pt-4">
          <Skeleton className="h-12 w-full max-w-4xl" />
          <Skeleton className="h-12 w-11/12 max-w-4xl" />
          <Skeleton className="h-12 w-4/5 max-w-3xl" />
        </div>
      </article>

      {/* Supporting content */}
      <div className="flex justify-center">
        <Skeleton className="h-5 w-3/4 max-w-xl" />
      </div>

      {/* Social links */}
      <div className="flex items-center justify-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
    </section>
  );
}
