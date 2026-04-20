import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Upload, CheckCircle, FileText, Send, User, Mail, Linkedin, Github, ArrowRight, AlertCircle } from 'lucide-react';

export function ResumeSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    linkedin: '',
    portfolio: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

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

    const element = document.getElementById('resume-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^s@]+@[^s@]+.[^s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us why you want to join PurpleRain';
    }
    
    if (!selectedFile) {
      newErrors.file = 'Please upload your resume';
    } else if (selectedFile.size > 10 * 1024 * 1024) {
      newErrors.file = 'File size must be less than 10MB';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Show error - form validation failed
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData for Netlify Forms
      const submitData = new FormData();
      submitData.append('form-name', 'resume-submission');
      submitData.append('fullName', formData.fullName);
      submitData.append('email', formData.email);
      submitData.append('linkedin', formData.linkedin);
      submitData.append('portfolio', formData.portfolio);
      submitData.append('message', formData.message);
      
      if (selectedFile) {
        submitData.append('resume', selectedFile);
      }

      // Submit to Netlify Forms endpoint
      const response = await fetch('/', {
        method: 'POST',
        body: submitData
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      // Handle error - could add error state here
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      if (file.size > 10 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, file: 'File size must be less than 10MB' }));
        return;
      }
      setSelectedFile(file);
      setErrors(prev => ({ ...prev, file: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, file: 'File size must be less than 10MB' }));
        return;
      }
      setSelectedFile(file);
      setErrors(prev => ({ ...prev, file: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-32 bg-background text-foreground relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-2xl mx-auto px-8 relative z-10">
          <div className="text-center animate-appear-zoom">
            <div className="w-20 h-20 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-brand" />
            </div>
            <h3 className="font-display text-5xl mb-6 tracking-tight">Application Received</h3>
            <p className="font-body text-lg text-muted-foreground mb-12 leading-relaxed max-w-md mx-auto">
              We'll review your application and respond within 48 hours if there's a potential match.
            </p>
            <Button 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  linkedin: '',
                  portfolio: '',
                  message: ''
                });
                setSelectedFile(null);
                setErrors({});
              }}
              variant="secondary"
              className="font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Submit Another Application
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="resume-section" className="py-32 bg-background text-foreground relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-appear' : ''}`}>
          <h2 className="font-display text-7xl md:text-8xl mb-8 tracking-tight">
            Apply <span className="gradient-text">Now</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Ready to defend the digital future? Send us your details and let's start the conversation.
          </p>
        </div>

        {/* Hidden Netlify Form for bot detection */}
        <form name="resume-submission" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="fullName" />
          <input type="email" name="email" />
          <input type="text" name="linkedin" />
          <input type="text" name="portfolio" />
          <textarea name="message"></textarea>
          <input type="file" name="resume" />
        </form>

        {/* Application Form */}
        <div className={`${isVisible ? 'animate-appear delay-200' : ''}`}>
          <form onSubmit={handleSubmit} className="space-y-12" name="resume-submission" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="resume-submission" />
            <input type="hidden" name="bot-field" />
            
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Label htmlFor="fullName" className="font-heading text-lg flex items-center gap-3">
                  <User className="w-5 h-5 text-primary" />
                  Full Name *
                </Label>
                <Input 
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required 
                  placeholder="Enter your full name"
                  className={`bg-muted/20 border-2 ${errors.fullName ? 'border-destructive' : 'border-border'} hover:border-primary focus:border-primary rounded-lg px-6 py-4 text-foreground placeholder-muted-foreground transition-all duration-300 focus:bg-muted/30 text-lg h-14`}
                />
                {errors.fullName && (
                  <p className="text-destructive text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    {errors.fullName}
                  </p>
                )}
              </div>
              <div className="space-y-4">
                <Label htmlFor="email" className="font-heading text-lg flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  Email Address *
                </Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                  placeholder="your.email@example.com"
                  className={`bg-muted/20 border-2 ${errors.email ? 'border-destructive' : 'border-border'} hover:border-primary focus:border-primary rounded-lg px-6 py-4 text-foreground placeholder-muted-foreground transition-all duration-300 focus:bg-muted/30 text-lg h-14`}
                />
                {errors.email && (
                  <p className="text-destructive text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Professional Links */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Label htmlFor="linkedin" className="font-heading text-lg flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-primary" />
                  LinkedIn Profile
                </Label>
                <Input 
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  placeholder="linkedin.com/in/yourprofile"
                  className="bg-muted/20 border-2 border-border hover:border-primary focus:border-primary rounded-lg px-6 py-4 text-foreground placeholder-muted-foreground transition-all duration-300 focus:bg-muted/30 text-lg h-14"
                />
              </div>
              <div className="space-y-4">
                <Label htmlFor="portfolio" className="font-heading text-lg flex items-center gap-3">
                  <Github className="w-5 h-5 text-primary" />
                  GitHub / Portfolio
                </Label>
                <Input 
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  placeholder="github.com/yourprofile"
                  className="bg-muted/20 border-2 border-border hover:border-primary focus:border-primary rounded-lg px-6 py-4 text-foreground placeholder-muted-foreground transition-all duration-300 focus:bg-muted/30 text-lg h-14"
                />
              </div>
            </div>

            {/* Resume Upload */}
            <div className="space-y-4">
              <Label className="font-heading text-lg flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                Resume / CV *
              </Label>
              <div 
                className={`relative border-2 border-dashed rounded-lg p-16 text-center transition-all duration-300 ${
                  dragActive 
                    ? 'border-primary bg-primary/5' 
                    : errors.file
                    ? 'border-destructive bg-destructive/5'
                    : 'border-border hover:border-primary bg-muted/20 hover:bg-muted/30'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {selectedFile ? (
                  <div className="flex items-center justify-center text-primary">
                    <FileText className="w-8 h-8 mr-4" />
                    <div>
                      <p className="font-heading text-xl">{selectedFile.name}</p>
                      <p className="font-body text-muted-foreground text-sm mt-1">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Upload className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
                    <p className="font-heading text-xl mb-4">Drop your resume here</p>
                    <p className="font-body text-muted-foreground mb-8">or click to browse files</p>
                    <Button 
                      type="button" 
                      variant="secondary"
                      className="font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <label htmlFor="resumeFile" className="cursor-pointer">
                        Choose File
                      </label>
                    </Button>
                    <input
                      id="resumeFile"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <p className="font-mono text-sm text-muted-foreground mt-4">PDF, DOC, or DOCX • Max 10MB</p>
                  </div>
                )}
              </div>
              {errors.file && (
                <p className="text-destructive text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {errors.file}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-4">
              <Label htmlFor="message" className="font-heading text-lg">
                Why PurpleRain? *
              </Label>
              <Textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required 
                rows={6}
                placeholder="Tell us what excites you about cybersecurity and why you want to join our mission..."
                className={`bg-muted/20 border-2 ${errors.message ? 'border-destructive' : 'border-border'} hover:border-primary focus:border-primary rounded-lg px-6 py-4 text-foreground placeholder-muted-foreground transition-all duration-300 focus:bg-muted/30 text-lg resize-none`}
              />
              {errors.message && (
                <p className="text-destructive text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center pt-8">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary group text-lg font-semibold h-16 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-foreground border-t-transparent rounded-full animate-spin mr-3"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    Submit Application
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </Button>
              <p className="font-body text-muted-foreground text-sm mt-6">
                We'll respond within 48 hours if there's a potential match
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}