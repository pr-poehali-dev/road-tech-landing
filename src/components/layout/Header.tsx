import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden animate-in fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      <header className="fixed top-0 w-full bg-white border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-6 py-3">
          <nav className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/c97b0f02-d47a-4183-9883-0cfe94bc5eac.png" 
                alt="ДОРПРОМ" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-semibold text-foreground">ДОРПРОМ</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="/#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">О нас</a>
              <a href="/#catalog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Каталог</a>
              <a href="/#certificates" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Сертификаты</a>
              <a href="/#patents" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Патенты</a>
              <a href="/#partners" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Партнеры</a>
              <a href="/#contacts" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+74957734157" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={18} strokeWidth={1.5} />
                +7 (495) 773-41-57
              </a>
              <Button size="sm" className="hidden xl:flex">
                Связаться
              </Button>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} strokeWidth={1.5} />
            </Button>
          </nav>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-in slide-in-from-top-5">
              <div className="flex flex-col gap-4">
                <a 
                  href="/#about" 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  О нас
                </a>
                <a 
                  href="/#catalog" 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Каталог
                </a>
                <a 
                  href="/#certificates" 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Сертификаты
                </a>
                <a 
                  href="/#patents" 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Патенты
                </a>
                <a 
                  href="/#partners" 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Партнеры
                </a>
                <a 
                  href="/#contacts" 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Контакты
                </a>
                <div className="border-t border-border pt-4 mt-2">
                  <a 
                    href="tel:+74957734157" 
                    className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors py-2"
                  >
                    <Icon name="Phone" size={18} strokeWidth={1.5} />
                    +7 (495) 773-41-57
                  </a>
                  <Button size="sm" className="w-full mt-3">
                    Связаться
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;