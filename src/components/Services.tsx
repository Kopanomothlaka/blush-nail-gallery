import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: "💅",
      title: "Classic Manicure",
      description: "Traditional nail care with cuticle treatment, filing, and polish application",
      price: "R350",
      duration: "45 min"
    },
    {
      icon: "✨",
      title: "Gel Manicure",
      description: "Long-lasting gel polish that stays chip-free for up to 3 weeks",
      price: "R550",
      duration: "60 min"
    },
    {
      icon: "🎨",
      title: "Custom Nail Art",
      description: "Unique hand-painted designs tailored to your style and personality",
      price: "R750+",
      duration: "90 min"
    },
    {
      icon: "🦶",
      title: "Luxury Pedicure",
      description: "Relaxing foot treatment with exfoliation, massage, and polish",
      price: "R650",
      duration: "75 min"
    },
    {
      icon: "💎",
      title: "Acrylic Extensions",
      description: "Durable nail extensions for length and strength with your choice of shape",
      price: "R800",
      duration: "120 min"
    },
    {
      icon: "🌸",
      title: "Spa Package",
      description: "Complete luxury experience with manicure, pedicure, and hand treatment",
      price: "R1200",
      duration: "150 min"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Indulge in our comprehensive range of nail care and beauty services designed to pamper and perfect
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="p-6 bg-card shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:scale-105 group">
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:animate-float">{service.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex justify-between items-center mb-4 pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                    <div className="text-xs text-muted-foreground">Price</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-secondary-dark">{service.duration}</div>
                    <div className="text-xs text-muted-foreground">Duration</div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={scrollToContact}
                  className="w-full hover:bg-primary hover:text-primary-foreground"
                >
                  Book Service
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="luxury" size="lg" onClick={scrollToContact}>
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
