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
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Our Process
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hours can be shuffled weekly between services. No need to hire multiple freelancers.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center group">
              <div className="text-center mb-8 lg:mb-0 flex-1">
                <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <step.icon className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-6 max-w-xs mx-auto">
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-xs mx-auto text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <ArrowRight className="w-10 h-10 text-primary mx-8 my-8 lg:my-0 transform lg:transform-none rotate-90 lg:rotate-0 opacity-60" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;