import { useState } from "react";
import { LandingButton } from "./landing-primitives/landing-button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";

const navLinks = [
  { title: "Team", href: "https://purplerain.tech/team" },
  { title: "Services", href: "https://purplerain.tech/services" },
  { title: "Pricing", href: "https://purplerain.tech/pricing" },
  { title: "Blogs", href: "https://purplerain.tech/blogs" },
  { title: "About", href: "https://purplerain.tech/about" },
  { title: "Careers", href: "/", isCurrent: true },
];

export function SiteNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[110] border-b border-[--border] bg-[--surface-primary]/80 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-6 h-[var(--header-height)] grid grid-cols-[1fr_max-content_1fr] items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <a href="https://purplerain.tech" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="PurpleRain Tech"
              width={1476}
              height={419}
              className="h-8 w-auto object-contain"
            />
          </a>
        </div>

        {/* Center: Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                link.isCurrent
                  ? "text-[hsl(var(--accent-500))]"
                  : "text-[--text-secondary] hover:text-[--text-primary]"
              }`}
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Right: CTA + Mobile Hamburger */}
        <div className="flex items-center justify-end gap-3">
          <div className="hidden md:flex">
            <LandingButton
              intent="primary"
              size="md"
              href="https://auth.purplerain.tech"
            >
              Sign up
            </LandingButton>
          </div>

          {/* Mobile menu sheet */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden flex flex-col items-center justify-center gap-1.5 p-2 rounded-md text-[--text-secondary] hover:text-[--text-primary] hover:bg-[--surface-secondary] transition-colors"
                aria-label="Open navigation menu"
              >
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[--surface-primary] border-[--border] flex flex-col w-[min(100%,320px)]"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-2 mt-8 flex-1">
                {navLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-xl font-medium py-3 border-b border-[--border] transition-colors ${
                      link.isCurrent
                        ? "text-[hsl(var(--accent-500))]"
                        : "text-[--text-secondary] hover:text-[--text-primary]"
                    }`}
                  >
                    {link.title}
                  </a>
                ))}
              </nav>

              <div className="pb-6">
                <LandingButton
                  intent="primary"
                  size="lg"
                  href="https://auth.purplerain.tech"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Sign up
                </LandingButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}