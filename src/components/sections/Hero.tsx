import { ArrowRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/sam-family-hero.jpg";

export function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay" />
      
      {/* Content */}
      <div className="hero-content animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          {/* Brand Logo/Icon */}
          <div className="mb-8 animate-float">
            <Camera className="h-16 w-16 text-accent mx-auto mb-4" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
            <span className="gold-accent">Beautiful</span> moments,
            <br />
            <span className="gold-accent">lasting</span> memories
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-inter font-light max-w-3xl mx-auto">
            "Family is the heart of every memory, and photography captures those moments, turning love into timeless beauty."
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gold-button text-lg px-8 py-4 group"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
            >
              Book Session
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 text-gray-300 font-inter">
            <p className="text-sm mb-4">Trusted by 500+ happy clients</p>
            <div className="flex justify-center space-x-8 text-xs">
              <span>📸 Award-Winning</span>
              <span>⭐ 5-Star Rated</span>
              <span>🏆 10+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}