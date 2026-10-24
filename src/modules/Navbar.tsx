import { Link } from "react-router-dom";
import { buildMailtoLink, RESUME_REQUEST_MAILTO } from "@/config";

const linkClass =
  "rounded-full px-1.5 py-1.5 text-[11px] min-[375px]:text-xs sm:px-3 sm:text-sm md:text-md font-sans text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground whitespace-nowrap";

export function Navbar() {
  const resumeMailto = buildMailtoLink(RESUME_REQUEST_MAILTO);

  return (
    <header className="sticky top-0 z-50 w-full bg-white px-2 pt-6 min-[375px]:px-3 sm:px-6 sm:pt-10">
      <nav className="mx-auto flex min-h-12 w-full items-center justify-between gap-1 rounded-full bg-background px-2 shadow-sm backdrop-blur-md sm:px-4 md:w-[85%] md:px-6">
        <Link
          to="/"
          className="shrink-0 text-xs font-sans tracking-tight text-foreground min-[375px]:text-sm sm:text-base"
        >
          Dhruthi.design
        </Link>

        <div className="flex min-w-0 items-center gap-0">
          <Link to="/projects" className={linkClass}>
            Concepts
          </Link>

          <a
            href={resumeMailto}
            className={linkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume via Email
          </a>
        </div>
      </nav>
    </header>
  );
}
