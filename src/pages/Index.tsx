import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    {
      title: "Асфальто-бетонные заводы",
      icon: "Factory",
      description: "Стационарные и мобильные АБЗ для производства качественных смесей",
      image: "https://cdn.poehali.dev/projects/2c87acdf-ed4a-4fac-bb52-5b655f0cb647/files/f12c68b7-611c-4c83-93dd-855b09934a80.jpg"
    },
    {
      title: "Ремонтеры дорожных покрытий",
      icon: "Wrench",
      description: "Современное оборудование для эффективного ремонта дорог",
      image: "https://cdn.poehali.dev/projects/2c87acdf-ed4a-4fac-bb52-5b655f0cb647/files/08833dc0-b561-41fc-9380-6bb4b4eb0444.jpg"
    },
    {
      title: "Разметочные машины",
      icon: "PaintBucket",
      description: "Профессиональная техника для нанесения дорожной разметки",
      image: "https://cdn.poehali.dev/projects/2c87acdf-ed4a-4fac-bb52-5b655f0cb647/files/4ed3be1c-a1b7-4d76-b396-83d1afefdcd4.jpg"
    },
    {
      title: "Битумные котлы для заливки швов",
      icon: "Flame",
      description: "Надёжные котлы для работы с битумными материалами"
    },
    {
      title: "Поливомоечное оборудование",
      icon: "Droplets",
      description: "Эффективная техника для поддержания чистоты дорог"
    },
    {
      title: "Пескоразбрасывающее оборудование",
      icon: "Wind",
      description: "Техника для зимнего содержания и борьбы с гололёдом"
    },
    {
      title: "Автомобильные прицепы",
      icon: "Truck",
      description: "Прочные прицепы для транспортировки оборудования"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Construction" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">ДорТехПром</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Продукция</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#service" className="text-foreground hover:text-primary transition-colors">Сервис</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              Связаться
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Производство дорожной спецтехники
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Надёжное оборудование для строительства и содержания дорог. 
              Полный цикл производства, сервисное обслуживание, поставка запчастей.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg">
                Смотреть каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="FileText" size={20} className="mr-2" />
                Скачать прайс
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Каталог продукции</h2>
            <p className="text-xl text-muted-foreground">
              Широкий ассортимент дорожно-строительной техники
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-12 h-12 rounded-lg bg-white/90 flex items-center justify-center backdrop-blur-sm">
                        <Icon name={category.icon} size={24} className="text-primary" />
                      </div>
                    </div>
                  </div>
                )}
                <CardContent className="p-6">
                  {!category.image && (
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon name={category.icon} size={32} className="text-primary" />
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-4xl font-bold text-foreground mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-4">
                ДорТехПром — ведущий производитель дорожно-строительной техники с 15-летним опытом работы на российском рынке.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Мы предлагаем полный спектр оборудования для строительства и содержания дорог: от асфальто-бетонных заводов до специализированной техники для зимнего содержания.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Единиц техники</div>
                </div>
                <div className="p-4 bg-accent/10 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-1">15 лет</div>
                  <div className="text-sm text-muted-foreground">На рынке</div>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="p-4 bg-accent/10 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Сервисная поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center animate-fade-in">
              <Icon name="Building2" size={120} className="text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Сервисное обслуживание</h2>
            <p className="text-xl text-muted-foreground">
              Полный комплекс услуг по техническому обслуживанию
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon name="Settings" size={40} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Гарантийное обслуживание</h3>
                <p className="text-muted-foreground">
                  Полное гарантийное обслуживание на всё оборудование с выездом специалистов
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Icon name="Package" size={40} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Запасные части</h3>
                <p className="text-muted-foreground">
                  Собственный склад оригинальных запчастей с оперативной доставкой
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon name="Users" size={40} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Обучение операторов</h3>
                <p className="text-muted-foreground">
                  Программы обучения для эффективной работы с нашей техникой
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Готовы ответить на все ваши вопросы
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Phone" size={28} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name="Mail" size={28} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">info@dortehprom.ru</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="MapPin" size={28} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Адрес</h3>
                  <p className="text-muted-foreground">Москва, ул. Промышленная, 25</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Construction" size={28} className="text-primary" />
                <span className="text-xl font-bold">ДорТехПром</span>
              </div>
              <p className="text-sm opacity-80">
                Производство дорожной спецтехники с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Асфальто-бетонные заводы</li>
                <li>Ремонтеры покрытий</li>
                <li>Разметочные машины</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Сертификаты</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@dortehprom.ru</li>
                <li>Москва, ул. Промышленная, 25</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-60">
            © 2024 ДорТехПром. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;