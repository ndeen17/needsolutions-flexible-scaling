import { ArrowRight, RefreshCw, Users, CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Users,
      title: "Tell Us Your Needs",
      description: "Share your project requirements and business goals with our team."
    },
    {
      icon: RefreshCw,
      title: "We Match & Manage",
      description: "We assign the right experts and manage them so you don't have to."
    },
    {
      icon: CheckCircle,
      title: "You Scale & Grow",
      description: "Focus on your business while we handle the execution seamlessly."
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hours can be shuffled weekly between services. No need to hire multiple freelancers.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              <div className="text-center mb-8 md:mb-0">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 max-w-xs">
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-xs">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <ArrowRight className="w-8 h-8 text-accent mx-8 my-8 md:my-0 transform md:transform-none rotate-90 md:rotate-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;