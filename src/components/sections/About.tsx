import { Award, Camera, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import photographerImage from "@/assets/sam-portraits.jpg";

export function About() {
  const achievements = [
    {
      icon: Camera,
      title: "Family Specialist",
      description: "Expert in family & portrait photography"
    },
    {
      icon: Heart,
      title: "Maternity Expert",
      description: "Specialized pregnancy & maternity sessions"
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Prioritizing satisfaction & value"
    },
    {
      icon: Award,
      title: "Timeless Quality",
      description: "Creating lasting memories"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={photographerImage}
                alt="Sam Blessing Photography - Professional portrait work"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm font-medium">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              About <span className="gold-accent">Sam Blessing</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-inter leading-relaxed">
              <p className="text-lg">
                I'm Sam Blessing, a passionate photographer dedicated to capturing the 
                beautiful moments that make life meaningful. My work focuses on creating 
                lasting memories through authentic, emotional storytelling.
              </p>
              
              <p>
                Specializing in family portraits, pregnancy photography, and intimate 
                celebrations, I believe in creating timeless treasures that families 
                will cherish for generations. Every session is approached with care, 
                creativity, and attention to the unique story each family brings.
              </p>
              
              <blockquote className="italic text-foreground border-l-4 border-accent pl-4 bg-muted/30 p-4 rounded-r-lg">
                "We create timeless moments, prioritizing our clients' satisfaction and delivering exceptional value."
              </blockquote>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div 
                    key={index} 
                    className="text-center p-4 hover:bg-muted/50 rounded-lg transition-colors duration-300"
                  >
                    <Icon className="h-8 w-8 text-accent mx-auto mb-2" />
                    <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button className="gold-button">
                Book Your Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}