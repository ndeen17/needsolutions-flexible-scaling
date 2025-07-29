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
    <section id="services" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert support across all areas of your business. No need to hire multiple freelancers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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