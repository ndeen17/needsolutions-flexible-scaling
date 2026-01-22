import { 
  Users, 
  Code, 
  Palette, 
  Globe,
  Target,
  User,
  CheckCircle,
  FileText,
  Star,
  Award,
  Clock,
  DollarSign,
  ArrowRight,
  Calendar,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import TeamHub from "./TeamHub";

const OurTeam = () => {
  const selectionSteps = [
    {
      icon: CheckCircle,
      title: "Skills Demonstration",
      description: "Candidates showcase their best work and demonstrate expertise in their field"
    },
    {
      icon: FileText,
      title: "Paid Test Projects",
      description: "Series of paid assignments testing ability to adapt to different business contexts"
    },
    {
      icon: Users,
      title: "Business Integration",
      description: "Testing ability to seamlessly integrate with various business workflows"
    },
    {
      icon: Award,
      title: "Final Evaluation",
      description: "Comprehensive review ensuring consistent quality across diverse client needs"
    }
  ];

  const teamCategories = [
    {
      icon: Sparkles,
      title: "AI Automation Team",
      description: "AI specialists who integrate cutting-edge automation into your workflows. We leverage AI for speed, then refine with human expertise.",
      features: [
        "AI workflow automation",
        "ChatGPT integration experts",
        "Custom AI tool development",
        "Process optimization specialists"
      ]
    },
    {
      icon: Code,
      title: "Development Team",
      description: "Full-stack developers, mobile app experts, and API specialists ready to build your digital solutions.",
      features: [
        "React, Vue, Angular experts",
        "Node.js, Python, PHP developers", 
        "iOS and Android developers",
        "API integration specialists"
      ]
    },
    {
      icon: Palette,
      title: "Design Team", 
      description: "Creative professionals who bring your brand to life through stunning visual design and user experiences.",
      features: [
        "UI/UX designers",
        "Brand identity specialists",
        "Motion graphics artists",
        "Print design experts"
      ]
    },
    {
      icon: Globe,
      title: "Web Development Team",
      description: "Website specialists who build beautiful, high-converting websites that grow your business.",
      features: [
        "WordPress experts",
        "E-commerce specialists",
        "Landing page designers",
        "Website optimization experts"
      ]
    },
    {
      icon: Target,
      title: "Product Management Team",
      description: "Strategic product experts who help you build the right product and achieve product-market fit.",
      features: [
        "Product strategists",
        "Market research analysts",
        "User research experts",
        "Product analytics specialists"
      ]
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: "Premium Compensation",
      description: "50% above local market rates ensures we attract top-tier talent"
    },
    {
      icon: DollarSign,
      title: "Full-Time Commitment",
      description: "Dedicated professionals working exclusively for our clients"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Continuous training and clear advancement opportunities"
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Sustainable hours and respect for personal time"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-25 left-10 w-24 h-24 bg-primary/10 rounded-full opacity-70 animate-float-gentle" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-20 right-15 w-32 h-32 bg-primary/20 opacity-70 animate-float-gentle" style={{ animationDelay: '1s' }} />
          <div className="absolute top-60 left-20 w-20 h-20 bg-primary/10 transform rotate-45 opacity-70 animate-float-gentle" style={{ animationDelay: '1.5s' }} />
        </div>
        
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 inline mr-2" />
              50+ specialists at your service
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            Meet Your <span className="text-primary">AI + Human</span> Extended Team
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
            Every member of our team is carefully selected, continuously trained, and equipped with AI tools to deliver faster results. With specialists across 6 core disciplines powered by AI automation, we prioritize <strong className="text-foreground">speed and accuracy</strong> in every task.
          </p>
        </div>
      </section>

      {/* Interactive Team Hub */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Your Flexible Team Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Drag the specialists around to see how our flexible model works. Your project manager coordinates everyone based on your current needs.
            </p>
          </div>
          
          <TeamHub />
        </div>
      </section>

      {/* Team Categories */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Specialist Teams
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each team is composed of vetted professionals with proven expertise in their field.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamCategories.map((category, index) => (
              <div key={index} className="bg-primary text-primary-foreground p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center mb-6">
                  <category.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  {category.title}
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed mb-6">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-primary-foreground/80 text-sm flex items-start">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Select Our Team */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              How We Build Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Only <span className="text-primary font-semibold underline decoration-primary underline-offset-4">0.3%</span> of applicants make it through our rigorous selection process – that's just 3 out of every 1,000 who apply.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {selectionSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Benefits Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Why Our Team Delivers Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We invest in our people because great talent deserves great compensation and stability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Full-Time Commitment, Full-Time Results
              </h3>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Every member of our team works for us full-time. No freelancers, no gig workers, no shortcuts. This means consistent quality, deep expertise, and team members who truly understand your business over time.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We pay our specialists approximately 50% above market rate for their locations. This isn't just about compensation – it's about attracting and retaining the absolute best talent in each field.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When you work with Needsolutions, you're working with professionals who are invested in their careers, properly compensated for their expertise, and committed to delivering exceptional results for every client.
              </p>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-lg">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary">
        <div className="container mx-auto text-center max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-8">
            Get Your Team
            <span className="text-primary-foreground/90"> Started Today</span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-16 leading-relaxed">
            Tell us about your needs and we'll match you with the perfect specialists. Your dedicated project manager will handle all the coordination.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-background text-primary hover:bg-background/90 text-lg px-8 py-4 h-auto" asChild>
              <a href="https://calendly.com/angellawretta/30min" target="_blank" rel="noopener noreferrer">
                Build Your Team
                <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 h-auto" asChild>
              <a href="https://calendly.com/angellawretta/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2" />
                Schedule a Call
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;