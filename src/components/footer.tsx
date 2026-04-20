import { Separator } from '@/components/ui/separator';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-pr-primary/10 border border-pr-primary/20 flex items-center justify-center mr-4 p-2">
                <img src="/favicon.svg" alt="PurpleRain" className="w-full h-full" />
              </div>
              <span className="font-display text-2xl text-foreground">PurpleRain</span>
            </div>
            <p className="font-body text-muted-foreground/80 leading-relaxed mb-6 text-sm">
              Building the immune system for the digital world. Defending what matters most through superior engineering and uncompromising standards.
            </p>
            <div className="flex flex-wrap gap-2 opacity-50 transition-opacity hover:opacity-100 grayscale hover:grayscale-0">
              <span className="inline-flex items-center rounded-sm border border-foreground/20 bg-foreground/5 px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase text-foreground/80">
                ISO 27001 Aligned
              </span>
              <span className="inline-flex items-center rounded-sm border border-foreground/20 bg-foreground/5 px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase text-foreground/80">
                GDPR Ready
              </span>
            </div>
            <p className="font-body text-muted-foreground/80 mt-6 text-xs">
              © 2025 PurpleRain Tech. Defending the digital future.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-foreground/90 mb-4 text-sm font-medium">Company</h4>
            <ul className="space-y-3">
              <li><a href="https://purplerain.tech/about" className="font-body text-muted-foreground/80 hover:text-foreground text-sm transition-colors">About Us</a></li>
              <li><a href="https://purplerain.tech/team" className="font-body text-muted-foreground/80 hover:text-foreground text-sm transition-colors">Our Team</a></li>
              <li><a href="https://purplerain.tech/case-studies" className="font-body text-muted-foreground/80 hover:text-foreground text-sm transition-colors">Case Studies</a></li>
              <li><a href="/" className="font-body text-pr-primary hover:text-pr-primary/90 text-sm transition-colors font-medium">Careers</a></li>
              <li><a href="https://purplerain.tech/blogs" className="font-body text-muted-foreground/80 hover:text-foreground text-sm transition-colors">Blogs</a></li>
              <li><a href="https://linkedin.com/company/purplerain-tech" target="_blank" rel="noopener noreferrer" className="font-body text-muted-foreground/80 hover:text-foreground text-sm transition-colors">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/purplerain.tech" target="_blank" rel="noopener noreferrer" className="font-body text-muted-foreground/80 hover:text-foreground text-sm transition-colors">Instagram</a></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-heading text-foreground/90 mb-4 text-sm font-medium">Product</h4>
            <ul className="space-y-3">
              <li><a href="https://purplerain.tech/details" className="font-body text-muted-foreground/80 hover:text-foreground text-sm transition-colors">Platform</a></li>
              <li><a href="https://purplerain.tech/services" className="font-body text-muted-foreground/80 hover:text-foreground text-sm transition-colors">Services</a></li>
              <li><a href="https://purplerain.tech/pricing" className="font-body text-muted-foreground/80 hover:text-foreground text-sm transition-colors">Pricing</a></li>
              <li><a href="https://purplerain.tech/onboarding" className="font-body text-muted-foreground/80 hover:text-foreground text-sm transition-colors">Onboarding</a></li>
              <li><a href="https://purplerain.tech/pricing#request-quote" className="font-body text-muted-foreground/80 hover:text-foreground text-sm transition-colors">Request a Quote</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading text-foreground/90 mb-4 text-sm font-medium">Resources</h4>
            <ul className="space-y-3">
              <li><a href="https://community.purplerain.tech/" target="_blank" rel="noopener noreferrer" className="font-body text-muted-foreground/80 hover:text-foreground text-sm transition-colors">Community</a></li>
              <li><a href="https://github.com/PurpleRainTech" target="_blank" rel="noopener noreferrer" className="font-body text-muted-foreground/80 hover:text-foreground text-sm transition-colors">GitHub</a></li>
            </ul>
          </div>

          {/* Security */}
          <div>
            <h4 className="font-heading text-foreground/90 mb-4 text-sm font-medium">Security</h4>
            <ul className="space-y-3">
              <li><a href="https://purplerain.tech/compliance" className="font-body text-muted-foreground/80 hover:text-foreground text-sm transition-colors">ISO 27001 Aligned</a></li>
              <li><a href="https://purplerain.tech/compliance" className="font-body text-muted-foreground/80 hover:text-foreground text-sm transition-colors">NIST Framework</a></li>
              <li><a href="https://purplerain.tech/compliance" className="font-body text-muted-foreground/80 hover:text-foreground text-sm transition-colors">CIS Controls</a></li>
              <li><a href="https://purplerain.tech/compliance" className="font-body text-muted-foreground/80 hover:text-foreground text-sm transition-colors">Internal Audits</a></li>
              <li><a href="https://purplerain.tech/compliance" className="font-body text-muted-foreground/80 hover:text-foreground text-sm transition-colors">Privacy-by-Design</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-border" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <a
            href="https://status.purplerain.tech/status/purplerain"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground/80 hover:text-foreground transition-colors underline decoration-muted-foreground/40 underline-offset-2 hover:decoration-foreground/60"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>99.65% uptime</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="mailto:careers@purplerain.tech" className="text-muted-foreground/80 hover:text-foreground text-sm transition-colors">
              careers@purplerain.tech
            </a>
            <span className="text-muted-foreground/40">•</span>
            <a href="https://purplerain.tech" className="flex items-center gap-1 text-muted-foreground/80 hover:text-foreground text-sm transition-colors underline decoration-muted-foreground/40 underline-offset-2 hover:decoration-foreground/60">
              purplerain.tech
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}