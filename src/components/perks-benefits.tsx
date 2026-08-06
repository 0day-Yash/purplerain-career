import { Home, Laptop, Clock, BookOpen, Coffee, Shield, Zap } from 'lucide-react';
import { SectionShell } from './landing-primitives/section-shell';
import { LandingHeading } from './landing-primitives/landing-heading';

const B = "border-[hsl(0_0%_18%)]";

const benefits = [
  {
    icon: Home,
    title: 'Remote-First',
    description: 'Work from anywhere with reliable internet. Your best work environment is wherever you choose.'
  },
  {
    icon: Laptop,
    title: 'Premium Equipment',
    description: 'Latest MacBook Pro, multiple monitors, and hardware of your choice to maximize productivity.'
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Results matter, not clocking hours. Work when you are most productive and creative.'
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Annual learning budget for courses, conferences, certifications, and research.'
  }
];

const additionalBenefits = [
  { icon: Coffee, metric: '4 WEEKS', label: 'Paid vacation minimum' },
  { icon: BookOpen, metric: '$3,000', label: 'Annual learning budget' },
  { icon: Shield, metric: '100%', label: 'Health premium coverage' },
  { icon: Zap, metric: 'EQUITY', label: 'Meaningful ownership' }
];

export function PerksAndBenefits() {
  return (
    <SectionShell container="full" id="perks-section" className="gap-0 border-t border-b border-[hsl(0_0%_18%)] bg-[--surface-primary]">
      {/* Top Monospace Bar */}
      <div className={`w-full flex items-center justify-between px-6 py-3 border-b ${B}`}>
        <span className="text-xs font-mono text-[--text-tertiary] uppercase tracking-widest">
          BENEFITS / COMPENSATION
        </span>
        <span className="text-xs font-mono text-[hsl(var(--accent-500))]">
          WHAT YOU GET
        </span>
      </div>

      {/* Heading */}
      <div className={`w-full px-6 py-12 border-b ${B} text-center`}>
        <LandingHeading
          tag="WHY JOIN US"
          title="Benefits & Compensation"
          subtitle="We believe exceptional work deserves exceptional support. Here's what you get when you join our mission."
        />
      </div>

      {/* 4 Benefit Cards Grid */}
      <div className={`w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b ${B}`}>
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <article
              key={index}
              className={`relative flex flex-col gap-5 p-7 min-h-[220px] overflow-hidden border-b sm:border-b-0 border-r last:border-r-0 ${B} hover:bg-[--surface-secondary] transition-colors duration-200`}
            >
              {/* Corner glow */}
              <div
                className="pointer-events-none absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-32 h-32 rounded-full blur-[50px]"
                style={{ background: "hsl(270 70% 60% / 0.2)" }}
              />

              <figure
                className={`relative z-10 flex size-9 items-center justify-center border ${B} text-[hsl(270_70%_75%)]`}
                style={{ background: "hsl(270 70% 60% / 0.08)" }}
              >
                <Icon className="size-4" />
              </figure>

              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="text-base font-medium text-[--text-primary]">{benefit.title}</h3>
                <p className="text-sm text-[--text-tertiary] leading-relaxed">{benefit.description}</p>
              </div>
            </article>
          );
        })}
      </div>

      {/* "The Numbers" Strip */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 border-b border-[hsl(0_0%_18%)]">
        {additionalBenefits.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`p-6 border-r last:border-r-0 ${B} flex flex-col items-center text-center gap-2 hover:bg-[--surface-secondary] transition-colors`}
            >
              <figure
                className={`flex size-9 items-center justify-center border ${B} text-[hsl(270_70%_75%)] mb-1`}
                style={{ background: "hsl(270 70% 60% / 0.08)" }}
              >
                <Icon className="size-4" />
              </figure>
              <div className="text-2xl font-semibold text-[--text-primary] font-mono">{item.metric}</div>
              <p className="text-xs text-[--text-tertiary]">{item.label}</p>
            </div>
          );
        })}
      </div>

      {/* Philosophy Callout */}
      <div className="w-full px-6 py-10 text-center bg-[--surface-secondary]/20">
        <div className="max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono text-[hsl(var(--accent-500))] uppercase tracking-widest">
            OUR PHILOSOPHY
          </span>
          <p className="text-sm md:text-base text-[--text-tertiary] leading-relaxed">
            Great security requires great people. Great people deserve great support.{' '}
            <strong className="text-[--text-primary] font-medium block mt-2">
              We invest in your success because your success is our success—and the world's security depends on both.
            </strong>
          </p>
        </div>
      </div>

      <div className={`w-full border-b ${B}`} />
    </SectionShell>
  );
}
