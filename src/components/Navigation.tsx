import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3">
            <img 
              src="/lovable-uploads/666f4845-30e1-4a1f-af4e-e6ceecb1c94e.png" 
              alt="Needsolutions Logo" 
              className="h-8 md:h-12 w-auto"
            />
            <span className="text-lg md:text-xl font-bold text-foreground">Needsolutions</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/team" className="text-foreground hover:text-primary transition-colors font-medium">
              Our Team
            </Link>
            <a href="/#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              Why Us
            </Link>
            <a href="/#pricing" className="text-foreground hover:text-primary transition-colors font-medium">
              Pricing
            </a>
          </div>
          
          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" size="default" className="text-sm lg:text-base px-4 lg:px-6">
              Get Started Today
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link 
                to="/" 
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link 
                to="/team" 
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={handleLinkClick}
              >
                Our Team
              </Link>
              <a 
                href="/#services" 
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={handleLinkClick}
              >
                Services
              </a>
              <Link 
                to="/about" 
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={handleLinkClick}
              >
                Why Us
              </Link>
              <a 
                href="/#pricing" 
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={handleLinkClick}
              >
                Pricing
              </a>
              <div className="pt-4 border-t border-border">
                <Button 
                  variant="default" 
                  size="default" 
                  className="w-full"
                  onClick={handleLinkClick}
                >
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;