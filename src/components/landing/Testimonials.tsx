import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import telegramBg from "@/assets/telegram-bg.png";

const testimonials = [
  {
    id: 1,
    user: "Кирилл М.",
    initials: "КМ",
    color: "text-blue-600",
    bgColor: "bg-blue-500",
    text: "Заказал AI-ассистента для обработки заявок в нашей кофейне ☕️. Теперь бот сам принимает заказы, отвечает на вопросы и напоминает клиентам о готовности. Экономим 4 часа в день! Ребята сделали всё за неделю, очень доволен результатом 🤝",
    time: "10:15",
    reactions: ["🔥", "👍"],
  },
  {
    id: 2,
    user: "Анна С.",
    initials: "АС",
    color: "text-orange-600",
    bgColor: "bg-orange-500",
    text: "Обратилась с задачей автоматизировать запись клиентов в салон красоты. Сделали бота, который сам ведёт расписание, напоминает о визитах и даже собирает отзывы ❤️ Клиенты в восторге, а я наконец-то не трачу вечера на переписки. Доход вырос в 2 раза за месяц!",
    time: "11:42",
    reactions: ["❤️"],
  },
  {
    id: 3,
    user: "Дмитрий",
    initials: "Д",
    color: "text-green-600",
    bgColor: "bg-green-500",
    text: "Внедрили ассистента для моего интернет-магазина — теперь он обрабатывает 80% обращений без участия менеджеров 💸 Заказы, статусы доставки, возвраты — всё на автомате. Окупилось за первый же месяц. Рекомендую всем, кто устал от рутины!",
    time: "14:05",
    reactions: ["🔥", "💸"],
  },
  {
    id: 4,
    user: "Елена В.",
    initials: "ЕВ",
    color: "text-purple-600",
    bgColor: "bg-purple-500",
    text: "Долго искала, кто сделает нормальную автоматизацию для риелторского агентства. AI Effectiveness — топ-1 🔥 Бот квалифицирует лиды, назначает показы и ведёт базу клиентов. Конверсия выросла на 40%, а я освободила время для сделок!",
    time: "16:30",
    reactions: ["👍", "🔥"],
  },
  {
    id: 5,
    user: "Алексей",
    initials: "А",
    color: "text-red-600",
    bgColor: "bg-red-500",
    text: "Заказал бота для своей стоматологии — он теперь записывает пациентов, напоминает о визитах и даже отвечает на типовые вопросы о ценах и услугах 24/7. Администратор разгружена, пациенты довольны. Это реально магия! ✨",
    time: "18:55",
    reactions: ["✨", "❤️"],
  },
  {
    id: 6,
    user: "Марина К.",
    initials: "МК",
    color: "text-cyan-600",
    bgColor: "bg-cyan-500",
    text: "За 2 недели мне автоматизировали весь процесс работы с клиентами в фитнес-студии 🎯 Бот записывает на тренировки, продлевает абонементы, собирает обратную связь. Раньше на это уходило 5 часов в день — теперь ноль. Очень благодарна команде!",
    time: "20:10",
    reactions: ["🎯", "👏"],
  },
];

const TelegramMessage = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="flex gap-2.5 items-start animate-fade-up">
      {/* Avatar */}
      <Avatar className="h-9 w-9 shrink-0 shadow-md">
        <AvatarFallback className={`${testimonial.bgColor} text-white font-semibold text-xs`}>
          {testimonial.initials}
        </AvatarFallback>
      </Avatar>

      {/* Message Bubble */}
      <div className="relative max-w-[300px] md:max-w-[340px]">
        {/* Bubble tail */}
        <div 
          className="absolute -left-1.5 top-0 w-3 h-3"
          style={{
            background: "linear-gradient(135deg, #ffffff 50%, transparent 50%)",
          }}
        />
        
        {/* Bubble content */}
        <div className="relative bg-white rounded-xl rounded-tl-sm p-3 shadow-sm">
          {/* User name */}
          <p className={`font-semibold text-sm mb-1 ${testimonial.color}`}>
            {testimonial.user}
          </p>
          
          {/* Message text */}
          <p className="text-slate-700 text-[13px] leading-relaxed">
            {testimonial.text}
          </p>
          
          {/* Timestamp */}
          <div className="flex justify-end mt-1.5">
            <span className="text-[11px] text-slate-400">{testimonial.time}</span>
          </div>
        </div>

        {/* Reactions */}
        {testimonial.reactions.length > 0 && (
          <div className="absolute -bottom-2.5 right-3 flex gap-0.5">
            {testimonial.reactions.map((reaction, index) => (
              <div
                key={index}
                className="bg-white rounded-full px-1.5 py-0.5 shadow-sm border border-slate-100 text-xs"
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
      {/* Telegram-style wallpaper background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${telegramBg})`,
        }}
      />
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Что о нас говорят{" "}
            <span className="text-primary">клиенты</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Реальные отзывы от тех, кто уже автоматизировал бизнес с нами
          </p>
        </div>

        {/* Grid of Messages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="flex justify-center"
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
