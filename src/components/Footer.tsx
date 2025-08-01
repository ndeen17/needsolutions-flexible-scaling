const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/9ecd160c-1848-475f-a80f-adb9d923a60d.png" 
                alt="Needsolutions Logo" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold">Needsolutions</span>
            </div>
            <p className="text-background/80 text-sm">
              Your flexible team for scaling business operations with expert remote staff.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Admin Support</li>
              <li>Web Development</li>
              <li>Content & SEO</li>
              <li>Graphic Design</li>
              <li>Video Editing</li>
              <li>Project Management</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>About Us</li>
              <li>Why Choose Us</li>
              <li>Case Studies</li>
              <li>Careers</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Get Started</li>
              <li>Free Consultation</li>
              <li>Support</li>
              <li>Partnership</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Needsolutions. All rights reserved. Built for founders who scale.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;