import { useState } from "react";
import { Card } from "@/components/ui/card";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      src: gallery1,
      alt: "Elegant floral nail art in blush pink and gold",
      category: "Nail Art"
    },
    {
      src: gallery2,
      alt: "Minimalist gold accent nails",
      category: "Minimalist"
    },
    {
      src: gallery3,
      alt: "Rose gold French manicure",
      category: "French"
    },
    {
      src: gallery1,
      alt: "Custom wedding nail design",
      category: "Special Events"
    },
    {
      src: gallery2,
      alt: "Geometric pattern nail art",
      category: "Geometric"
    },
    {
      src: gallery3,
      alt: "Luxury spa pedicure",
      category: "Pedicure"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our stunning nail art creations and see why our clients love their transformations
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <Card 
              key={index} 
              className="overflow-hidden bg-card shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative aspect-square">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">{image.category}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Follow us on Instagram for daily inspiration</p>
          <div className="flex justify-center space-x-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white text-sm">📷</span>
            </div>
            <span className="text-foreground font-medium">@blushandgoldnails</span>
          </div>
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;