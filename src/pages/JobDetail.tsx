import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SiteNavbar } from '@/components/site-navbar';
import { Footer } from '@/components/footer';
import { SectionShell } from '@/components/landing-primitives/section-shell';
import { ArrowLeft, MapPin, Clock, DollarSign, ArrowUpRight, Briefcase, Code, Brain } from 'lucide-react';
import jobsData from '@/data/jobs.json';

const B = "border-[hsl(0_0%_18%)]";

const iconMap: Record<string, any> = {
  Security: Code,
  Marketing: Briefcase,
  Engineering: Brain,
  Research: Brain,
};

export function JobDetail() {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();

  const job = jobsData.jobs.find(j => j.id === jobId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!job) {
    return (
      <div className="min-h-screen bg-[--surface-primary] text-[--text-primary]">
        <SiteNavbar />
        <SectionShell container="full" className="py-32 text-center border-b border-[hsl(0_0%_18%)]">
          <h1 className="text-3xl font-medium mb-4">Position Not Found</h1>
          <p className="text-[--text-tertiary] mb-8 text-sm font-mono">THE POSITION YOU ARE LOOKING FOR DOES NOT EXIST OR HAS BEEN REMOVED.</p>
          <button
            onClick={() => navigate('/')}
            className={`flex items-center gap-2 h-11 px-6 text-xs font-mono uppercase transition-colors border ${B} text-[--text-secondary] hover:bg-[--surface-secondary] cursor-pointer mx-auto`}
          >
            <ArrowLeft className="size-3.5" />
            Back to Careers
          </button>
        </SectionShell>
        <Footer />
      </div>
    );
  }

  const RoleIcon = iconMap[job.department] || Code;

  return (
    <div className="min-h-screen bg-[--surface-primary] text-[--text-primary]">
      <SiteNavbar />
      
      {/* Header Section */}
      <section className={`relative pt-10 pb-12 border-b ${B} bg-[--surface-primary]`}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-6">
            <button
              onClick={() => navigate('/')}
              className={`flex items-center gap-2 h-9 px-4 text-xs font-mono uppercase transition-colors border ${B} text-[--text-secondary] hover:bg-[--surface-secondary] cursor-pointer`}
            >
              <ArrowLeft className="size-3.5" />
              ALL OPEN POSITIONS
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <figure
                className={`flex size-12 items-center justify-center border ${B} text-[hsl(270_70%_75%)] shrink-0 mt-1`}
                style={{ background: "hsl(270 70% 60% / 0.08)" }}
              >
                <RoleIcon className="size-6" />
              </figure>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[--text-primary]">
                  {job.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3 mt-3 text-xs font-mono text-[--text-tertiary]">
                  <span className="border border-[hsl(0_0%_18%)] bg-[--surface-tertiary] px-2.5 py-0.5 uppercase tracking-wider text-[--text-secondary]">
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3.5" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3.5" />
                    {job.location}
                  </span>
                  {job.salary && (
                    <span className="flex items-center gap-1 text-[hsl(var(--accent-500))] font-semibold">
                      <DollarSign className="size-3.5" />
                      {job.salary}
                    </span>
                  )}
                  {job.status === 'Closed' && (
                    <span className="text-[10px] font-mono text-red-400 border border-red-500/30 px-1.5 py-0.5">
                      CLOSED
                    </span>
                  )}
                </div>
              </div>
            </div>

            <p className="text-base md:text-lg text-[--text-secondary] leading-relaxed max-w-3xl">
              {job.description}
            </p>

            {/* Application Instructions */}
            {job.status === 'Closed' ? (
              <div className={`p-5 bg-red-500/5 border border-red-500/20 text-xs font-mono text-[--text-tertiary]`}>
                <strong className="text-red-400 uppercase block mb-1">APPLICATIONS CLOSED</strong>
                We are no longer accepting applications for this position. Thank you for your interest in PurpleRain Tech.
              </div>
            ) : (
              <div className={`p-6 bg-[--surface-secondary]/40 border ${B} space-y-3`}>
                <h3 className="text-xs font-mono uppercase text-[--text-primary] tracking-wider">Application Instructions</h3>
                <ol className="text-xs md:text-sm text-[--text-secondary] space-y-2 list-decimal list-inside leading-relaxed">
                  <li>Upload resume & portfolio documents to <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--accent-500))] hover:underline font-mono">Google Drive</a></li>
                  <li>Set file/folder permissions to public link access</li>
                  <li>Copy the shareable link</li>
                  <li>When scheduling your interview, include your share link in the notes</li>
                </ol>
              </div>
            )}

            {/* Action CTA */}
            <div>
              {job.status === 'Closed' ? (
                <div className="flex h-12 w-full md:w-auto px-8 items-center justify-center text-xs font-mono uppercase text-[--text-tertiary] bg-[--surface-secondary] cursor-not-allowed border border-[hsl(0_0%_18%)]">
                  APPLICATIONS CLOSED
                </div>
              ) : (
                <button
                  onClick={() => window.open(job.interviewLink, '_blank')}
                  className="flex h-14 w-full md:w-auto px-8 items-center justify-center gap-2 text-base font-medium text-[--text-on-accent-primary] bg-[hsl(var(--accent-500))] hover:bg-[hsl(var(--accent-600))] cursor-pointer transition-colors"
                >
                  Apply for this Position
                  <ArrowUpRight className="size-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Body */}
      <section className="py-16 bg-[--surface-primary]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="md:col-span-2 space-y-8">
              <div className={`bg-[--surface-primary] border ${B} p-6 md:p-8 space-y-3`}>
                <h2 className="text-xs font-mono text-[--text-secondary] uppercase tracking-wider">About This Role</h2>
                <p className="text-sm md:text-base text-[--text-tertiary] leading-relaxed">
                  {job.fullDescription}
                </p>
              </div>

              {job.responsibilities && (
                <div className={`bg-[--surface-primary] border ${B} p-6 md:p-8 space-y-4`}>
                  <h2 className="text-xs font-mono text-[--text-secondary] uppercase tracking-wider">Responsibilities</h2>
                  <ul className="space-y-3 text-sm md:text-base text-[--text-tertiary]">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[hsl(var(--accent-500))] font-bold">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {job.benefits && (
                <div className={`bg-[--surface-primary] border ${B} p-6 md:p-8 space-y-4`}>
                  <h2 className="text-xs font-mono text-[--text-secondary] uppercase tracking-wider">What We Offer</h2>
                  <ul className="space-y-3 text-sm md:text-base text-[--text-tertiary]">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[hsl(var(--accent-500))] font-bold">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar Column */}
            <div className="space-y-6">
              <div className={`bg-[--surface-primary] border ${B} p-6 space-y-6 sticky top-24`}>
                <div>
                  <h3 className="text-xs font-mono text-[--text-secondary] uppercase tracking-wider mb-3">Apply Now</h3>
                  {job.status === 'Closed' ? (
                    <div className="flex h-11 w-full items-center justify-center text-xs font-mono uppercase text-[--text-tertiary] bg-[--surface-secondary] border border-[hsl(0_0%_18%)] cursor-not-allowed">
                      CLOSED
                    </div>
                  ) : (
                    <button
                      onClick={() => window.open(job.interviewLink, '_blank')}
                      className="w-full flex items-center justify-center gap-2 h-11 text-sm font-medium transition-colors bg-[hsl(var(--accent-500))] text-[--text-on-accent-primary] hover:bg-[hsl(var(--accent-600))] cursor-pointer"
                    >
                      Schedule Interview
                      <ArrowUpRight className="size-4" />
                    </button>
                  )}
                  <p className="text-xs font-mono text-[--text-tertiary] text-center mt-2">
                    {job.status === 'Closed' ? 'CLOSED' : "RESPONSE WITHIN 48 HOURS"}
                  </p>
                </div>

                {job.preferredRegions && (
                  <div className={`pt-4 border-t ${B} space-y-2`}>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[--text-tertiary]">Preferred Regions</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.preferredRegions.map((region, index) => (
                        <span key={index} className={`border ${B} bg-[--surface-tertiary] px-2.5 py-0.5 text-xs font-mono text-[--text-secondary]`}>
                          {region}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className={`pt-4 border-t ${B} space-y-2`}>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[--text-tertiary]">Share position</h4>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                    }}
                    className={`w-full flex items-center justify-center h-10 text-xs font-mono uppercase transition-colors border ${B} text-[--text-secondary] hover:bg-[--surface-secondary] cursor-pointer`}
                  >
                    Copy Share Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


