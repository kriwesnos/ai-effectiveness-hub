import { Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              AI Effectiveness
            </span>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} AI Effectiveness. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
