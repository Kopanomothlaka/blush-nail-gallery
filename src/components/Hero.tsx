import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nails.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Luxury Nail Art
          <span className="block text-primary-light">& Spa Experience</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto animate-fade-in">
          Transform your nails into works of art with our premium manicures, pedicures, and custom nail designs
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button 
            variant="luxury" 
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-8 py-4"
          >
            Book Your Appointment
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            View Services
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-6 h-6 bg-secondary rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-3 h-3 bg-primary-light rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;