import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 px-4 bg-background">
      <div className="container mx-auto text-center max-w-5xl">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            #1 Virtual Assistant Agency
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
          Your Flexible Team 
          <span className="text-primary"> Is Ready</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
          Scale your business with our team of designers, developers, writers, and video editors. 
          <strong className="text-foreground"> Flexible hours, managed for you.</strong>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4 h-auto">
            Get Started Today
            <ArrowRight className="ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-4 h-auto">
            <Calendar className="mr-2" />
            Schedule a Free Consultation
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl font-bold text-primary mb-3">50+</div>
            <div className="text-muted-foreground text-lg">Expert Team Members</div>
          </div>
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl font-bold text-primary mb-3">98%</div>
            <div className="text-muted-foreground text-lg">Client Retention</div>
          </div>
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl font-bold text-primary mb-3">10,000+</div>
            <div className="text-muted-foreground text-lg">Hours Saved Monthly</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;