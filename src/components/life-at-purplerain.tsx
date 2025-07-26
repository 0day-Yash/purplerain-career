import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Globe, Target, Zap, Brain, Lock, Code, Cpu, Network } from 'lucide-react';

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('life-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="life-section" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-8">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl">
            <h2 className="font-display text-5xl md:text-6xl text-white mb-6 tracking-tight">
              Life at <span className="gradient-text">PurpleRain</span>
            </h2>
            <p className="font-body text-lg text-gray-400 leading-relaxed">
              We're architecting the immune system for the digital world. 
              This is where brilliant minds come to solve problems that matter.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass rounded-xl p-8 border border-gray-800/50">
            <h3 className="font-heading text-2xl text-white mb-4">Our Mission</h3>
            <p className="font-body text-lg text-gray-300 leading-relaxed">
              Every day, sophisticated attackers probe for weaknesses in critical systems. 
              <span className="text-white font-semibold block mt-3">
                We exist to make those attacks fail through superior engineering and uncompromising standards.
              </span>
            </p>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="mb-16">
          <h3 className={`font-heading text-2xl text-white mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            What Drives Us
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <Card 
                key={index} 
                className={`card-modern card-interactive group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <principle.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="font-heading text-lg text-white mb-3">{principle.title}</h4>
                  <p className="font-body text-gray-400 leading-relaxed text-sm">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How We Work & Stats */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className={`md:col-span-2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="font-heading text-2xl text-white mb-6">How We Work</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-heading text-base text-white mb-2">Remote-First Culture</h4>
                <p className="font-body text-gray-400 leading-relaxed text-sm">
                  Access global talent with flexibility to do your best work from anywhere.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-base text-white mb-2">Deep Work Focus</h4>
                <p className="font-body text-gray-400 leading-relaxed text-sm">
                  Minimize meetings, eliminate busywork, maximize time for complex problem-solving.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-base text-white mb-2">Learn from Experts</h4>
                <p className="font-body text-gray-400 leading-relaxed text-sm">
                  Work alongside former NSA researchers and security architects from Fortune 500s.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-base text-white mb-2">Rapid Evolution</h4>
                <p className="font-body text-gray-400 leading-relaxed text-sm">
                  Move fast, learn faster, and adapt to emerging threats in real-time.
                </p>
              </div>
            </div>
          </div>
          
          <div className={`space-y-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass rounded-xl p-6 border border-gray-800/50 group hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-display text-2xl text-purple-400 mb-1">{stat.metric}</div>
                    <p className="font-body text-gray-300 text-xs">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}