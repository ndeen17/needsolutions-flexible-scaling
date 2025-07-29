import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 px-4 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Your Flexible Team Is Ready
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
          Scale your business with our team of designers, developers, writers, and video editors. 
          Flexible hours, managed for you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="hero" size="lg" className="w-full sm:w-auto">
            Get Started Today
            <ArrowRight className="ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            <Calendar className="mr-2" />
            Schedule a Free Consultation
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-card p-6 rounded-xl shadow-md border border-border">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Expert Team Members</div>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-md border border-border">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Retention</div>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-md border border-border">
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Hours Saved Monthly</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;