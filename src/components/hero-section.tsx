import { ArrowRight, ShieldCheck, Sparkles, Users, Code, Zap, Lock } from "lucide-react";

export function HeroSection() {
  const scrollToRoles = () => {
    document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToLife = () => {
    document.getElementById('life-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-[--surface-primary] border-b border-[hsl(0_0%_18%)] py-16 md:py-24">
      {/* Background ambient lighting — distinct top-left and bottom-right glow */}
      <div className="pointer-events-none absolute -top-24 left-1/4 size-[500px] rounded-full bg-[hsl(270_70%_60%/_0.15)] blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 size-[400px] rounded-full bg-[hsl(270_70%_60%/_0.10)] blur-[120px]" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Hiring Status Badge */}
            <div className="inline-flex items-center gap-2 border border-[hsl(0_0%_18%)] bg-[--surface-secondary] px-3.5 py-1.5 text-xs font-mono text-[--text-secondary]">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
              </span>
              <span className="text-[hsl(var(--accent-500))] uppercase tracking-wider font-semibold">WE'RE HIRING</span>
              <span className="text-[--text-tertiary]">•</span>
              <span className="text-[--text-secondary]">Join Our Global Engineering & Security Team</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[--text-primary] leading-[1.12]">
                Build the Immune System of the Digital World.
              </h1>
              <p className="text-base sm:text-lg text-[--text-tertiary] leading-relaxed max-w-2xl">
                PurpleRain is where elite security researchers, kernel engineers, and systems architects collaborate to protect global infrastructure from zero-day threats.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={scrollToRoles}
                className="flex h-13 px-8 items-center justify-center gap-2 text-sm font-medium text-[--text-on-accent-primary] bg-[hsl(var(--accent-500))] hover:bg-[hsl(var(--accent-600))] transition-colors cursor-pointer"
              >
                View Open Positions
                <ArrowRight className="size-4" />
              </button>
              <button
                onClick={scrollToLife}
                className="flex h-13 px-8 items-center justify-center gap-2 text-sm font-medium text-[--text-secondary] border border-[hsl(0_0%_18%)] bg-[--surface-secondary] hover:bg-[--surface-tertiary] hover:text-[--text-primary] transition-colors cursor-pointer"
              >
                Culture & Benefits
              </button>
            </div>

            {/* Key Culture Stats Strip */}
            <div className="pt-6 border-t border-[hsl(0_0%_18%)] grid grid-cols-3 gap-4 max-w-xl">
              <div>
                <div className="text-xs font-mono text-[--text-tertiary] uppercase tracking-wider">CULTURE</div>
                <div className="text-sm font-medium text-[--text-primary] mt-1 flex items-center gap-1.5">
                  <Users className="size-3.5 text-[hsl(var(--accent-500))]" />
                  Remote-First
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-[--text-tertiary] uppercase tracking-wider">EQUITY</div>
                <div className="text-sm font-medium text-[--text-primary] mt-1 flex items-center gap-1.5">
                  <Zap className="size-3.5 text-[hsl(var(--accent-500))]" />
                  High Ownership
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-[--text-tertiary] uppercase tracking-wider">IMPACT</div>
                <div className="text-sm font-medium text-[--text-primary] mt-1 flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-[hsl(var(--accent-500))]" />
                  Zero Breaches
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Culture & Team Showcase Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative border border-[hsl(0_0%_18%)] bg-[--surface-secondary] overflow-hidden shadow-2xl">
              
              {/* Card Header Bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[hsl(0_0%_18%)] bg-[--surface-primary]/60">
                <div className="flex items-center gap-2 text-xs font-mono text-[--text-tertiary] uppercase tracking-wider">
                  <span className="size-2 rounded-full bg-emerald-400" />
                  PURPLERAIN / CAREERS ECOSYSTEM
                </div>
                <span className="text-[10px] font-mono text-[hsl(var(--accent-500))] border border-[hsl(270_70%_60%/_0.3)] px-2 py-0.5">
                  LIVE HIRING
                </span>
              </div>

              {/* Card Content Features */}
              <div className="p-6 space-y-5 divide-y divide-[hsl(0_0%_18%)]">
                
                {/* Feature 1 */}
                <div className="flex items-start gap-4 pt-1 first:pt-0">
                  <figure
                    className="flex size-9 items-center justify-center border border-[hsl(0_0%_18%)] text-[hsl(270_70%_75%)] shrink-0"
                    style={{ background: "hsl(270 70% 60% / 0.08)" }}
                  >
                    <Code className="size-4" />
                  </figure>
                  <div>
                    <h3 className="text-sm font-medium text-[--text-primary]">Low-Level Systems & eBPF</h3>
                    <p className="text-xs text-[--text-tertiary] mt-1 leading-relaxed">
                      Write high-performance Rust sensors operating directly inside Linux kernel space.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4 pt-5">
                  <figure
                    className="flex size-9 items-center justify-center border border-[hsl(0_0%_18%)] text-[hsl(270_70%_75%)] shrink-0"
                    style={{ background: "hsl(270 70% 60% / 0.08)" }}
                  >
                    <Sparkles className="size-4" />
                  </figure>
                  <div>
                    <h3 className="text-sm font-medium text-[--text-primary]">AI & Red Team Research</h3>
                    <p className="text-xs text-[--text-tertiary] mt-1 leading-relaxed">
                      Pioneer vulnerability discovery against autonomous agent pipelines and enterprise AI.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4 pt-5">
                  <figure
                    className="flex size-9 items-center justify-center border border-[hsl(0_0%_18%)] text-[hsl(270_70%_75%)] shrink-0"
                    style={{ background: "hsl(270 70% 60% / 0.08)" }}
                  >
                    <Lock className="size-4" />
                  </figure>
                  <div>
                    <h3 className="text-sm font-medium text-[--text-primary]">Autonomous Ownership</h3>
                    <p className="text-xs text-[--text-tertiary] mt-1 leading-relaxed">
                      Small, empowered teams. Zero red tape. Direct architectural freedom from day one.
                    </p>
                  </div>
                </div>

              </div>

              {/* Card Footer Badge */}
              <div className="px-5 py-3 border-t border-[hsl(0_0%_18%)] bg-[--surface-primary]/40 flex items-center justify-between text-xs font-mono text-[--text-tertiary]">
                <span>7 POSITIONS LISTED</span>
                <span className="text-[hsl(var(--accent-500))] font-semibold">4 FILLED RECENTLY</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

