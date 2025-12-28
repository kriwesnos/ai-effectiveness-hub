import { TrendingDown, Zap, CircleCheck } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    value: "x5",
    title: "Снижение расходов",
    description: "На операционку и найм сотрудников",
  },
  {
    icon: Zap,
    value: "x10",
    title: "Ускорение задач",
    description: "От ответов клиентам до отчётов",
  },
  {
    icon: CircleCheck,
    value: "100%",
    title: "Окупаемость",
    description: "Ассистенты приносят пользу с первых задач",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Реальные <span className="text-gradient">результаты</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            AI-ассистенты работают 24/7, не болеют и не берут отпуск
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 glow-primary">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <div className="text-5xl font-display font-bold text-gradient mb-3">
                  {benefit.value}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
