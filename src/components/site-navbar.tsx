import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";

export function SiteNavbar() {
  return (
    <header className="px-4 sm:px-8 bg-background sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-sm">
      <div className="flex items-center justify-between h-16 max-w-screen-xl mx-auto">
        {/* Left Side: Logo */}
        <div className="flex items-center gap-2">
          <a href="https://purplerain.tech" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="PurpleRain Tech"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </a>
        </div>
        
        {/* Right Side: Nav Links and Button (for Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <a href="https://purplerain.tech/team" className="text-muted-foreground hover:text-foreground text-sm transition-colors font-body">
              Team
            </a>
            <a href="https://purplerain.tech/services" className="text-muted-foreground hover:text-foreground text-sm transition-colors font-body">
              Services
            </a>
            <a href="https://purplerain.tech/pricing" className="text-muted-foreground hover:text-foreground text-sm transition-colors font-body">
              Pricing
            </a>
            <a href="https://purplerain.tech/blogs" className="text-muted-foreground hover:text-foreground text-sm transition-colors font-body">
              Blogs
            </a>
            <a href="https://purplerain.tech/about" className="text-muted-foreground hover:text-foreground text-sm transition-colors font-body">
              About
            </a>
            <a href="/" className="text-pr-primary hover:text-pr-primary/90 text-sm transition-colors font-body font-medium">
              Careers
            </a>
          </nav>
          
          <Button variant="default" asChild>
            <a href="https://auth.purplerain.tech" className="font-body">
              Sign up
            </a>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="size-9 p-0 text-foreground"
                aria-label="Toggle menu"
              >
                <svg
                  width="15"
                  height="11"
                  viewBox="0 0 15 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="15" y2="0.5" stroke="currentColor" />
                  <line y1="5.5" x2="15" y2="5.5" stroke="currentColor" />
                  <line y1="10.5" x2="15" y2="10.5" stroke="currentColor" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-8 w-[min(100%,320px)] border-l border-white/10 bg-black/95 backdrop-blur-xl">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <div className="flex flex-col gap-10 py-8 px-2">
                <div className="flex flex-col gap-6">
                  <span className="text-[10px] font-black tracking-[0.3em] text-pr-primary uppercase opacity-50 px-1">Navigation</span>
                  <div className="flex flex-col gap-4">
                    <a href="https://purplerain.tech/team" className="text-white hover:text-pr-primary text-xl font-medium transition-all duration-300 transform hover:translate-x-2">
                      Team
                    </a>
                    <a href="https://purplerain.tech/services" className="text-white hover:text-pr-primary text-xl font-medium transition-all duration-300 transform hover:translate-x-2">
                      Services
                    </a>
                    <a href="https://purplerain.tech/pricing" className="text-white hover:text-pr-primary text-xl font-medium transition-all duration-300 transform hover:translate-x-2">
                      Pricing
                    </a>
                    <a href="https://purplerain.tech/blogs" className="text-white hover:text-pr-primary text-xl font-medium transition-all duration-300 transform hover:translate-x-2">
                      Blogs
                    </a>
                    <a href="https://purplerain.tech/about" className="text-white hover:text-pr-primary text-xl font-medium transition-all duration-300 transform hover:translate-x-2">
                      About
                    </a>
                    <a href="/" className="text-pr-primary text-xl font-medium transition-all duration-300 transform hover:translate-x-2">
                      Careers
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col gap-6">
                  <span className="text-[10px] font-black tracking-[0.3em] text-pr-primary uppercase opacity-50 px-1">Actions</span>
                  <div className="flex flex-col gap-4">
                    <a href="https://auth.purplerain.tech" className="text-white/80 hover:text-white text-lg font-medium transition-all duration-300">
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}