import { 
  Users, 
  Globe, 
  Edit3, 
  Palette, 
  Video, 
  CheckSquare,
  Code,
  ArrowRight,
  Square,
  FileText,
  Target,
  CheckCircle
} from "lucide-react";
import TeamHub from "./TeamHub";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom solutions and ongoing development support. Scale your tech capabilities without hiring full-time developers.",
      features: [
        "Web application development",
        "API integrations and automation", 
        "Database design and optimization",
        "Bug fixes and maintenance",
        "Mobile app development",
        "Code reviews and refactoring"
      ],
      linkText: "Flex hours as needed"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Professional designs that make your brand stand out. From logos to full campaigns, we've got you covered.",
      features: [
        "Logo and brand identity design",
        "Social media graphics and templates",
        "Marketing materials and brochures", 
        "Presentation and pitch deck design",
        "UI/UX design for web and mobile",
        "Print design and packaging"
      ],
      linkText: "Shift hours anytime"
    },
    {
      icon: Edit3,
      title: "Content Creation & SEO",
      description: "Compelling content that ranks and converts. Build authority and drive organic traffic with our content team.",
      features: [
        "Blog writing and article creation",
        "SEO optimization and keyword research",
        "Website copywriting and landing pages",
        "Email marketing campaigns",
        "Social media content calendars",
        "Video scripts and captions"
      ],
      linkText: "Scale up or down"
    },
    {
      icon: Globe,
      title: "Website Design & Development", 
      description: "Beautiful, high-converting websites that grow your business. From concept to launch, we handle it all.",
      features: [
        "Custom website design and development",
        "E-commerce and online stores",
        "WordPress and CMS development",
        "Landing page optimization",
        "Website maintenance and updates",
        "Performance optimization"
      ],
      linkText: "Adjust focus weekly"
    },
    {
      icon: Users,
      title: "Administrative Support",
      description: "Keep your business running smoothly with professional admin support. We handle the details so you can focus on growth.",
      features: [
        "Email and calendar management",
        "Data entry and research",
        "Customer service and support",
        "Document preparation",
        "Travel planning and booking",
        "CRM and database management"
      ],
      linkText: "Always available"
    },
    {
      icon: Video,
      title: "Video Editing & Production",
      description: "Professional video content that engages your audience. From quick social clips to full productions.",
      features: [
        "Video editing and post-production",
        "Motion graphics and animations",
        "Social media video content",
        "YouTube video optimization",
        "Podcast editing and production",
        "Subtitles and captions"
      ],
      linkText: "Flexible allocation"
    }
  ];

  return (
    <>
      {/* How Our Flexible Model Works Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Our Process
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              How Our Flexible Model Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Unlike traditional VAs, you're not locked into one specialist. Your hours adapt to your changing business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Square className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">1. Choose Your Hours</h3>
              <p className="text-muted-foreground">Select 10, 20, or 40 hours per week based on your needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">2. Submit Tasks</h3>
              <p className="text-muted-foreground">Send any type of task to your project manager</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">3. We Delegate</h3>
              <p className="text-muted-foreground">Your PM assigns the right specialist for each task</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">4. Get Results</h3>
              <p className="text-muted-foreground">Quality work delivered on time, every time</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Can Do For You Section */}
      <section id="services" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              What We Do
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              What We Can Do For You
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From daily operations to complex projects, our team handles it all. Here's how we help businesses work smarter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-primary text-primary-foreground p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-primary/20"
              >
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed text-lg mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-primary-foreground/80 text-sm flex items-start">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-primary-foreground/90 font-medium text-sm">
                  {service.linkText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Team Hub Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Your Flexible Team Structure
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Meet Your <span className="text-primary">Extended Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every specialist is carefully selected and continuously trained. 
              Drag them around to see how our flexible model works for your projects.
            </p>
          </div>
          
          <TeamHub />
        </div>
      </section>
    </>
  );
};

export default Services;