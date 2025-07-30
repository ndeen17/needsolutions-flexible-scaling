import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 px-4 bg-primary">
      <div className="container mx-auto text-center max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-8">
          Ready to Work?
        </h2>
        
        <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-16 leading-relaxed">
          Join dozens of companies getting more done with flexible remote teams.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-background text-primary hover:bg-background/90 text-lg px-8 py-4 h-auto">
            Get Started Today
            <ArrowRight className="ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 h-auto">
            <Calendar className="mr-2" />
            Schedule a Free Consultation
          </Button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/80 text-sm">
            No setup fees • Cancel anytime • 98% client retention rate
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;