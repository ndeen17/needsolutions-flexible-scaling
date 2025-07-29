import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "10h/week",
      subtitle: "Ideal for ongoing support",
      price: "Contact Us",
      features: [
        "10 hours per week",
        "Flexible task allocation",
        "Email support",
        "Basic project management",
        "Weekly reports"
      ],
      popular: false
    },
    {
      name: "20h/week",
      subtitle: "Great for active projects",
      price: "Contact Us",
      features: [
        "20 hours per week",
        "Priority task allocation",
        "Dedicated project manager",
        "Real-time communication",
        "Bi-weekly strategy calls",
        "Advanced reporting"
      ],
      popular: true
    },
    {
      name: "40h/week",
      subtitle: "Full team at your service",
      price: "Contact Us",
      features: [
        "40 hours per week",
        "Full team access",
        "Senior project manager",
        "Daily check-ins",
        "Weekly strategy sessions",
        "Priority support",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Flexible Hourly Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect package for your business needs. Hours can be shuffled weekly between different services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-card p-8 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                plan.popular 
                  ? "border-accent shadow-xl ring-2 ring-accent" 
                  : "border-border shadow-lg hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-accent to-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {plan.subtitle}
                </p>
                <div className="text-3xl font-bold text-primary">
                  {plan.price}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "popular" : "outline"} 
                size="lg" 
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            All plans include a dedicated project manager
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>✓ 40% average efficiency gain</span>
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;