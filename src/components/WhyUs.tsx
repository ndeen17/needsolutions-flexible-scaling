import { 
  Star, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  BookOpen,
  Code,
  Palette,
  Edit3,
  FileText,
  ArrowRight,
  Calendar,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import TeamHub from "./TeamHub";

const WhyUs = () => {
  const teamMembers = [
    { icon: Code, title: "AI Specialists" },
    { icon: Code, title: "Software Developers" },
    { icon: Palette, title: "Graphic Designers" },
    { icon: Edit3, title: "Content Writers" },
    { icon: TrendingUp, title: "Digital Marketers" },
    { icon: FileText, title: "Admin Specialists" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-15 w-28 h-28 bg-primary/10 rounded-full opacity-70 animate-float-gentle" />
          <div className="absolute bottom-30 left-10 w-20 h-20 bg-primary/20 rounded-full opacity-70 animate-float-gentle" style={{ animationDelay: '1s' }} />
          <div className="absolute top-60 right-20 w-24 h-24 bg-primary/10 transform rotate-45 opacity-70 animate-float-gentle" style={{ animationDelay: '1.5s' }} />
        </div>
        
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 inline mr-2" />
              Efficiency through flexibility
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            About <span className="text-primary">Needsolutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
            We're not your typical freelance service company. We're a team of specialists who believe businesses deserve better than one-size-fits-all support. That's why we built a flexible model that adapts to you.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Our Story</h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Needsolutions started with a simple observation: businesses were struggling with traditional freelance services that locked them into single specialists with fixed skill sets.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Need a designer this week but a developer next week? Traditional freelancers couldn't help. Want to shift hours between team members as priorities change? Not possible with the old model.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                So we built something different. A flexible team model where your hours adapt to your needs, managed by dedicated project managers who ensure quality and consistency across all tasks.
              </p>
              <div className="mt-8 p-6 bg-primary/10 rounded-2xl border-2 border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-3">AI + Human Workforce</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We integrate AI into our services for maximum speed and efficiency. AI handles basic tasks and drafts, then our skilled specialists review and enhance everything for accuracy and quality. You get the best of both worlds: <strong className="text-foreground">AI for speed, humans for perfection.</strong>
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-96 h-96">
                <TeamHub />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We've reimagined freelance services from the ground up. Here's how we're changing the game.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Flexible Teams, Not Fixed Freelancers
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Traditional freelancers lock you into one person with one skill set. We give you access to an entire team – developers, designers, writers, video editors – all under one flexible plan.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Hours That Adapt to You
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Need more design work this week? Shift your hours. Big development project next week? Shift them again. Your priorities change, and your support should too.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Process-First Approach
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't just complete tasks – we identify patterns, create systems, and build processes that save you hours every week. That's how we achieve 40% efficiency gains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These principles guide everything we do, from how we work to how we grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Efficiency First</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We constantly look for ways to work smarter, not harder. Every process can be improved, every workflow optimized.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Quality Without Compromise</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every task, no matter how small, deserves our best effort. We deliver work we're proud to put our name on.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Transparent Communication</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Clear updates, honest timelines, and proactive communication. You'll never wonder what's happening with your tasks.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Technology and best practices evolve. So do we. Our team stays current with the latest tools and techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Your <span className="text-primary">AI + Human</span> Extended Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We combine AI automation with human expertise across all key disciplines. Every team member is carefully vetted, continuously trained, and empowered with AI tools to deliver exceptional work faster.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <member.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="font-semibold text-foreground text-sm">
                  {member.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary">
        <div className="container mx-auto text-center max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-8">
            Experience the
            <span className="text-primary-foreground/90"> Difference</span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-16 leading-relaxed">
            Join dozens of businesses who've discovered a smarter way to work. Let's discuss how our flexible teams can transform your productivity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-background text-primary hover:bg-background/90 text-lg px-8 py-4 h-auto" asChild>
              <a href="https://calendly.com/angellawretta/30min" target="_blank" rel="noopener noreferrer">
                Start Your Journey
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

export default WhyUs;