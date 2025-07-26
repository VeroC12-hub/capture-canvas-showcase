import { Camera, Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" }
];

const services = [
  { name: "Wedding Photography", href: "#services" },
  { name: "Portrait Sessions", href: "#services" },
  { name: "Travel Photography", href: "#services" },
  { name: "Product Photography", href: "#services" }
];

const socialLinks = [
  { icon: Instagram, url: "https://instagram.com/yourbrand", label: "Instagram" },
  { icon: Facebook, url: "https://facebook.com/yourbrand", label: "Facebook" },
  { icon: Twitter, url: "https://twitter.com/yourbrand", label: "Twitter" }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Camera className="h-8 w-8 text-accent mr-3" />
              <h3 className="text-xl font-playfair font-bold">
                Your Brand <span className="text-accent">Name</span>
              </h3>
            </div>
            <p className="text-gray-300 font-inter mb-4 leading-relaxed">
              Capturing stories in every frame. Professional photography services 
              that transform moments into timeless memories.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-300 font-inter"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-300 font-inter"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 text-accent mr-3" />
                <span className="font-inter">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 text-accent mr-3" />
                <span className="font-inter">hello@yourbrand.com</span>
              </div>
            </div>
            
            {/* Instagram Feed Preview */}
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-3 text-gray-300">Latest on Instagram</h5>
              <div className="grid grid-cols-3 gap-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="aspect-square bg-gray-700 rounded-md overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 font-inter text-sm">
            © {currentYear} Your Brand Name Photography. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-accent text-sm font-inter transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-accent text-sm font-inter transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}