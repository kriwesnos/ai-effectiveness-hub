import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    niche: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.contact.trim()) {
      toast({
        title: "Заполни обязательные поля",
        description: "Имя и контакт обязательны для заполнения",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-to-telegram", {
        body: formData,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с тобой в ближайшее время",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Ошибка отправки",
        description: "Попробуй ещё раз или свяжись с нами напрямую",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact-form" className="py-24 px-4 relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="p-12 rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm">
            <div className="w-20 h-20 mx-auto rounded-full gradient-primary flex items-center justify-center mb-6 glow-primary">
              <CheckCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Заявка отправлена!
            </h3>
            <p className="text-muted-foreground text-lg">
              Спасибо за интерес! Мы свяжемся с тобой в ближайшее время, чтобы обсудить твой проект.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-24 px-4 relative">
      {/* Background effects */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px]" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Получи <span className="text-gradient">AI-ассистента</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Оставь заявку — обсудим, как автоматизировать твой бизнес
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-sm space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Имя <span className="text-primary">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Как тебя зовут?"
                value={formData.name}
                onChange={handleChange}
                className="bg-background/50 border-border focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="contact" className="text-foreground">
                Телефон / Telegram <span className="text-primary">*</span>
              </Label>
              <Input
                id="contact"
                name="contact"
                placeholder="+7 или @username"
                value={formData.contact}
                onChange={handleChange}
                className="bg-background/50 border-border focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="niche" className="text-foreground">
              Ниша бизнеса
            </Label>
            <Input
              id="niche"
              name="niche"
              placeholder="Например: салон красоты, онлайн-школа, магазин..."
              value={formData.niche}
              onChange={handleChange}
              className="bg-background/50 border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-foreground">
              Опиши задачу
            </Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Какие задачи хочешь автоматизировать? Что сейчас занимает больше всего времени?"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="bg-background/50 border-border focus:border-primary resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full gradient-primary text-primary-foreground font-semibold py-6 text-lg glow-primary hover:scale-[1.02] transition-transform disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Отправка...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Получить AI-ассистента
              </>
            )}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Нажимая кнопку, ты соглашаешься на обработку данных
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
