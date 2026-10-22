import { Link } from "react-router-dom";
import { buildMailtoLink, RESUME_REQUEST_MAILTO } from "@/config";

const linkClass =
  "rounded-full px-2 py-1.5 text-xs sm:px-3 sm:text-sm md:text-md font-sans text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground whitespace-nowrap";

export function Navbar() {
  const resumeMailto = buildMailtoLink(RESUME_REQUEST_MAILTO);

  return (
    <header className="sticky top-0 pt-10 px-10 justify-items-center z-50 bg-white w-full">
      <nav className="flex min-h-12 items-center justify-between gap-2 rounded-full bg-background shadow-sm backdrop-blur-md sm:px-4 md:px-6 w-[calc(100%)] md:w-[85%] px-4">
        <Link
          to="/"
          className="shrink-0 text-sm font-sans tracking-tight text-foreground sm:text-base"
        >
          Dhruthi.design
        </Link>

        <div className="flex min-w-0 items-center justify-end gap-1">
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
