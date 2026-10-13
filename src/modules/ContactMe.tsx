import { BehanceIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { SITE_CONFIG } from "@/config";
import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const iconLink =
  "inline-flex size-10 items-center justify-center rounded-full border border-secondary text-secondary transition-colors duration-150 hover:bg-primary-foreground/10 hover:text-primary-foreground";

export function ContactMe() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => window.clearTimeout(timeoutRef.current);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
      setCopied(true);

      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
      window.location.href = `mailto:${SITE_CONFIG.email}`;
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 px-3 text-center sm:mt-2">
      <div className="flex max-w-full flex-col items-center gap-2 text-primary-foreground">
        <div className="font-sans font-light">Reach out at</div>

        <div className="flex max-w-full items-center justify-center gap-1.5 sm:gap-2">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="break-all text-base sm:text-xl md:text-3xl"
          >
            {SITE_CONFIG.email}
          </a>

          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? "Email copied" : "Copy email address"}
            title={copied ? "Copied!" : "Copy email"}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-secondary transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground sm:size-10"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>
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
    </div>
  );
}
