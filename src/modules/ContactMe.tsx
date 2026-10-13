// import { Button } from "@/components/ui/button";
// import { BehanceIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
// import { buildMailtoLink, RESUME_REQUEST_MAILTO, SITE_CONFIG } from "@/config";
// import { Check, Copy, FileText } from "lucide-react";
// import { useEffect, useRef, useState } from "react";

// const iconLink =
//   "inline-flex size-9 items-center justify-center rounded-(--radius) border border-primary-foreground/30 text-primary-foreground/80 transition-colors duration-150 hover:bg-primary-foreground/10 hover:text-primary-foreground";

// export function ContactMe() {
//   const [copied, setCopied] = useState(false);
//   const timeoutRef = useRef<number | undefined>(undefined);
//   const resumeMailto = buildMailtoLink(RESUME_REQUEST_MAILTO);

//   useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(SITE_CONFIG.email);
//       setCopied(true);
//       window.clearTimeout(timeoutRef.current);
//       timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
//     } catch (error) {
//       console.error("Failed to copy email:", error);
//       window.location.href = `mailto:${SITE_CONFIG.email}`;
//     }
//   };

//   return (
//     <div className="flex flex-wrap items-center justify-center gap-2">
//       <Button
//         onClick={handleCopy}
//         variant="outline"
//         className="h-9 gap-2 rounded-(--radius) border-primary-foreground/30 bg-transparent text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
//       >
//         {copied ? (
//           <>
//             <Check size={14} className="animate-in zoom-in-50 duration-150" />
//             <span>Email copied</span>
//           </>
//         ) : (
//           <>
//             <Copy size={14} />
//             <span>Copy email</span>
//           </>
//         )}
//       </Button>

//       <a
//         href={resumeMailto}
//         className="inline-flex h-9 items-center justify-center gap-2 rounded-(--radius) bg-primary-foreground px-4 text-sm font-medium text-primary transition-all duration-150 hover:bg-primary-foreground/90"
//       >
//         <FileText size={14} />
//         <span>Request resume</span>
//       </a>

//       <a
//         href={SITE_CONFIG.socials.behance}
//         aria-label="Behance profile"
//         className={iconLink}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <BehanceIcon size={18} />
//       </a>
//       <a
//         href={SITE_CONFIG.socials.linkedin}
//         aria-label="LinkedIn profile"
//         className={iconLink}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <LinkedinIcon size={18} />
//       </a>
//     </div>
//   );
// }

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
    <div className="flex flex-col items-center gap-6 mt-2">
      <div className="flex flex-col items-center gap-1 text-primary-foreground">
        <div className="font-sans font-light">Reach out at</div>
        <div className="flex items-center gap-2">
          <span className="text-3xl">{SITE_CONFIG.email}</span>

          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? "Email copied" : "Copy email address"}
            title={copied ? "Copied!" : "Copy email"}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full text-secondary transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
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
