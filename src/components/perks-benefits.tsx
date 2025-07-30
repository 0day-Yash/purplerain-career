import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Laptop, Brain, Clock, Code, DollarSign, Heart, BookOpen, Coffee, Plane, Shield, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Home,
    title: 'Remote-First',
    description: 'Work from anywhere with reliable internet. Your best work environment is wherever you choose.',
    color: 'text-brand'
  },
  {
    icon: Laptop,
    title: 'Premium Equipment',
    description: 'Latest MacBook Pro, multiple monitors, and any hardware you need to be productive.',
    color: 'text-primary'
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Results matter, not hours. Work when you most productive and creative.',
    color: 'text-brand'
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Annual learning budget for courses, conferences, certifications, and research.',
    color: 'text-primary'
  }
];

const additionalBenefits = [
  { icon: Coffee, metric: '4 weeks', label: 'Paid vacation minimum', color: 'text-brand' },
  { icon: BookOpen, metric: '$3,000', label: 'Annual learning budget', color: 'text-primary' },
  { icon: Shield, metric: '100%', label: 'Health premium coverage', color: 'text-brand' },
  { icon: Zap, metric: 'Equity', label: 'Meaningful ownership', color: 'text-primary' }
];

export function PerksAndBenefits() {
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

    const element = document.getElementById('perks-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="perks-section" className="py-32 bg-background text-foreground overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className={`mb-20 ${isVisible ? 'animate-appear' : ''}`}>
          <div className="max-w-4xl">
            <h2 className="font-display text-6xl md:text-7xl mb-8 tracking-tight">
              Benefits & <span className="gradient-text">Compensation</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              We believe exceptional work deserves exceptional support. Here's what you get when you join our mission.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className={`card-modern card-interactive group ${isVisible ? `animate-appear delay-${200 + index * 100}` : ''}`}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-muted/50 border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 group-hover:border-primary">
                    <benefit.icon className={`w-7 h-7 ${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>
                <h3 className="font-heading text-lg mb-3">{benefit.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className={`glass-2 rounded-xl p-12 border mb-20 ${isVisible ? 'animate-appear delay-500' : ''}`}>
          <h3 className="font-heading text-3xl mb-8 text-center">The Numbers</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {additionalBenefits.map((item, index) => (
              <div 
                key={index} 
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-xl bg-muted/50 border border-border flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 group-hover:border-primary">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <div className={`font-display text-3xl mb-2 ${item.color}`}>{item.metric}</div>
                <p className="font-body text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className={`max-w-5xl mx-auto text-center ${isVisible ? 'animate-appear delay-700' : ''}`}>
          <h3 className="font-heading text-2xl mb-6">Our Philosophy</h3>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Great security requires great people. Great people deserve great support. 
            <span className="text-foreground font-semibold block mt-4">
              We invest in your success because your success is our success—and the world's security depends on both.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}