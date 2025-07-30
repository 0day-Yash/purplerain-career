import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Clock, ChevronDown, ChevronUp, ArrowUpRight, DollarSign, Users, Code, Brain } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface JobRole {
  id: string;
  title: string;
  department: string;
  type: 'Full-Time' | 'Internship' | 'Contract';
  location: 'Remote' | 'Hybrid' | 'On-site';
  description: string;
  fullDescription: string;
  requirements: string[];
  salary?: string;
  icon: any;
}

const jobRoles: JobRole[] = [
    // ... (job data remains the same)
  {
    id: '1',
    title: 'Senior Security Engineer',
    department: 'Engineering',
    type: 'Full-Time',
    location: 'Remote',
    salary: '$140k - $180k',
    icon: Code,
    description: 'Lead the development of next-generation threat detection systems that protect enterprise infrastructure.',
    fullDescription: 'As a Senior Security Engineer, youll architect and build the core security systems that power our platform. You\'ll work on cutting-edge threat detection algorithms, design secure APIs, and collaborate with our research team to stay ahead of emerging threats.',
    requirements: ['7+ years in security engineering', 'Deep understanding of threat modeling', 'Experience with distributed systems', 'Proficiency in Go, Rust, or C++', 'Security certifications preferred']
  },
  {
    id: '2',
    title: 'Product Security Intern',
    department: 'Security',
    type: 'Internship',
    location: 'Hybrid',
    icon: Users,
    description: 'Gain hands-on experience in product security while working on real-world security challenges.',
    fullDescription: 'Join our security team for a 12-week intensive program where you\'ll learn from industry experts, conduct security assessments, and contribute to our security research initiatives. This isn\'t coffee-fetching—you\'ll be doing meaningful work from day one.',
    requirements: ['Computer Science or Cybersecurity studies', 'Basic understanding of web security', 'Familiarity with Python or JavaScript', 'Passion for breaking things (ethically)', 'Strong problem-solving mindset']
  },
  {
    id: '3',
    title: 'Infrastructure Architect',
    department: 'Engineering',
    type: 'Full-Time',
    location: 'Remote',
    salary: '$160k - $200k',
    icon: Brain,
    description: 'Design and build the scalable infrastructure that powers our global security platform.',
    fullDescription: 'We need a visionary Infrastructure Architect to design systems that can handle massive scale while maintaining the highest security standards. You\'ll work with cutting-edge cloud technologies and help define our technical architecture for the next decade.',
    requirements: ['10+ years in infrastructure design', 'Expertise in cloud platforms (AWS, GCP)', 'Experience with Kubernetes and microservices', 'Strong background in security architecture', 'Leadership experience preferred']
  },
  {
    id: '4',
    title: 'Threat Intelligence Analyst',
    department: 'Research',
    type: 'Full-Time',
    location: 'Remote',
    salary: '$120k - $150k',
    icon: Brain,
    description: 'Research emerging threats and develop intelligence that keeps our clients ahead of attackers.',
    fullDescription: 'As a Threat Intelligence Analyst, you\'ll be our eyes and ears in the cybersecurity landscape. You\'ll track threat actors, analyze attack patterns, and translate complex threat data into actionable intelligence for our platform and clients.',
    requirements: ['5+ years in threat intelligence', 'Experience with threat hunting', 'Knowledge of APT groups and TTPs', 'Proficiency in data analysis tools', 'Strong written communication skills']
  }
];

