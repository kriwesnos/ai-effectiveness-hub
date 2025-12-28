import { MessageCircle, Calendar, ShoppingCart, GraduationCap, BarChart3, Megaphone } from "lucide-react";

const criteria = [
  {
    icon: MessageCircle,
    title: "Общение с клиентами",
    description: "AI-ассистенты берут на себя всю переписку с клиентами",
  },
  {
    icon: Calendar,
    title: "Бронирование и запись",
    description: "Ассистент уточняет время, записывает клиента и оформляет бронь",
  },
  {
    icon: ShoppingCart,
    title: "Продажи через соцсети",
    description: "Помогают подобрать товар, оформить заказ, собрать контакты",
  },
  {
    icon: GraduationCap,
    title: "Экспертиза и услуги",
    description: "Обучаешь ассистента своей экспертизе и масштабируешь её",
  },
  {
    icon: BarChart3,
    title: "Рутина и аналитика",
    description: "Анализ документов, отчёты, переводы, сбор аналитики",
  },
  {
    icon: Megaphone,
    title: "Контент и маркетинг",
    description: "Генерация постов, рассылок, рекламных текстов",
  },
];

const Criteria = () => {
  return (
    <section className="py-24 px-4 relative bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Мы подходим тебе, если <span className="text-gradient">у тебя есть</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Любая из этих задач — уже повод для автоматизации
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteria.map((item, index) => (
            <div
              key={item.title}
              className="group relative p-6 rounded-xl border border-border bg-card/80 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Criteria;
