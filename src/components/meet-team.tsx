import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowUpRight, Linkedin, Github, Shield, Code, Brain, Cpu } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alexandra Chen',
    role: 'CEO & Co-Founder',
    bio: 'Former NSA security architect. Led threat intelligence at three Fortune 100 companies. Believes security should be invisible until it\'s essential.',
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
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('team-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team-section" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl">
            <h2 className="font-display text-6xl md:text-7xl text-white mb-8 tracking-tight">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="font-body text-xl text-gray-400 leading-relaxed">
              Get to know the security experts, engineers, and researchers who are building the future of digital defense.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className={`card-modern card-interactive group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="relative mb-6">
                    <Avatar className="w-20 h-20 mx-auto border-2 border-gray-800 group-hover:border-purple-500/50 transition-all duration-300">
                      <AvatarFallback className="bg-gray-900 text-purple-400 text-xl font-bold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                      <member.icon className="w-4 h-4 text-purple-400" />
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 text-sm mb-4 font-medium">{member.role}</p>
                  <p className="font-body text-gray-400 text-sm leading-relaxed mb-6">{member.bio}</p>
                  
                  <div className="flex justify-center space-x-3">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-8 h-8 p-0 text-gray-500 hover:text-purple-400 transition-colors rounded-lg"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-8 h-8 p-0 text-gray-500 hover:text-purple-400 transition-colors rounded-lg"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button 
            className="btn-primary group text-lg font-semibold"
          >
            View Full Team
            <ArrowUpRight className="ml-3 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Button>
          <p className="font-body text-gray-500 text-sm mt-6">
            Learn more about our entire team and their backgrounds
          </p>
        </div>
      </div>
    </section>
  );
}