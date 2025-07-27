import { useState } from "react";
import { Button } from "@/components/ui/button";
import portraitImage from "@/assets/sam-portraits.jpg";
import familyImage from "@/assets/sam-family.jpg";
import pregnancyImage from "@/assets/sam-pregnancy.jpg";
import weddingImage from "@/assets/sam-wedding.jpg";

type Category = "all" | "portraits" | "family" | "pregnancy" | "weddings";

const portfolioItems = [
  {
    id: 1,
    title: "Portrait Session",
    category: "portraits" as Category,
    image: portraitImage,
    description: "Capturing personality and essence in professional portraits"
  },
  {
    id: 2,
    title: "Family Moments",
    category: "family" as Category,
    image: familyImage,
    description: "Beautiful family memories that last a lifetime"
  },
  {
    id: 3,
    title: "Maternity Photography",
    category: "pregnancy" as Category,
    image: pregnancyImage,
    description: "Celebrating the miracle of new life with elegant maternity portraits"
  },
  {
    id: 4,
    title: "Wedding Celebration",
    category: "weddings" as Category,
    image: weddingImage,
    description: "Timeless wedding photography capturing love and joy"
  },
  {
    id: 5,
    title: "Family Portraits",
    category: "family" as Category,
    image: familyImage,
    description: "Creating lasting memories with authentic family connections"
  },
  {
    id: 6,
    title: "Pregnancy Journey",
    category: "pregnancy" as Category,
    image: pregnancyImage,
    description: "Documenting the beautiful journey of motherhood"
  }
];

const categories = [
  { id: "all", name: "All Work" },
  { id: "portraits", name: "Portraits" },
  { id: "family", name: "Family" },
  { id: "pregnancy", name: "Pregnancy" },
  { id: "weddings", name: "Weddings" }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            My <span className="gold-accent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            A curated collection of my favorite work, showcasing different styles 
            and moments captured with passion and precision.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id as Category)}
              className={activeCategory === category.id ? "gold-button" : ""}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group image-overlay-hover animate-scale-in rounded-xl overflow-hidden shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-lg font-playfair font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200 font-inter">
                    {item.description}
                  </p>
                  <div className="mt-4">
                    <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12 animate-fade-in">
          <Button variant="outline" size="lg">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}