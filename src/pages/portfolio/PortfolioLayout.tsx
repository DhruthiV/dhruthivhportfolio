import { Outlet } from "react-router-dom";
import { ContactMe } from "@/modules/ContactMe";
import { Navbar } from "@/modules/Navbar";

export function PortfolioLayout() {
  return (
    <div id="dashboard-scroll" className="h-full overflow-y-auto">
      <div className="min-h-full flex flex-col">
        <Navbar />

        <div className="flex-1 w-full max-w-6xl mx-auto px-4 pt-4 md:px-8 flex flex-col gap-16 lg:gap-28">
          <Outlet />
        </div>

        <footer className="mt-16 w-full min-h-16 py-3 px-4 rounded-t-2xl bg-primary text-primary-foreground flex items-center justify-center font-heading">
          <ContactMe />
        </footer>
      </div>
    </div>
  );
}
