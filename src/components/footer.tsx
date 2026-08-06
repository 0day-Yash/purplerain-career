import { ArrowUpRight } from "lucide-react";

const footerColumns = [
  {
    title: "Company",
    links: [
      { text: "About Us", href: "https://purplerain.tech/about" },
      { text: "Our Team", href: "https://purplerain.tech/team" },
      { text: "Case Studies", href: "https://purplerain.tech/case-studies" },
      { text: "Careers", href: "/", external: false },
      { text: "Blogs", href: "https://purplerain.tech/blogs" },
      { text: "LinkedIn", href: "https://linkedin.com/company/purplerain-tech", external: true },
      { text: "Instagram", href: "https://www.instagram.com/purplerain.tech", external: true },
    ],
  },
  {
    title: "Product",
    links: [
      { text: "Platform", href: "https://purplerain.tech/details" },
      { text: "Services", href: "https://purplerain.tech/services" },
      { text: "Pricing", href: "https://purplerain.tech/pricing" },
      { text: "Onboarding", href: "https://purplerain.tech/onboarding" },
      { text: "Request a Quote", href: "https://purplerain.tech/pricing#request-quote" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Community", href: "https://community.purplerain.tech/", external: true },
      { text: "GitHub", href: "https://github.com/PurpleRainTech", external: true },
    ],
  },
  {
    title: "Security",
    links: [
      { text: "ISO 27001 Aligned", href: "https://purplerain.tech/compliance" },
      { text: "NIST Framework", href: "https://purplerain.tech/compliance" },
      { text: "CIS Controls", href: "https://purplerain.tech/compliance" },
      { text: "Internal Audits", href: "https://purplerain.tech/compliance" },
      { text: "Privacy-by-Design", href: "https://purplerain.tech/compliance" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[--border] bg-[--surface-primary]">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Top section: logo + tagline */}
        <div className="py-10 border-b border-[--border] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <a href="https://purplerain.tech" className="shrink-0">
            <img
              src="/logo.png"
              alt="PurpleRain Tech"
              width={1476}
              height={419}
              className="h-9 w-auto object-contain"
            />
          </a>
          <p className="text-sm text-[--text-tertiary] max-w-xs">
            Building the immune system for the digital world.
          </p>
        </div>

        {/* Link columns */}
        <div className="py-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h3 className="text-xs font-medium text-[--text-primary] uppercase tracking-wider">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-[--text-tertiary] hover:text-[--text-primary] transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[--border] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <a
              href="https://status.purplerain.tech/status/purplerain"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[--text-tertiary] hover:text-[--text-primary] transition-colors"
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
              </span>
              99.65% uptime
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href="mailto:careers@purplerain.tech"
              className="text-xs text-[--text-tertiary] hover:text-[--text-primary] transition-colors"
            >
              careers@purplerain.tech
            </a>
          </div>
          <p className="text-xs text-[--text-tertiary]">
            © 2025 PurpleRain Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}