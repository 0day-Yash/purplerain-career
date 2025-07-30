import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import React from 'react';

export function SiteNavbar() {
  return (
    <header className="px-8 bg-background sticky top-0 z-50 w-full border-b border-border/40">
      <div className="flex items-center justify-between h-16 max-w-screen-xl mx-auto">
        {/* Left Side: Logo */}
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/logo.avif"
              alt="PurpleRain TechSafe"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </a>
        </div>
        
        {/* Right Side: Nav Links and Button (for Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <a href="#life-section" className="text-muted-foreground hover:text-foreground text-sm transition-colors font-body">
              Life at PurpleRain
            </a>
            <a href="#team-section" className="text-muted-foreground hover:text-foreground text-sm transition-colors font-body">
              Meet the Team
            </a>
            <a href="#open-roles" className="text-muted-foreground hover:text-foreground text-sm transition-colors font-body">
              Open Positions
            </a>
            <a href="#perks-section" className="text-muted-foreground hover:text-foreground text-sm transition-colors font-body">
              Perks & Benefits
            </a>
          </nav>
          
          {/* The new "Apply Now" button with outline style */}
          <Button variant="outline" asChild>
            <a href="#resume-section" className="font-body">
              Apply Now
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
            <SheetContent className="bg-background text-foreground">
              <div className="flex flex-col gap-4 py-4">
                <a href="#life-section" className="text-muted-foreground hover:text-foreground text-sm transition-colors font-body">
                  Life at PurpleRain
                </a>
                <a href="#team-section" className="text-muted-foreground hover:text-foreground text-sm transition-colors font-body">
                  Meet the Team
                </a>
                <a href="#open-roles" className="text-muted-foreground hover:text-foreground text-sm transition-colors font-body">
                  Open Positions
                </a>
                <a href="#perks-section" className="text-muted-foreground hover:text-foreground text-sm transition-colors font-body">
                  Perks & Benefits
                </a>
                <a href="#resume-section" className="text-muted-foreground hover:text-foreground text-sm transition-colors font-body">
                  Apply Now
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}df