import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Upload, CheckCircle, FileText, Send, User, Mail, Linkedin, Github, AlertCircle } from 'lucide-react';
import { SectionShell } from './landing-primitives/section-shell';
import { LandingHeading } from './landing-primitives/landing-heading';

const B = "border-[hsl(0_0%_18%)]";

export function ResumeSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    linkedin: '',
    portfolio: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
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
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
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
      <SectionShell container="full" id="resume-section" className="gap-0 border-t border-b border-[hsl(0_0%_18%)] bg-[--surface-primary]">
        <div className="w-full max-w-xl mx-auto text-center space-y-6 py-16 px-6">
          <figure
            className={`flex size-12 items-center justify-center border ${B} text-[hsl(270_70%_75%)] mx-auto`}
            style={{ background: "hsl(270 70% 60% / 0.08)" }}
          >
            <CheckCircle className="size-6" />
          </figure>
          <h3 className="text-2xl font-medium text-[--text-primary]">Application Received</h3>
          <p className="text-sm text-[--text-tertiary] leading-relaxed">
            We'll review your application and respond within 48 hours if there's a potential match.
          </p>
          <button
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
            className="flex items-center justify-center h-12 px-6 text-sm font-medium transition-colors border border-[hsl(0_0%_18%)] text-[--text-secondary] hover:bg-[--surface-secondary] cursor-pointer mx-auto"
          >
            Submit Another Application
          </button>
        </div>
      </SectionShell>
    );
  }

  return (
    <SectionShell container="full" id="resume-section" className="gap-0 border-t border-b border-[hsl(0_0%_18%)] bg-[--surface-primary]">
      {/* Top Monospace Bar */}
      <div className={`w-full flex items-center justify-between px-6 py-3 border-b ${B}`}>
        <span className="text-xs font-mono text-[--text-tertiary] uppercase tracking-widest">
          GENERAL / TALENT POOL
        </span>
        <span className="text-xs font-mono text-[hsl(var(--accent-500))]">
          APPLY NOW
        </span>
      </div>

      {/* Heading */}
      <div className={`w-full px-6 py-12 border-b ${B} text-center`}>
        <LandingHeading
          tag="GENERAL APPLICATION"
          title="Submit Your Resume"
          subtitle="Don't see an exact role match above? Send us your details and let us know how you can contribute."
        />
      </div>

      {/* Hidden Netlify Form */}
      <form name="resume-submission" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="fullName" />
        <input type="email" name="email" />
        <input type="text" name="linkedin" />
        <input type="text" name="portfolio" />
        <textarea name="message" />
        <input type="file" name="resume" />
      </form>

      {/* Form Container */}
      <div className="w-full max-w-4xl mx-auto p-6 md:p-10">
        <form onSubmit={handleSubmit} className={`border ${B} bg-[--surface-primary] p-6 md:p-10 space-y-6`} name="resume-submission" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="resume-submission" />
          <input type="hidden" name="bot-field" />
          
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-xs font-mono text-[--text-secondary] uppercase flex items-center gap-2">
                <User className="size-3.5 text-[hsl(var(--accent-500))]" />
                Full Name *
              </Label>
              <Input 
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required 
                placeholder="Jane Doe"
                className={`bg-[--surface-secondary] border ${B} focus:border-[hsl(var(--accent-500))] rounded-none px-4 py-3 text-sm text-[--text-primary] placeholder:text-[--text-tertiary] h-11`}
              />
              {errors.fullName && (
                <p className="text-red-400 text-xs font-mono flex items-center gap-1">
                  <AlertCircle className="size-3" />
                  {errors.fullName}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-mono text-[--text-secondary] uppercase flex items-center gap-2">
                <Mail className="size-3.5 text-[hsl(var(--accent-500))]" />
                Email Address *
              </Label>
              <Input 
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required 
                placeholder="jane@example.com"
                className={`bg-[--surface-secondary] border ${B} focus:border-[hsl(var(--accent-500))] rounded-none px-4 py-3 text-sm text-[--text-primary] placeholder:text-[--text-tertiary] h-11`}
              />
              {errors.email && (
                <p className="text-red-400 text-xs font-mono flex items-center gap-1">
                  <AlertCircle className="size-3" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Social links */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="linkedin" className="text-xs font-mono text-[--text-secondary] uppercase flex items-center gap-2">
                <Linkedin className="size-3.5 text-[hsl(var(--accent-500))]" />
                LinkedIn Profile
              </Label>
              <Input 
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
                placeholder="linkedin.com/in/profile"
                className={`bg-[--surface-secondary] border ${B} focus:border-[hsl(var(--accent-500))] rounded-none px-4 py-3 text-sm text-[--text-primary] placeholder:text-[--text-tertiary] h-11`}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="portfolio" className="text-xs font-mono text-[--text-secondary] uppercase flex items-center gap-2">
                <Github className="size-3.5 text-[hsl(var(--accent-500))]" />
                GitHub / Portfolio
              </Label>
              <Input 
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleInputChange}
                placeholder="github.com/profile"
                className={`bg-[--surface-secondary] border ${B} focus:border-[hsl(var(--accent-500))] rounded-none px-4 py-3 text-sm text-[--text-primary] placeholder:text-[--text-tertiary] h-11`}
              />
            </div>
          </div>

          {/* Drag & Drop Upload Zone */}
          <div className="space-y-2">
            <Label className="text-xs font-mono text-[--text-secondary] uppercase flex items-center gap-2">
              <FileText className="size-3.5 text-[hsl(var(--accent-500))]" />
              Resume / CV *
            </Label>
            <div 
              className={`border-2 border-dashed p-8 text-center transition-all ${
                dragActive 
                  ? 'border-[hsl(var(--accent-500))] bg-purple-500/10' 
                  : errors.file
                  ? 'border-red-500/50 bg-red-500/5'
                  : `border-[hsl(0_0%_18%)] hover:border-[hsl(270_70%_60%/0.5)] bg-[--surface-secondary]`
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              {selectedFile ? (
                <div className="flex items-center justify-center gap-3 text-purple-300">
                  <FileText className="size-6" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-[--text-primary]">{selectedFile.name}</p>
                    <p className="text-xs font-mono text-[--text-tertiary]">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <Upload className="size-8 text-[--text-tertiary] mx-auto" />
                  <div>
                    <p className="text-sm font-medium text-[--text-primary]">Drop your resume file here</p>
                    <p className="text-xs text-[--text-tertiary]">or click to select file</p>
                  </div>
                  <label htmlFor="resumeFile" className="inline-block">
                    <span className={`px-4 py-2 border ${B} bg-[--surface-tertiary] text-xs font-mono text-[--text-secondary] hover:text-[--text-primary] transition-all cursor-pointer`}>
                      CHOOSE FILE
                    </span>
                  </label>
                  <input
                    id="resumeFile"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <p className="text-xs font-mono text-[--text-tertiary]">PDF, DOC, or DOCX UP TO 10MB</p>
                </div>
              )}
            </div>
            {errors.file && (
              <p className="text-red-400 text-xs font-mono flex items-center gap-1">
                <AlertCircle className="size-3" />
                {errors.file}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs font-mono text-[--text-secondary] uppercase">
              Why PurpleRain? *
            </Label>
            <Textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required 
              rows={4}
              placeholder="Tell us about your background and what excites you about building digital defense systems..."
              className={`bg-[--surface-secondary] border ${B} focus:border-[hsl(var(--accent-500))] rounded-none p-4 text-sm text-[--text-primary] placeholder:text-[--text-tertiary] resize-none`}
            />
            {errors.message && (
              <p className="text-red-400 text-xs font-mono flex items-center gap-1">
                <AlertCircle className="size-3" />
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit CTA — Exact landing-v2 CTA button */}
          <div className="pt-2 flex flex-col items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 h-14 text-base font-medium transition-colors bg-[hsl(var(--accent-500))] text-[--text-on-accent-primary] hover:bg-[hsl(var(--accent-600))] cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? 'SUBMITTING...' : 'SUBMIT APPLICATION'}
              <Send className="size-4" />
            </button>
            <p className="text-xs text-[--text-tertiary]">
              We'll respond within 48 hours if there's a potential match
            </p>
          </div>
        </form>
      </div>

      <div className={`w-full border-b ${B}`} />
    </SectionShell>
  );
}
