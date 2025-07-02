import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Your Nail Artist
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Hi, I'm Sarah ✨
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to my nail sanctuary! With over 8 years of experience in the beauty industry, 
                I'm passionate about creating stunning nail art that reflects your unique personality.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe that beautiful nails are more than just an accessory – they're a form of 
                self-expression and confidence. Every client leaves my studio feeling pampered, 
                beautiful, and ready to take on the world.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <Card className="p-4 text-center bg-card shadow-soft hover:shadow-elegant transition-shadow">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </Card>
                <Card className="p-4 text-center bg-card shadow-soft hover:shadow-elegant transition-shadow">
                  <div className="text-2xl font-bold text-primary">8+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-card shadow-elegant transform hover:scale-105 transition-transform">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                    <div className="text-4xl">💅</div>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">Certified & Licensed</h4>
                  <p className="text-muted-foreground">
                    State licensed nail technician with specialized training in gel applications, 
                    nail art, and luxury spa treatments.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;