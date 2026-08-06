import { Shield, Users, Globe, Target, Brain, Lock, Cpu, Network } from 'lucide-react';
import { SectionShell } from './landing-primitives/section-shell';
import { LandingHeading } from './landing-primitives/landing-heading';

const B = "border-[hsl(0_0%_18%)]";

const principles = [
  {
    icon: Shield,
    title: 'Security by Design',
    description: 'Every decision starts with security as the foundation, not an afterthought.'
  },
  {
    icon: Brain,
    title: 'Intellectual Rigor',
    description: 'We tackle the hardest problems with deep thinking and research-driven approaches.'
  },
  {
    icon: Target,
    title: 'Impact Over Activity',
    description: 'We measure success by threats prevented and digital lives protected.'
  },
  {
    icon: Users,
    title: 'Collective Excellence',
    description: 'Diverse perspectives create stronger solutions and better security.'
  }
];

const stats = [
  { icon: Network, metric: '24/7', label: 'Global threat monitoring' },
  { icon: Globe, metric: '15+', label: 'Countries represented' },
  { icon: Lock, metric: 'Zero', label: 'Successful breaches' },
  { icon: Cpu, metric: '99.9%', label: 'Platform uptime' }
];

export function LifeAtPurpleRain() {
  return (
    <SectionShell container="full" id="life-section" className="gap-0 border-t border-b border-[hsl(0_0%_18%)] bg-[--surface-primary]">
      {/* Top Monospace Bar */}
      <div className={`w-full flex items-center justify-between px-6 py-3 border-b ${B}`}>
        <span className="text-xs font-mono text-[--text-tertiary] uppercase tracking-widest">
          CULTURE / VALUES
        </span>
        <span className="text-xs font-mono text-[hsl(var(--accent-500))]">
          OUR MISSION
        </span>
      </div>

      {/* Heading */}
      <div className={`w-full px-6 py-12 border-b ${B} text-center`}>
        <LandingHeading
          tag="OUR CULTURE"
          title="Life at PurpleRain"
          subtitle="We're architecting the immune system for the digital world. This is where brilliant minds come to solve problems that matter."
        />
      </div>

      {/* Principles Grid — exact landing-v2 items grid with border dividers */}
      <div className={`w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b ${B}`}>
        {principles.map((principle, index) => {
          const Icon = principle.icon;
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
                <h3 className="text-base font-medium text-[--text-primary]">{principle.title}</h3>
                <p className="text-sm text-[--text-tertiary] leading-relaxed">{principle.description}</p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Mission Callout Strip */}
      <div className={`w-full px-6 py-10 border-b ${B} bg-[--surface-secondary]/30 text-center`}>
        <div className="max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono text-[hsl(var(--accent-500))] uppercase tracking-widest">
            CORE PURPOSE
          </span>
          <p className="text-base md:text-lg text-[--text-secondary] leading-relaxed">
            Every day, sophisticated attackers probe for weaknesses in critical systems.{' '}
            <strong className="text-[--text-primary] font-medium">
              We exist to make those attacks fail through superior engineering and uncompromising standards.
            </strong>
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`p-6 border-r last:border-r-0 ${B} flex items-center gap-4 hover:bg-[--surface-secondary] transition-colors`}
            >
              <figure
                className={`flex size-9 items-center justify-center border ${B} text-[hsl(270_70%_75%)] shrink-0`}
                style={{ background: "hsl(270 70% 60% / 0.08)" }}
              >
                <Icon className="size-4" />
              </figure>
              <div>
                <div className="text-xl font-medium text-[--text-primary]">{stat.metric}</div>
                <p className="text-xs text-[--text-tertiary]">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={`w-full border-b ${B}`} />
    </SectionShell>
  );
}
