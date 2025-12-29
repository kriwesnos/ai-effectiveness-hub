import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    user: "Кирилл М.",
    initials: "КМ",
    color: "text-blue-500",
    bgColor: "bg-blue-500",
    text: "Ни капли не жалею, что пошел на курс. Уже на третьем модуле окупил обучение, взяв заказ на разработку бота для кофейни ☕️. Материал структурирован идеально, даже для новичков. Спасибо за новую профессию! 🤝",
    time: "10:15",
    reactions: ["🔥", "👍"],
  },
  {
    id: 2,
    user: "Анна С.",
    initials: "АС",
    color: "text-orange-500",
    bgColor: "bg-orange-500",
    text: "Ребята, вы лучшие! ❤️ Столько поддержки я еще нигде не видела. Кураторы отвечают почти мгновенно. Самое ценное — это комьюнити, где мы делимся заказами и фишками. Мой доход вырос в 2 раза за месяц!",
    time: "11:42",
    reactions: ["❤️"],
  },
  {
    id: 3,
    user: "Дмитрий",
    initials: "Д",
    color: "text-green-500",
    bgColor: "bg-green-500",
    text: "Вчера сдал проект заказчику и получил 40к! 💸 А ведь еще месяц назад я даже не знал, что такое Make. Всё очень доступно, без лишней воды. Практика с первого дня — это то, что нужно.",
    time: "14:05",
    reactions: ["🔥", "💸"],
  },
  {
    id: 4,
    user: "Елена В.",
    initials: "ЕВ",
    color: "text-purple-500",
    bgColor: "bg-purple-500",
    text: "Проходила много обучений, но это — топ-1 🔥. Всё четко, по делу. Особенно зашли уроки по продажам своих услуг — страх называть цену ушел полностью. Теперь уверенно беру заказы от 500$.",
    time: "16:30",
    reactions: ["👍", "🔥"],
  },
  {
    id: 5,
    user: "Алексей",
    initials: "А",
    color: "text-red-500",
    bgColor: "bg-red-500",
    text: "Курс превзошел ожидания. Думал, будет сложно технически, но объясняют буквально \"на пальцах\". Собрал своего первого ИИ-ассистента для своего же бизнеса — он уже обрабатывает заявки 24/7. Это магия! ✨",
    time: "18:55",
    reactions: ["✨", "❤️"],
  },
];

const TelegramMessage = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="flex gap-3 items-start animate-fade-up">
      {/* Avatar */}
      <Avatar className="h-10 w-10 shrink-0 ring-2 ring-background shadow-lg">
        <AvatarFallback className={`${testimonial.bgColor} text-white font-semibold text-sm`}>
          {testimonial.initials}
        </AvatarFallback>
      </Avatar>

      {/* Message Bubble */}
      <div className="relative max-w-[320px] md:max-w-[380px]">
        {/* Bubble tail */}
        <div className="absolute -left-2 top-0 w-4 h-4 bg-white dark:bg-slate-100 rounded-bl-full" 
             style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
        
        {/* Bubble content */}
        <div className="relative bg-white dark:bg-slate-100 rounded-2xl rounded-tl-sm p-4 shadow-lg">
          {/* User name */}
          <p className={`font-bold text-sm mb-1 ${testimonial.color}`}>
            {testimonial.user}
          </p>
          
          {/* Message text */}
          <p className="text-slate-800 dark:text-slate-900 text-sm leading-relaxed">
            {testimonial.text}
          </p>
          
          {/* Timestamp */}
          <div className="flex justify-end mt-2">
            <span className="text-xs text-slate-400">{testimonial.time}</span>
          </div>
        </div>

        {/* Reactions */}
        {testimonial.reactions.length > 0 && (
          <div className="absolute -bottom-3 right-4 flex gap-1">
            {testimonial.reactions.map((reaction, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-200 rounded-full px-2 py-0.5 shadow-md border border-slate-200 text-sm"
              >
                {reaction}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Telegram-style background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e1621] to-[#17212b]">
        {/* Doodle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Что о нас говорят{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">клиенты</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Реальные отзывы от тех, кто уже использует наших AI-ассистентов
          </p>
        </div>

        {/* Masonry Grid of Messages */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="break-inside-avoid pb-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TelegramMessage testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
