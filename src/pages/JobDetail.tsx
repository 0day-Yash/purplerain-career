import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SiteNavbar } from '@/components/site-navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, MapPin, Clock, DollarSign, ArrowUpRight, Briefcase, Code, Brain } from 'lucide-react';
import jobsData from '@/data/jobs.json';

const iconMap: Record<string, any> = {
  Security: Code,
  Marketing: Briefcase,
  Engineering: Brain,
  Research: Brain,
};

export function JobDetail() {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const job = jobsData.jobs.find(j => j.id === jobId);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <SiteNavbar />
        <div className="max-w-4xl mx-auto px-8 py-32 text-center">
          <h1 className="font-display text-4xl mb-6">Job Not Found</h1>
          <p className="text-muted-foreground mb-8">The position you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Careers
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const RoleIcon = iconMap[job.department] || Code;

  return (
    <div className="min-h-screen bg-background w-full">
      <SiteNavbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className={`mb-8 ${isVisible ? 'animate-fade-in' : ''}`}
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to All Positions
          </Button>

          <div className={`${isVisible ? 'animate-slide-in-up' : ''}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-pr-primary/10 border border-border flex items-center justify-center">
                <RoleIcon className="w-8 h-8 text-pr-primary" />
              </div>
              <div>
                <h1 className="font-display text-4xl md:text-5xl mb-2">{job.title}</h1>
                <div className="flex flex-wrap items-center gap-4 font-body text-sm">
                  <Badge variant="outline" className="border-border text-muted-foreground rounded-md px-3 py-1 font-medium">
                    {job.department}
                  </Badge>
                  <div className="flex items-center text-muted-foreground font-medium">
                    <Clock className="w-4 h-4 mr-1" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-muted-foreground font-medium">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </div>
                  {job.salary && (
                    <div className="flex items-center text-pr-primary font-semibold">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {job.salary}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <p className="font-body text-xl text-muted-foreground leading-relaxed mb-8">
              {job.description}
            </p>

            <div className="mb-8 p-6 bg-muted/20 rounded-xl border border-border backdrop-blur-sm">
              <h3 className="font-heading text-lg mb-4">Application Instructions</h3>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                <li>Upload your resume, portfolio, and any relevant documents to <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer" className="text-pr-primary hover:underline font-medium">Google Drive</a></li>
                <li>Make the folder/files publicly accessible (Anyone with the link can view)</li>
                <li>Copy the shareable link</li>
                <li>When scheduling your interview, include:
                  <ul className="ml-6 mt-2 space-y-1 list-disc">
                    <li>Position applying for: <span className="font-semibold text-foreground">{job.title}</span></li>
                    <li>Your Google Drive link with resume and documents</li>
                  </ul>
                </li>
              </ol>
            </div>

            <Button 
              size="lg"
              className="bg-white text-black font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] group"
              onClick={() => window.open(job.interviewLink, '_blank')}
            >
              Apply for this Position
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              <Card className={`premium-card ${isVisible ? 'animate-slide-in-up' : ''}`} style={{ animationDelay: '200ms' }}>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl mb-6">About This Role</h2>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {job.fullDescription}
                  </p>
                </CardContent>
              </Card>

              {job.responsibilities && (
                <Card className={`premium-card ${isVisible ? 'animate-slide-in-up' : ''}`} style={{ animationDelay: '300ms' }}>
                  <CardContent className="p-8">
                    <h2 className="font-heading text-2xl mb-6">Responsibilities</h2>
                    <ul className="space-y-4">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index} className="font-body text-muted-foreground flex items-start">
                          <span className="text-pr-primary mr-3 mt-1 font-bold text-lg">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {job.benefits && (
                <Card className={`premium-card ${isVisible ? 'animate-slide-in-up' : ''}`} style={{ animationDelay: '400ms' }}>
                  <CardContent className="p-8">
                    <h2 className="font-heading text-2xl mb-6">What We Offer</h2>
                    <ul className="space-y-4">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="font-body text-muted-foreground flex items-start">
                          <span className="text-pr-primary mr-3 mt-1 font-bold text-lg">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className={`premium-card sticky top-24 ${isVisible ? 'animate-slide-in-up' : ''}`} style={{ animationDelay: '200ms' }}>
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg mb-6">Apply Now</h3>
                  
                  <Button 
                    className="w-full bg-white text-black font-semibold py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] group mb-4"
                    onClick={() => window.open(job.interviewLink, '_blank')}
                  >
                    Schedule Interview
                    <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We'll review your application within 48 hours
                  </p>

                  {job.preferredRegions && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="font-heading text-sm mb-3">Preferred Regions</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.preferredRegions.map((region, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {region}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-heading text-sm mb-3">Share this Job</h4>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        const url = window.location.href;
                        navigator.clipboard.writeText(url);
                      }}
                      className="w-full"
                    >
                      Copy Link
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
