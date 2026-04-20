import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Clock, ChevronDown, ChevronUp, ArrowUpRight, DollarSign, Users, Code, Brain, Briefcase, Info } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import jobsData from '@/data/jobs.json';

const iconMap: Record<string, any> = {
  Security: Code,
  Marketing: Briefcase,
  Engineering: Brain,
  Research: Brain,
};

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
          setIsVisible(false);
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

  const filteredRoles = jobsData.jobs.filter(role =>
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
        <div className={`mb-20 ${isVisible ? 'animate-fade-in' : ''}`}>
          <div className="max-w-4xl">
            <h2 className="font-display text-6xl md:text-7xl mb-8 tracking-tight">
              Open <span className="bg-gradient-to-r from-pr-primary via-purple-300 to-blue-400 bg-clip-text text-transparent">Positions</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              We're looking for exceptional people who want to build the future of cybersecurity.
              Every role is an opportunity to make a real impact.
            </p>
          </div>
        </div>

        {/* Filter */}
        <div className={`mb-16 ${isVisible ? 'animate-slide-in-up' : ''}`}>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-64 premium-input text-foreground rounded-lg h-12 font-medium hover:bg-muted/50 transition-all duration-300">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border rounded-lg backdrop-blur-md text-foreground">
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
            const cardClassName = `premium-card ${isVisible ? `animate-slide-in-up` : ''}`;
            const RoleIcon = iconMap[role.department] || Code;

            return (
              <Card
                key={role.id}
                className={cardClassName}
                style={{ animationDelay: `${delay}ms` }}
              >
                <CardHeader className="pb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-pr-primary/10 border border-border flex items-center justify-center">
                          <RoleIcon className="w-6 h-6 text-pr-primary" />
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
                              <div className="flex items-center text-pr-primary font-semibold">
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
                    <div className="flex justify-between items-center flex-wrap gap-4">
                      <CollapsibleTrigger
                        onClick={() => toggleRole(role.id)}
                        className="flex items-center text-pr-primary hover:text-pr-primary/90 transition-colors font-medium font-body"
                      >
                        {expandedRoles.has(role.id) ? 'Show Less' : 'View Details'}
                        {expandedRoles.has(role.id) ? (
                          <ChevronUp className="ml-2 w-4 h-4 transition-transform duration-300" />
                        ) : (
                          <ChevronDown className="ml-2 w-4 h-4 transition-transform duration-300" />
                        )}
                      </CollapsibleTrigger>

                      <div className="flex gap-3">
                        <Button 
                          variant="outline"
                          className="border-border text-foreground hover:bg-muted/50 font-medium font-body"
                          onClick={() => window.location.href = `/jobs/${role.id}`}
                        >
                          Full Details
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              className="bg-white text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] group"
                            >
                              Apply Now
                              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-card border-border max-w-lg">
                            <DialogHeader>
                              <DialogTitle className="text-xl font-heading">Application Instructions</DialogTitle>
                              <DialogDescription className="text-muted-foreground">
                                Please follow these steps before scheduling your interview
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                              <div className="p-4 bg-muted/30 rounded-lg border border-border">
                                <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                                  <Info className="w-4 h-4 text-pr-primary" />
                                  Before Scheduling:
                                </h4>
                                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                                  <li>Upload your resume and portfolio to <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer" className="text-pr-primary hover:underline font-medium">Google Drive</a></li>
                                  <li>Make the folder/files publicly accessible</li>
                                  <li>Copy the share link</li>
                                  <li>Position: <span className="font-semibold text-foreground">{role.title}</span></li>
                                  <li>Include the Google Drive link in your meeting notes</li>
                                </ol>
                              </div>
                              <Button 
                                className="w-full bg-white text-black font-semibold py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                                onClick={() => window.open(role.interviewLink, '_blank')}
                              >
                                Continue to Schedule Interview
                                <ArrowUpRight className="ml-2 w-4 h-4" />
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
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
                                <span className="text-pr-primary mr-3 mt-1 font-bold">•</span>
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