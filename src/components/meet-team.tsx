import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowUpRight, Linkedin, Github, Shield, Code, Brain, Cpu } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alexandra Chen',
    role: 'CEO & Co-Founder',
    bio: 'Former NSA security architect. Led threat intelligence at three Fortune 100 companies. Believes security should be invisible until its essential.',
    initials: 'AC',
    linkedin: '#',
    github: '#',
    icon: Shield
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO & Co-Founder',
    bio: 'Ex-Google security engineer. Built detection systems that protected billions of users. Passionate about making complex security simple.',
    initials: 'MR',
    linkedin: '#',
    github: '#',
    icon: Code
  },
  {
    name: 'Dr. Sarah Kim',
    role: 'Head of Research',
    bio: 'PhD in Cryptography from MIT. Published researcher in threat modeling. Thinks like an attacker, builds like a defender.',
    initials: 'SK',
    linkedin: '#',
    github: '#',
    icon: Brain
  },
  {
    name: 'David Thompson',
    role: 'VP of Engineering',
    bio: 'Former principal engineer at Cloudflare. Scaled security systems to handle millions of attacks daily. Believes in elegant solutions.',
    initials: 'DT',
    linkedin: '#',
    github: '#',
    icon: Cpu
  }
];

export function MeetTheTeam() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset visibility when out of view
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('team-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="team-section" className="py-32 bg-background text-foreground overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className={`mb-20 ${isVisible ? 'animate-appear' : ''}`}>
          <div className="max-w-4xl">
            <h2 className="font-display text-6xl md:text-7xl mb-8 tracking-tight">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              Get to know the security experts, engineers, and researchers who are building the future of digital defense.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className={`card-modern card-interactive group ${isVisible ? `animate-appear delay-${200 + index * 100}` : ''}`}
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <Avatar className="w-20 h-20 mx-auto border-2 border-border group-hover:border-primary/50 transition-all duration-300">
                    <AvatarFallback className="bg-muted text-primary text-xl font-bold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-primary/10 border border-border flex items-center justify-center">
                    <member.icon className="w-4 h-4 text-primary" />
                  </div>
                </div>
                
                <h3 className="font-heading text-xl mb-2">{member.name}</h3>
                <p className="text-primary text-sm mb-4 font-medium">{member.role}</p>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">{member.bio}</p>
                
                <div className="flex justify-center space-x-3">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="w-8 h-8 p-0 text-muted-foreground hover:text-primary transition-colors rounded-lg"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="w-8 h-8 p-0 text-muted-foreground hover:text-primary transition-colors rounded-lg"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center ${isVisible ? 'animate-appear delay-500' : ''}`}>
          <Button 
            className="btn-primary group text-lg font-semibold"
          >
            View Full Team
            <ArrowUpRight className="ml-3 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Button>
          <p className="font-body text-muted-foreground text-sm mt-6">
            Learn more about our entire team and their backgrounds
          </p>
        </div>
      </div>
    </section>
  );
}