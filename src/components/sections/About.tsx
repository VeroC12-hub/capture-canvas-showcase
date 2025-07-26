import { Award, Camera, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import photographerImage from "@/assets/photographer-portrait.jpg";

export function About() {
  const achievements = [
    {
      icon: Award,
      title: "Award Winner",
      description: "International Photography Awards 2023"
    },
    {
      icon: Users,
      title: "500+ Clients",
      description: "Happy customers worldwide"
    },
    {
      icon: Camera,
      title: "10+ Years",
      description: "Professional experience"
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description: "Every shot tells a story"
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
                alt="Professional Photographer"
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
              Meet Your <span className="gold-accent">Photographer</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-inter leading-relaxed">
              <p className="text-lg">
                Hi, I'm [Your Name], a passionate photographer with over 10 years of experience 
                capturing life's most precious moments. My journey began with a simple camera and 
                an eye for beauty in everyday moments.
              </p>
              
              <p>
                What started as a hobby quickly evolved into a lifelong passion and career. 
                I specialize in creating timeless, emotional photographs that tell your unique story. 
                Whether it's the intimate moments of a wedding day, the joy of a family portrait, 
                or the adventure of travel photography, I bring an artistic vision and professional 
                expertise to every shoot.
              </p>
              
              <p>
                My approach is personal and relaxed, ensuring you feel comfortable and natural 
                in front of the camera. I believe that the best photographs happen when people 
                can simply be themselves.
              </p>
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
                Let's Create Together
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}