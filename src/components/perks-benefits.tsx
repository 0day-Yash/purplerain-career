import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Laptop, Brain, Clock, Code, DollarSign, Heart, BookOpen, Coffee, Plane, Shield, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Home,
    title: 'Remote-First',
    description: 'Work from anywhere with reliable internet. Your best work environment is wherever you choose.',
    color: 'text-blue-400'
  },
  {
    icon: Laptop,
    title: 'Premium Equipment',
    description: 'Latest MacBook Pro, multiple monitors, and any hardware you need to be productive.',
    color: 'text-purple-400'
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Results matter, not hours. Work when you\'re most productive and creative.',
    color: 'text-cyan-400'
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Annual learning budget for courses, conferences, certifications, and research.',
    color: 'text-yellow-400'
  }
];

const additionalBenefits = [
  { icon: Coffee, metric: '4 weeks', label: 'Paid vacation minimum', color: 'text-amber-400' },
  { icon: BookOpen, metric: '$3,000', label: 'Annual learning budget', color: 'text-blue-400' },
  { icon: Shield, metric: '100%', label: 'Health premium coverage', color: 'text-green-400' },
  { icon: Zap, metric: 'Equity', label: 'Meaningful ownership', color: 'text-purple-400' }
];

export function PerksAndBenefits() {
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

    const element = document.getElementById('perks-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="perks-section" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl">
            <h2 className="font-display text-6xl md:text-7xl text-white mb-8 tracking-tight">
              Benefits & <span className="gradient-text">Compensation</span>
            </h2>
            <p className="font-body text-xl text-gray-400 leading-relaxed">
              We believe exceptional work deserves exceptional support. Here's what you get when you join our mission.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className={`card-modern card-interactive group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gray-900/50 border border-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 group-hover:border-gray-700">
                    <benefit.icon className={`w-7 h-7 ${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>
                <h3 className="font-heading text-lg text-white mb-3">{benefit.title}</h3>
                <p className="font-body text-gray-400 leading-relaxed text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className={`glass rounded-xl p-12 border border-gray-800/50 mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="font-heading text-3xl text-white mb-8 text-center">The Numbers</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {additionalBenefits.map((item, index) => (
              <div 
                key={index} 
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-xl bg-gray-900/50 border border-gray-800 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 group-hover:border-gray-700">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <div className={`font-display text-3xl mb-2 ${item.color}`}>{item.metric}</div>
                <p className="font-body text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="font-heading text-2xl text-white mb-6">Our Philosophy</h3>
          <p className="font-body text-lg text-gray-400 leading-relaxed">
            Great security requires great people. Great people deserve great support. 
            <span className="text-white font-semibold block mt-4">
              We invest in your success because your success is our success—and the world's security depends on both.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}