import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/c97b0f02-d47a-4183-9883-0cfe94bc5eac.png" 
                alt="ДОРПРОМ" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Производство дорожно-строительной техники с 1992 года
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-base">Компания</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#about" className="text-white/70 hover:text-white transition-colors">О нас</a></li>
              <li><a href="/#catalog" className="text-white/70 hover:text-white transition-colors">Каталог</a></li>
              <li><a href="/#certificates" className="text-white/70 hover:text-white transition-colors">Сертификаты</a></li>
              <li><a href="/#patents" className="text-white/70 hover:text-white transition-colors">Патенты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-base">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-white/70">
                <a href="tel:+74957734157" className="hover:text-white transition-colors">
                  +7 (495) 773-41-57
                </a>
              </li>
              <li className="text-white/70">
                <a href="mailto:info@dorprom.ru" className="hover:text-white transition-colors">
                  info@dorprom.ru
                </a>
              </li>
              <li className="text-white/70">
                Московская область
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-base">Мы в соцсетях</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Icon name="Mail" size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Icon name="Phone" size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} ДОРПРОМ Интернациональ. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
