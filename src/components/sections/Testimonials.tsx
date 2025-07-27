import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Akosua & Olade",
    role: "Wedding Clients",
    content: "Two sides, one celebration—groomsmen and bridesmaids, united in love and joy. Sam captured our special day beautifully with such artistic vision.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b2c5?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Johnson Family",
    role: "Family Session",
    content: "Sam's ability to capture the heart of every memory is incredible. Our family photos are absolutely stunning and we treasure them. The session was so natural and comfortable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Maria Santos",
    role: "Maternity Session",
    content: "The pregnancy photos Sam took are beyond beautiful. She captured this special time in our lives with such elegance, care, and artistic flair. Truly magical memories.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "The Chen Family",
    role: "Family Portrait",
    content: "Strong bonds, sharp looks, unforgettable moments. Sam creates timeless portraits that perfectly capture our family's personality and connection.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Amanda & David",
    role: "Engagement Session",
    content: "A wedding is a celebration of love, and Sam's photography freezes those precious moments, turning them into timeless treasures we'll cherish forever.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Rebecca Williams",
    role: "Portrait Session",
    content: "Sam creates timeless moments, prioritizing client satisfaction and delivering exceptional value. The portraits exceeded all my expectations.",
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