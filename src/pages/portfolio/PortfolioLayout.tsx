import { Outlet } from "react-router-dom";
import { ContactMe } from "@/modules/ContactMe";
import { Navbar } from "@/modules/Navbar";

export function PortfolioLayout() {
  return (
    <div id="dashboard-scroll" className="h-full overflow-y-auto">
      <div className="flex min-h-full flex-col">
        <Navbar />

        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-4 pt-4 sm:gap-16 md:px-8 lg:gap-28">
          <Outlet />
        </main>

        <footer className="mt-10 flex min-h-16 w-full items-center justify-center rounded-t-2xl bg-primary px-3 py-6 text-primary-foreground sm:mt-16 sm:px-4 sm:py-8">
          <ContactMe />
        </footer>
      </div>
    </div>
  );
}
