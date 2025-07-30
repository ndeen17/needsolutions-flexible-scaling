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
    <section id="pricing" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Pricing Plans
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Flexible Hourly Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package for your business needs. Hours can be shuffled weekly between different services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-card p-10 rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${
                plan.popular 
                  ? "border-primary shadow-2xl ring-2 ring-primary/20 scale-105" 
                  : "border-border/50 shadow-sm hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-foreground mb-3">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  {plan.subtitle}
                </p>
                <div className="text-4xl font-bold text-primary">
                  {plan.price}
                </div>
              </div>
              
              <ul className="space-y-5 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-6 h-6 text-primary mr-4 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                size="lg" 
                className="w-full text-lg py-4 h-auto"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <p className="text-muted-foreground mb-6 text-lg">
            All plans include a dedicated project manager
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-lg text-muted-foreground">
            <span className="flex items-center">
              <Check className="w-5 h-5 text-primary mr-2" />
              40% average efficiency gain
            </span>
            <span className="flex items-center">
              <Check className="w-5 h-5 text-primary mr-2" />
              No setup fees
            </span>
            <span className="flex items-center">
              <Check className="w-5 h-5 text-primary mr-2" />
              Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;