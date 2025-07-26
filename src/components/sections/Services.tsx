import { Check, Download, Camera, Heart, Plane, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description: "Capturing your special day with artistic vision and emotional depth",
    features: [
      "8 hours of coverage",
      "500+ edited photos",
      "Online gallery",
      "Engagement session included",
      "USB drive with all images"
    ],
    price: "Starting at $2,500",
    popular: true
  },
  {
    icon: Camera,
    title: "Portrait Sessions",
    description: "Professional portraits that showcase your personality and style",
    features: [
      "1-2 hour session",
      "50+ edited photos",
      "Online gallery",
      "Multiple outfit changes",
      "Professional retouching"
    ],
    price: "Starting at $350"
  },
  {
    icon: Plane,
    title: "Travel Photography",
    description: "Documenting your adventures and creating lasting travel memories",
    features: [
      "Full day coverage",
      "200+ edited photos",
      "Drone photography included",
      "Story-telling approach",
      "Quick preview within 48hrs"
    ],
    price: "Starting at $800"
  },
  {
    icon: Package,
    title: "Product Photography",
    description: "Commercial photography that showcases your products beautifully",
    features: [
      "Studio or on-location",
      "Multiple angles & styles",
      "High-resolution images",
      "Commercial usage rights",
      "Fast 24-hour turnaround"
    ],
    price: "Starting at $200"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Photography <span className="gold-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Professional photography services tailored to capture your unique moments 
            and tell your story with artistic excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className={`relative elegant-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in ${
                  service.popular ? 'ring-2 ring-accent' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="mb-4">
                    <Icon className="h-12 w-12 text-accent mx-auto" />
                  </div>
                  <CardTitle className="text-2xl font-playfair font-bold">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground font-inter">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm font-inter">
                        <Check className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Price */}
                  <div className="border-t pt-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-accent font-playfair mb-4">
                        {service.price}
                      </p>
                      <div className="space-y-2">
                        <Button 
                          className={service.popular ? "gold-button w-full" : "w-full"}
                          variant={service.popular ? "default" : "outline"}
                        >
                          Book Now
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full text-muted-foreground">
                          <Download className="h-4 w-4 mr-2" />
                          Download Brochure
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Custom Packages */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="elegant-card max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Need Something Custom?
            </h3>
            <p className="text-muted-foreground font-inter mb-6">
              Every project is unique. Let's discuss your vision and create a 
              custom package that perfectly fits your needs and budget.
            </p>
            <Button className="gold-button">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}