import { Link } from "react-router-dom";
import { buildMailtoLink, RESUME_REQUEST_MAILTO } from "@/config";

const linkClass =
  "rounded-full px-2 py-1.5 text-xs sm:px-3 sm:text-sm md:text-md font-sans text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground whitespace-nowrap";

export function Navbar() {
  const resumeMailto = buildMailtoLink(RESUME_REQUEST_MAILTO);

  return (
    <header className="sticky top-2 z-50 mx-auto mt-2 w-[calc(100%-1rem)] md:w-[85%]">
      <nav className="flex min-h-12 items-center justify-between gap-2 rounded-full bg-background px-3 py-3 shadow-sm backdrop-blur-md sm:px-5 md:px-6">
        <Link
          to="/"
          className="shrink-0 text-sm font-sans tracking-tight text-foreground sm:text-base"
        >
          Dhruthi.design
        </Link>

        <div className="flex min-w-0 items-center justify-end gap-1">
          <Link to="/projects" className={linkClass}>
            Projects
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
