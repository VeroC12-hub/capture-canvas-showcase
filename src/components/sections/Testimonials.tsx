import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah & Michael",
    role: "Wedding Couple",
    content: "Absolutely incredible! Every photo captured the emotion and joy of our special day. We couldn't have asked for a better photographer. The attention to detail and artistic vision exceeded all our expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b2c5?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Jennifer Chen",
    role: "Corporate Executive",
    content: "Professional, creative, and so easy to work with. The portraits turned out stunning and perfectly captured my personality. The session was relaxed and fun, which shows in the final results.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "David Rodriguez",
    role: "Travel Blogger",
    content: "The travel photography session was beyond amazing. Every shot tells a story and captures the essence of our adventure perfectly. These photos will be treasured memories for years to come.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Emma Thompson",
    role: "New Mom",
    content: "The family session was magical. They made us feel so comfortable and natural. The photos are beautiful works of art that capture this precious time in our lives perfectly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Marcus Johnson",
    role: "Business Owner",
    content: "Outstanding product photography that really elevated our brand. The lighting and composition are flawless, and the turnaround time was incredibly fast. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Lisa & James",
    role: "Engagement Couple",
    content: "From start to finish, the experience was incredible. The photos are stunning and capture our love story beautifully. We can't wait to work together again for our wedding!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=80&h=80&fit=crop&crop=face"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            What Clients <span className="gold-accent">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients 
            have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="elegant-card hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-accent mb-4" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground font-inter">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent font-playfair">
              500+
            </div>
            <p className="text-muted-foreground font-inter">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent font-playfair">
              5.0
            </div>
            <p className="text-muted-foreground font-inter">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent font-playfair">
              95%
            </div>
            <p className="text-muted-foreground font-inter">Repeat Clients</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent font-playfair">
              10+
            </div>
            <p className="text-muted-foreground font-inter">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}