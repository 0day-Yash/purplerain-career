import { Button } from '@/components/ui/button';
import { Shield, ArrowDown, ChevronRight, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToRoles = () => {
    document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Enhanced background with subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-black to-blue-900/5"></div>
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute inset-0 noise-texture"></div>

{/* Hero Section Floating Lines */}
<div className="absolute top-10 left-10 w-0.5 h-24 bg-gradient-to-b from-purple-400/50 to-transparent animate-rise-up"></div>
<div className="absolute top-20 left-1/4 w-0.5 h-32 bg-gradient-to-b from-blue-400/40 to-transparent animate-rise-up" style={{ animationDelay: '0.8s' }}></div>
<div className="absolute top-32 left-1/3 w-0.5 h-28 bg-gradient-to-b from-pink-400/30 to-transparent animate-rise-up" style={{ animationDelay: '1.6s' }}></div>
<div className="absolute top-12 left-1/2 w-0.5 h-36 bg-gradient-to-b from-cyan-400/25 to-transparent animate-rise-up" style={{ animationDelay: '2.4s' }}></div>
<div className="absolute top-28 left-2/3 w-0.5 h-30 bg-gradient-to-b from-fuchsia-400/30 to-transparent animate-rise-up" style={{ animationDelay: '3.2s' }}></div>
<div className="absolute top-8 right-1/4 w-0.5 h-40 bg-gradient-to-b from-lime-400/25 to-transparent animate-rise-up" style={{ animationDelay: '4s' }}></div>
<div className="absolute top-24 right-1/3 w-0.5 h-34 bg-gradient-to-b from-indigo-400/30 to-transparent animate-rise-up" style={{ animationDelay: '4.8s' }}></div>
<div className="absolute top-16 right-10 w-0.5 h-38 bg-gradient-to-b from-sky-400/25 to-transparent animate-rise-up" style={{ animationDelay: '5.6s' }}></div>

{/* More random floating lines */}
<div className="absolute top-6 left-5 w-0.5 h-26 bg-gradient-to-b from-rose-400/30 to-transparent animate-rise-up" style={{ animationDelay: '0.4s' }}></div>
<div className="absolute top-18 left-1/5 w-0.5 h-30 bg-gradient-to-b from-emerald-400/25 to-transparent animate-rise-up" style={{ animationDelay: '1.2s' }}></div>
<div className="absolute top-26 left-1/6 w-0.5 h-20 bg-gradient-to-b from-teal-400/30 to-transparent animate-rise-up" style={{ animationDelay: '2s' }}></div>
<div className="absolute top-14 left-2/5 w-0.5 h-36 bg-gradient-to-b from-orange-400/30 to-transparent animate-rise-up" style={{ animationDelay: '2.8s' }}></div>
<div className="absolute top-30 left-3/5 w-0.5 h-28 bg-gradient-to-b from-yellow-400/25 to-transparent animate-rise-up" style={{ animationDelay: '3.6s' }}></div>
<div className="absolute top-22 left-3/4 w-0.5 h-32 bg-gradient-to-b from-purple-500/30 to-transparent animate-rise-up" style={{ animationDelay: '4.4s' }}></div>
<div className="absolute top-10 right-1/5 w-0.5 h-40 bg-gradient-to-b from-blue-500/25 to-transparent animate-rise-up" style={{ animationDelay: '5.2s' }}></div>
<div className="absolute top-26 right-1/6 w-0.5 h-24 bg-gradient-to-b from-pink-500/30 to-transparent animate-rise-up" style={{ animationDelay: '6s' }}></div>
<div className="absolute top-12 right-1/3 w-0.5 h-38 bg-gradient-to-b from-violet-400/25 to-transparent animate-rise-up" style={{ animationDelay: '6.8s' }}></div>
<div className="absolute top-20 right-8 w-0.5 h-34 bg-gradient-to-b from-indigo-500/25 to-transparent animate-rise-up" style={{ animationDelay: '7.6s' }}></div>

      {/* Enhanced glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/2 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-1200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="mb-16">
            {/* Enhanced logo container */}
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/5 mb-12 backdrop-blur-sm animate-scale-in shadow-2xl shadow-purple-500/5">
              <Shield className="w-10 h-10 text-purple-400 icon-hover" />
            </div>
            
            {/* Enhanced typography with better spacing */}
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white mb-10 tracking-tight leading-[0.85] animate-fade-in-up">
              Defend the
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>
            
            {/* Improved description with better hierarchy */}
            <div className="max-w-5xl mx-auto mb-16 animate-fade-in-up stagger-2">
              <p className="font-body text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                We're not just another cybersecurity company. We're the architects of tomorrow's digital defense systems.
              </p>
              <p className="font-body text-lg md:text-xl text-white/90 font-medium">
                Join us in building what comes next.
              </p>
            </div>
          </div>
          
          {/* Enhanced button group */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up stagger-3">
            <Button 
              onClick={scrollToRoles}
              className="bg-white text-black font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:scale-[1.02] hover:shadow-xl hover:shadow-white/10 active:scale-[0.98] text-lg group"
            >
              Explore Opportunities
              <ArrowDown className="ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-white border border-gray-700/50 hover:border-gray-600 bg-gray-900/20 hover:bg-gray-800/40 font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/5 active:scale-[0.98] text-lg group backdrop-blur-sm"
            >
              Our Mission
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}