export function OpenRoles() {
  const [filter, setFilter] = useState<string>('all');
  const [expandedRoles, setExpandedRoles] = useState<Set<string>>(new Set());
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

    const element = document.getElementById('open-roles');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const filteredRoles = jobRoles.filter(role =>
    filter === 'all' || role.type === filter || role.department === filter
  );

  const toggleRole = (roleId: string) => {
    const newExpanded = new Set(expandedRoles);
    if (newExpanded.has(roleId)) {
      newExpanded.delete(roleId);
    } else {
      newExpanded.add(roleId);
    }
    setExpandedRoles(newExpanded);
  };

  return (
    <section id="open-roles" className="py-32 bg-background text-foreground overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className={`mb-20 ${isVisible ? 'animate-appear' : ''}`}>
          <div className="max-w-4xl">
            <h2 className="font-display text-6xl md:text-7xl mb-8 tracking-tight">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              We're looking for exceptional people who want to build the future of cybersecurity.
              Every role is an opportunity to make a real impact.
            </p>
          </div>
        </div>

        {/* Filter */}
        <div className={`mb-16 ${isVisible ? 'animate-appear delay-200' : ''}`}>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-64 bg-muted/50 border-border text-foreground rounded-lg h-12 font-medium backdrop-blur-sm hover:bg-muted transition-all duration-300">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border rounded-lg backdrop-blur-md text-foreground">
              <SelectItem value="all">All Positions</SelectItem>
              <SelectItem value="Full-Time">Full-Time</SelectItem>
              <SelectItem value="Internship">Internships</SelectItem>
              <SelectItem value="Engineering">Engineering</SelectItem>
              <SelectItem value="Security">Security</SelectItem>
              <SelectItem value="Research">Research</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Roles List */}
        <div className="space-y-6">
          {filteredRoles.map((role, index) => {
            const delay = 300 + index * 100;
            // The change is here: added 'border border-white/20'
            const cardClassName = `card-modern border border-white/20 ${isVisible ? `animate-appear delay-${delay}` : ''}`;

            return (
              <Card
                key={role.id}
                className={cardClassName}
              >
                <CardHeader className="pb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 border border-border flex items-center justify-center">
                          <role.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="font-heading text-2xl mb-2">{role.title}</CardTitle>
                          <div className="flex flex-wrap items-center gap-4 font-body text-sm">
                            <Badge variant="outline" className="border-border text-muted-foreground rounded-md px-3 py-1 font-medium">
                              {role.department}
                            </Badge>
                            <div className="flex items-center text-muted-foreground font-medium">
                              <Clock className="w-4 h-4 mr-1" />
                              {role.type}
                            </div>
                            <div className="flex items-center text-muted-foreground font-medium">
                              <MapPin className="w-4 h-4 mr-1" />
                              {role.location}
                            </div>
                            {role.salary && (
                              <div className="flex items-center text-primary font-semibold">
                                <DollarSign className="w-4 h-4 mr-1" />
                                {role.salary}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardDescription className="font-body text-muted-foreground text-lg leading-relaxed">
                    {role.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <Collapsible>
                    <div className="flex justify-between items-center">
                      <CollapsibleTrigger
                        onClick={() => toggleRole(role.id)}
                        className="flex items-center text-primary hover:text-primary/90 transition-colors font-medium font-body"
                      >
                        {expandedRoles.has(role.id) ? 'Show Less' : 'View Details'}
                        {expandedRoles.has(role.id) ? (
                          <ChevronUp className="ml-2 w-4 h-4 transition-transform duration-300" />
                        ) : (
                          <ChevronDown className="ml-2 w-4 h-4 transition-transform duration-300" />
                        )}
                      </CollapsibleTrigger>

                      <Button className="btn-primary group font-medium font-body">
                        Apply Now
                        <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </Button>
                    </div>

                    <CollapsibleContent className="mt-8 pt-8 border-t border-border">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-heading mb-4 text-lg">About This Role</h4>
                          <p className="font-body text-muted-foreground leading-relaxed">{role.fullDescription}</p>
                        </div>

                        <div>
                          <h4 className="font-heading mb-4 text-lg">What We're Looking For</h4>
                          <ul className="space-y-3">
                            {role.requirements.map((req, index) => (
                              <li key={index} className="font-body text-muted-foreground flex items-start">
                                <span className="text-primary mr-3 mt-1 font-bold">•</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredRoles.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-muted-foreground text-xl">No positions found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}