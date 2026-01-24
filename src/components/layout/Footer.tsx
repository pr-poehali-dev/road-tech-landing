const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-10 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img 
                src="https://cdn.poehali.dev/files/c97b0f02-d47a-4183-9883-0cfe94bc5eac.png" 
                alt="ДОРПРОМ" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-semibold">ДОРПРОМ</span>
            </div>
            <p className="text-sm text-slate-400">
              Производство дорожной спецтехники с 1992 года
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Разделы</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/#about" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="/#catalog" className="hover:text-white transition-colors">Каталог</a></li>
              <li><a href="/#certificates" className="hover:text-white transition-colors">Сертификаты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">&nbsp;</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/#patents" className="hover:text-white transition-colors">Патенты</a></li>
              <li><a href="/#partners" className="hover:text-white transition-colors">Партнеры</a></li>
              <li><a href="/#contacts" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Контакты</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>+7 (495) 773-41-57</li>
              <li>dorprom@mail.ru</li>
              <li>МО, г. Пушкино, мкр-н Мамонтовка, ул. 2-я Полевая, д. 26</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
          © 1992-2025 Дорпром Интернациональ. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
