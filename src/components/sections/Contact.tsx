import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "",
    preferredDate: "",
    location: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      sessionType: "",
      preferredDate: "",
      location: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: Mail,
      title: "Email",
      detail: "hello@yourbrand.com",
      action: "mailto:hello@yourbrand.com"
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "New York, NY",
      action: "#"
    }
  ];

  const socialLinks = [
    { icon: Instagram, url: "https://instagram.com/yourbrand", label: "Instagram" },
    { icon: Facebook, url: "https://facebook.com/yourbrand", label: "Facebook" },
    { icon: Twitter, url: "https://twitter.com/yourbrand", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Let's <span className="gold-accent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Ready to capture your story? Get in touch and let's discuss how we can 
            create something beautiful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="elegant-card">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair font-bold">
                  Book Your Session
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="sessionType" className="block text-sm font-medium mb-2">
                        Session Type *
                      </label>
                      <select
                        id="sessionType"
                        name="sessionType"
                        required
                        value={formData.sessionType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a session type</option>
                        <option value="wedding">Wedding Photography</option>
                        <option value="portrait">Portrait Session</option>
                        <option value="travel">Travel Photography</option>
                        <option value="product">Product Photography</option>
                        <option value="event">Event Photography</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium mb-2">
                        Preferred Date
                      </label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium mb-2">
                        Preferred Location
                      </label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City or venue"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Tell us about your vision *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, style preferences, and any special requirements..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="gold-button w-full group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.action}
                    className="flex items-center p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300 group"
                  >
                    <div className="bg-accent/10 p-3 rounded-full mr-4 group-hover:bg-accent/20 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground font-inter">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground">{info.detail}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Media */}
            <Card className="elegant-card">
              <CardHeader>
                <CardTitle className="text-xl font-playfair font-bold">
                  Follow My Work
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 font-inter">
                  Stay updated with my latest work and behind-the-scenes content.
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
                        className="bg-accent/10 p-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                        aria-label={social.label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="elegant-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground font-inter mb-2">
                  Quick Response Guarantee
                </h3>
                <p className="text-muted-foreground text-sm">
                  I typically respond to all inquiries within 24 hours. 
                  For urgent requests, please call directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}