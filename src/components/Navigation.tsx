import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/c0261460-6ce1-41c1-b6f0-11e4e1455e50.png" 
            alt="Needsolutions Logo" 
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-foreground">Needsolutions</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
            Home
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
            Services
          </a>
          <a href="#why-us" className="text-foreground hover:text-primary transition-colors font-medium">
            Why Us
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium">
            Pricing
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
            Contact
          </a>
        </div>
        
        <Button variant="default" size="default">
          Get Started Today
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;