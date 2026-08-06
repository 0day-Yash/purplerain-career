import { useState } from 'react';
import { MapPin, Clock, ChevronDown, ChevronUp, ArrowUpRight, DollarSign, Code, Brain, Briefcase, Info } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SectionShell } from './landing-primitives/section-shell';
import { LandingHeading } from './landing-primitives/landing-heading';
import jobsData from '@/data/jobs.json';

const B = "border-[hsl(0_0%_18%)]";

const iconMap: Record<string, any> = {
  Security: Code,
  Marketing: Briefcase,
  Engineering: Brain,
  Research: Brain,
};

const filterCategories = [
  { id: 'all', label: 'ALL ROLES' },
  { id: 'Full-Time', label: 'FULL-TIME' },
  { id: 'Internship', label: 'INTERNSHIPS' },
  { id: 'Engineering', label: 'ENGINEERING' },
  { id: 'Security', label: 'SECURITY' },
  { id: 'Research', label: 'RESEARCH' },
];

export function OpenRoles() {
  const [filter, setFilter] = useState<string>('all');
  const [expandedRoles, setExpandedRoles] = useState<Set<string>>(new Set());

  const filteredRoles = jobsData.jobs.filter(role =>
    filter === 'all' || role.type === filter || role.department === filter
  );

  const toggleRole = (roleId: string) => {
    const newExpanded = new Set(expandedRoles);
    if (newExpanded.has(roleId)) {
      newExpanded.delete(roleId);
    } else {
      newExpanded.add(roleId);
    }
    setExpandedRoles(newExpanded);
  };

  return (
    <SectionShell container="full" id="open-roles" className="gap-0 border-t border-b border-[hsl(0_0%_18%)] bg-[--surface-primary]">
      {/* Top Monospace Bar */}
      <div className={`w-full flex items-center justify-between px-6 py-3 border-b ${B}`}>
        <span className="text-xs font-mono text-[--text-tertiary] uppercase tracking-widest">
          POSITIONS / OPPORTUNITIES
        </span>
        <span className="text-xs font-mono text-[hsl(var(--accent-500))]">
          {filteredRoles.length} ACTIVE POSITIONS
        </span>
      </div>

      {/* Heading */}
      <div className={`w-full px-6 py-12 border-b ${B} text-center`}>
        <LandingHeading
          tag="JOIN OUR TEAM"
          title="Open Positions"
          subtitle="We're looking for exceptional engineers, researchers, and security specialists to build the future of digital defense."
        />
      </div>

      {/* Filter Tabs Bar */}
      <div className={`w-full flex flex-wrap items-center justify-center border-b ${B} bg-[--surface-primary]`}>
        {filterCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`h-11 px-5 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer border-r last:border-r-0 ${B} ${
              filter === cat.id
                ? 'bg-[hsl(var(--accent-500))] text-[--text-on-accent-primary]'
                : 'text-[--text-secondary] hover:bg-[--surface-secondary] hover:text-[--text-primary]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Roles Grid */}
      <div className="w-full max-w-6xl mx-auto p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRoles.map((role) => {
            const isExpanded = expandedRoles.has(role.id);
            const RoleIcon = iconMap[role.department] || Code;

            return (
              <article
                key={role.id}
                className={`relative flex flex-col justify-between overflow-hidden border ${B} bg-[--surface-primary] hover:bg-[--surface-secondary] transition-colors duration-200`}
              >
                {/* Corner Glow */}
                <div
                  className="pointer-events-none absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-40 h-40 rounded-full blur-[60px]"
                  style={{ background: 'hsl(270 70% 60% / 0.15)' }}
                />

                {/* Top Role Header */}
                <div className={`p-6 border-b ${B} space-y-4`}>
                  <div className="flex items-center justify-between">
                    <figure
                      className={`flex size-10 items-center justify-center border ${B} text-[hsl(270_70%_75%)]`}
                      style={{ background: 'hsl(270 70% 60% / 0.08)' }}
                    >
                      <RoleIcon className="size-5" />
                    </figure>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[--text-tertiary] uppercase tracking-widest">
                        {role.department}
                      </span>
                      {(role.status === 'Closed' || role.status === 'Filled') && (
                        <span className="text-[10px] font-mono text-amber-400 border border-amber-500/30 px-1.5 py-0.5 uppercase">
                          {role.status === 'Filled' ? 'FILLED' : 'CLOSED'}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-[--text-primary] mb-2">{role.title}</h3>
                    <p className="text-xs md:text-sm text-[--text-tertiary] leading-relaxed line-clamp-3">
                      {role.description}
                    </p>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[--text-tertiary] pt-2">
                    <span className="flex items-center gap-1">
                      <Clock className="size-3.5" />
                      {role.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3.5" />
                      {role.location}
                    </span>
                    {role.salary && (
                      <span className="flex items-center gap-1 text-[hsl(var(--accent-500))] font-semibold">
                        <DollarSign className="size-3.5" />
                        {role.salary}
                      </span>
                    )}
                  </div>
                </div>

                {/* Quick Details Collapsible */}
                <Collapsible open={isExpanded} onOpenChange={() => toggleRole(role.id)}>
                  <div className={`px-6 py-3 border-b ${B} flex items-center justify-between`}>
                    <CollapsibleTrigger asChild>
                      <button className="flex items-center gap-1 text-xs font-mono text-[hsl(var(--accent-500))] hover:underline cursor-pointer">
                        {isExpanded ? 'LESS DETAILS' : 'VIEW DETAILS'}
                        {isExpanded ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
                      </button>
                    </CollapsibleTrigger>
                    <a
                      href={`/jobs/${role.id}`}
                      className="text-xs font-mono text-[--text-tertiary] hover:text-[--text-primary] transition-colors"
                    >
                      FULL PAGE →
                    </a>
                  </div>

                  <CollapsibleContent className={`p-6 border-b ${B} bg-[--surface-secondary]/40 space-y-4`}>
                    <div>
                      <h4 className="text-xs font-mono text-[--text-secondary] uppercase mb-1">About the Role</h4>
                      <p className="text-xs text-[--text-tertiary] leading-relaxed">{role.fullDescription}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-[--text-secondary] uppercase mb-1">Requirements</h4>
                      <ul className="space-y-1.5 text-xs text-[--text-tertiary]">
                        {role.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[hsl(var(--accent-500))] font-bold">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Card Footer CTA Button — Exact Landing Page Button */}
                <div>
                  {(role.status === 'Closed' || role.status === 'Filled') ? (
                    <div className="flex items-center justify-center h-12 text-xs font-mono uppercase text-[--text-tertiary] bg-[--surface-secondary] cursor-not-allowed border-t border-[hsl(0_0%_18%)]">
                      {role.status === 'Filled' ? 'POSITION FILLED' : 'APPLICATIONS CLOSED'}
                    </div>
                  ) : (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="w-full flex items-center justify-center gap-2 h-12 text-sm font-medium transition-colors bg-[hsl(var(--accent-500))] text-[--text-on-accent-primary] hover:bg-[hsl(var(--accent-600))] cursor-pointer">
                          Apply Position
                          <ArrowUpRight className="size-4" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className={`bg-[--surface-primary] border ${B} text-[--text-primary] max-w-lg p-6 rounded-none`}>
                        <DialogHeader>
                          <DialogTitle className="text-xl font-medium text-[--text-primary]">
                            Application Instructions
                          </DialogTitle>
                          <DialogDescription className="text-[--text-tertiary]">
                            Follow these steps before scheduling your interview for {role.title}.
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-4 py-3">
                          <div className={`p-4 bg-[--surface-secondary] border ${B} space-y-3`}>
                            <h4 className="font-mono text-xs text-[--text-primary] flex items-center gap-2 uppercase">
                              <Info className="size-4 text-[hsl(var(--accent-500))]" />
                              Before Scheduling:
                            </h4>
                            <ol className="text-xs md:text-sm text-[--text-secondary] space-y-2 list-decimal list-inside leading-relaxed">
                              <li>
                                Upload resume & documents to{' '}
                                <a
                                  href="https://drive.google.com"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[hsl(var(--accent-500))] hover:underline font-mono"
                                >
                                  Google Drive
                                </a>
                              </li>
                              <li>Set folder permissions to public link access</li>
                              <li>Copy the share link</li>
                              <li>Include the share link in your interview booking notes</li>
                            </ol>
                          </div>

                          <button
                            onClick={() => window.open(role.interviewLink, '_blank')}
                            className="w-full flex items-center justify-center gap-2 h-12 text-sm font-medium transition-colors bg-[hsl(var(--accent-500))] text-[--text-on-accent-primary] hover:bg-[hsl(var(--accent-600))] cursor-pointer"
                          >
                            Continue to Schedule Interview
                            <ArrowUpRight className="size-4" />
                          </button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {filteredRoles.length === 0 && (
          <div className={`text-center py-16 border ${B} bg-[--surface-secondary]`}>
            <p className="text-[--text-tertiary] text-sm font-mono">NO POSITIONS FOUND FOR THIS FILTER.</p>
          </div>
        )}
      </div>

      <div className={`w-full border-b ${B}`} />
    </SectionShell>
  );
}
