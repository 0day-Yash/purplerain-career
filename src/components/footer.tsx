import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Shield, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <span className="font-display text-2xl text-white">PurpleRain</span>
            </div>
            <p className="font-body text-gray-400 leading-relaxed mb-8">
              Building the immune system for the digital world. Defending what matters most through superior engineering and uncompromising standards.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="w-10 h-10 p-0 text-gray-500 hover:text-purple-400 transition-colors rounded-lg">
                <Github className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="w-10 h-10 p-0 text-gray-500 hover:text-purple-400 transition-colors rounded-lg">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="w-10 h-10 p-0 text-gray-500 hover:text-purple-400 transition-colors rounded-lg">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="w-10 h-10 p-0 text-gray-500 hover:text-purple-400 transition-colors rounded-lg">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-white mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="font-body text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#careers" className="font-body text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#team" className="font-body text-gray-400 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#research" className="font-body text-gray-400 hover:text-white transition-colors">Research</a></li>
              <li><a href="#press" className="font-body text-gray-400 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-heading text-white mb-6 text-lg">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="font-body text-gray-400 hover:text-white transition-colors">Platform</a></li>
              <li><a href="#" className="font-body text-gray-400 hover:text-white transition-colors">Threat Intelligence</a></li>
              <li><a href="#" className="font-body text-gray-400 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="font-body text-gray-400 hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="font-body text-gray-400 hover:text-white transition-colors">API Documentation</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-white mb-6 text-lg">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="font-body text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="font-body text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="font-body text-gray-400 hover:text-white transition-colors">Security Policy</a></li>
              <li><a href="#" className="font-body text-gray-400 hover:text-white transition-colors">Compliance</a></li>
              <li><a href="#" className="font-body text-gray-400 hover:text-white transition-colors">Responsible Disclosure</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-gray-900" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-gray-500">
            © 2025 PurpleRain TechSafe. Defending the digital future.
          </p>
          <div className="flex items-center space-x-8 mt-6 md:mt-0">
            <a href="mailto:careers@purplerain.tech" className="font-mono text-gray-400 hover:text-white transition-colors">
              careers@purplerain.tech
            </a>
            <span className="text-gray-700">•</span>
            <a href="https://purplerain.tech" className="font-mono text-gray-400 hover:text-white transition-colors">
              purplerain.tech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}