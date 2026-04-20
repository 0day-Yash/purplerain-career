import { HeroSection } from '@/components/hero-section';
import { OpenRoles } from '@/components/open-roles';
import { LifeAtPurpleRain } from '@/components/life-at-purplerain';
import { PerksAndBenefits } from '@/components/perks-benefits';
import { ResumeSubmission } from '@/components/resume-submission';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { SiteNavbar } from '@/components/site-navbar';

export function Home() {
  return (
    <div className="min-h-screen bg-background w-full">
      <SiteNavbar />
      <HeroSection />
      <OpenRoles />
      <LifeAtPurpleRain />
      <PerksAndBenefits />
      <ResumeSubmission />
      <Footer />
      <Toaster />
    </div>
  );
}
