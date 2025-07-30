import { HeroSection } from '@/components/hero-section';
import { OpenRoles } from '@/components/open-roles';
import { LifeAtPurpleRain } from '@/components/life-at-purplerain';
import { PerksAndBenefits } from '@/components/perks-benefits';
import { ResumeSubmission } from '@/components/resume-submission';
import { MeetTheTeam } from '@/components/meet-team';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { SiteNavbar } from './components/site-navbar';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <SiteNavbar/>
      <HeroSection />
      <OpenRoles />
      <LifeAtPurpleRain />
      <PerksAndBenefits />
      <ResumeSubmission />
      <MeetTheTeam />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;