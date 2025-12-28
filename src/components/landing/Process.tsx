import { Search, Lightbulb, Code2, Plug, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Анализ",
    description: "Изучаем твои задачи и процессы бизнеса",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Проектирование",
    description: "Разрабатываем логику AI-ассистента",
  },
  {
    icon: Code2,
    number: "03",
    title: "Разработка",
    description: "Создаём и обучаем под твои задачи",
  },
  {
    icon: Plug,
    number: "04",
    title: "Интеграция",
    description: "Подключаем к сервисам и запускаем",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Поддержка",
    description: "Помогаем масштабировать решение",
  },
];

const Process = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Как <span className="text-gradient">мы работаем</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            От идеи до работающего AI-ассистента за 5 шагов
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative text-center"
              >
                {/* Step card */}
                <div className="relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-105">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-primary text-primary-foreground text-sm font-bold">
                    {step.number}
                  </div>
                  
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mt-2 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
