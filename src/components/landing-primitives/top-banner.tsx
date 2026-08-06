import { ArrowRight } from "lucide-react";

export function TopBanner() {
  return (
    <div className="w-full bg-[hsl(270_45%_10%)] border-b border-[hsl(270_50%_22%)] text-[--text-primary] text-xs md:text-sm py-2.5 px-4 relative z-[120] transition-colors">
      <div className="container mx-auto flex items-center justify-center gap-2 md:gap-3 text-center flex-wrap">
        <a
          href="https://purplerain.tech/blogs/purplerain-raises-pre-seed"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 hover:opacity-95 transition-all flex-wrap justify-center"
        >
          <span className="text-[--text-secondary] group-hover:text-[--text-primary] transition-colors">
            PurpleRain raises <strong className="text-[--text-primary] font-semibold">₹40 Lakhs</strong> at <strong className="text-[--text-primary] font-semibold">₹5.7 Cr valuation</strong> <span className="hidden sm:inline text-[--text-tertiary] font-normal">($42k USD at $590k valuation)</span>
          </span>
          <span className="inline-flex items-center gap-1 font-medium text-[hsl(var(--accent-500))] group-hover:text-[hsl(270,80%,72%)] transition-colors">
            Read Announcement
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </a>
      </div>
    </div>
  );
}
