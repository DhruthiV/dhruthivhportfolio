import { Link } from "react-router-dom";
import { buildMailtoLink, RESUME_REQUEST_MAILTO } from "@/config";

const linkClass =
  "rounded-full px-3 py-1.5 text-md font-sans text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground";

export function Navbar() {
  const resumeMailto = buildMailtoLink(RESUME_REQUEST_MAILTO);

  return (
    <header className="sticky top-2 z-50 mx-auto mt-2 w-[calc(100%-1rem)] md:w-[85%]">
      <nav className="flex h-12 items-center justify-between rounded-full bg-background px-6 py-9 shadow-sm backdrop-blur-md">
        <Link
          to="/"
          className="text-md font-sans tracking-tight text-foreground"
        >
          Dhruthi.design
        </Link>

        <div className="flex items-center gap-1">
          <Link to="/projects" className={linkClass}>
            Product concepts
          </Link>

          <a
            href={resumeMailto}
            className={linkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Resume via Email
          </a>
        </div>
      </nav>
    </header>
  );
}
