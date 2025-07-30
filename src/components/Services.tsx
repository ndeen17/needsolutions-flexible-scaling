import { 
  Users, 
  Globe, 
  Edit3, 
  Palette, 
  Video, 
  CheckSquare 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Admin Support",
      description: "Email management, data entry, customer service, and administrative tasks handled professionally."
    },
    {
      icon: Globe,
      title: "Web Design & Dev",
      description: "WordPress development, ecommerce solutions, and responsive web design that converts."
    },
    {
      icon: Edit3,
      title: "Content & SEO",
      description: "Blog writing, social media content, email campaigns, and SEO strategy implementation."
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Brand identity, marketing materials, presentation decks, and visual content creation."
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Short-form videos, reels, promotional content, and professional video production."
    },
    {
      icon: CheckSquare,
      title: "Project Management",
      description: "Coordination, quality assurance, progress tracking, and seamless project delivery."
    }
  ];

  return (
    <section id="services" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            What We Do
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expert support across all areas of your business. No need to hire multiple freelancers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-card p-10 rounded-3xl shadow-sm border border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;