import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily Rodriguez",
      review: "Sarah is absolutely amazing! Her attention to detail is incredible and my nails always look perfect. I've been coming here for over a year and wouldn't go anywhere else.",
      rating: 5,
      service: "Gel Manicure"
    },
    {
      name: "Jessica Chen",
      review: "The nail art here is pure artistry. I get so many compliments on my nails! The studio is clean, relaxing, and Sarah makes you feel so comfortable.",
      rating: 5,
      service: "Custom Nail Art"
    },
    {
      name: "Amanda Thompson",
      review: "Best pedicure I've ever had! The luxury spa package is worth every penny. I left feeling completely pampered and relaxed. Highly recommend!",
      rating: 5,
      service: "Spa Package"
    },
    {
      name: "Maria Santos",
      review: "Professional, skilled, and so creative! Sarah listens to what you want and somehow makes it even better than you imagined. Love this place!",
      rating: 5,
      service: "Acrylic Extensions"
    },
    {
      name: "Sophie Williams",
      review: "Clean, elegant studio with amazing results. My gel manicure lasted exactly 3 weeks without any chips. Will definitely be returning!",
      rating: 5,
      service: "Gel Manicure"
    },
    {
      name: "Rachel Davis",
      review: "The most beautiful nail art I've ever seen! Sarah is so talented and patient. She explained each step and made sure I was happy with everything.",
      rating: 5,
      service: "Custom Nail Art"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-secondary" : "text-gray-300"}>
        ⭐
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy clients who love their beautiful nails
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:scale-105">
              <div className="space-y-4">
                <div className="flex justify-center space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "{testimonial.review}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Card className="p-8 bg-gradient-primary text-primary-foreground max-w-2xl mx-auto shadow-elegant">
            <h3 className="text-2xl font-bold mb-4">Join Our Happy Clients!</h3>
            <p className="text-lg opacity-90 mb-6">
              Experience the luxury and artistry that has made us the top choice for nail care in the area
            </p>
            <div className="flex justify-center items-center space-x-4">
              <div className="text-3xl font-bold">4.9/5</div>
              <div className="text-left">
                <div className="flex">{renderStars(5)}</div>
                <div className="text-sm opacity-75">Based on 150+ reviews</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;