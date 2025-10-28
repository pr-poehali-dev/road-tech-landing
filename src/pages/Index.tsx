import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <header className="fixed top-0 w-full bg-white border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/c97b0f02-d47a-4183-9883-0cfe94bc5eac.png" 
                alt="ДорТехПром" 
                className="h-10 w-auto animate-fade-in"
              />
              <span className="text-2xl font-bold text-foreground animate-fade-in">ДорТехПром</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Продукция</a>
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

      <section className="pt-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/2c87acdf-ed4a-4fac-bb52-5b655f0cb647/files/de6570ba-560c-44b4-84e1-2cab7ac4d750.jpg)' }}
        ></div>
        <div className="container mx-auto relative z-20 py-32 md:py-40">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/20 border-2 border-primary rounded mb-6">
              <span className="text-primary font-bold text-sm tracking-wide">ПРОИЗВОДСТВО С 1992 ГОДА</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-background mb-6 leading-tight tracking-tight">
              Производство дорожной спецтехники
            </h1>
            <p className="text-lg md:text-xl text-background/90 mb-10 max-w-2xl">
              Надёжное оборудование для строительства и содержания дорог. 
              Полный цикл производства, сервисное обслуживание, поставка запчастей.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-base font-semibold px-8 py-6 bg-primary hover:bg-primary/90">
                Смотреть каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base font-semibold px-8 py-6 border-2 border-background text-background hover:bg-background hover:text-foreground">
                <Icon name="FileText" size={20} className="mr-2" />
                Скачать прайс
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t-2 border-background/30">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">12</div>
                <div className="text-sm text-background/80 font-medium">Видов техники</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-sm text-background/80 font-medium">Лет на рынке</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4</div>
                <div className="text-sm text-background/80 font-medium">Федеральных округа</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">О компании ДОРПРОМ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Инженерно-производственная фирма с многолетним опытом разработки и производства дорожно-строительной техники
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <Card className="p-8 border-2">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CalendarCheck" size={32} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-primary mb-2">1992</div>
                    <p className="text-muted-foreground">
                      Фирма «ДОРПРОМ» зарегистрирована в Подмосковье. За время деятельности разработано, запатентовано и изготовлено <span className="font-bold text-foreground">12 видов машин</span> для дорожного, лесного и сельского хозяйства.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Globe" size={32} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground mb-3">Дорпром Интернациональ</div>
                    <p className="text-muted-foreground">
                      Сотрудничество с зарубежными компаниями: <span className="font-semibold">Виртген, Бомаг, Цедима</span> (Германия), <span className="font-semibold">Динапак, Партнер</span> (Швеция), <span className="font-semibold">Бернарди</span> (Италия).
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={32} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground mb-3">Качество и сертификация</div>
                    <p className="text-muted-foreground">
                      Все машины имеют сертификаты и одобрения типа ТС. Срок производства от <span className="font-bold text-foreground">15 до 45 дней</span>.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-8 border-2 bg-primary/5">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-background rounded-lg border-2">
                    <Icon name="Cog" size={40} className="text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-foreground mb-2">12</div>
                    <div className="text-sm text-muted-foreground font-medium">Видов техники</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg border-2">
                    <Icon name="TrendingDown" size={40} className="text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-foreground mb-2">-30%</div>
                    <div className="text-sm text-muted-foreground font-medium">Снижение стоимости</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg border-2">
                    <Icon name="Clock" size={40} className="text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-foreground mb-2">15-45</div>
                    <div className="text-sm text-muted-foreground font-medium">Дней на производство</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg border-2">
                    <Icon name="MapPin" size={40} className="text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-foreground mb-2">4</div>
                    <div className="text-sm text-muted-foreground font-medium">Федеральных округа</div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Factory" size={32} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground mb-3">Импортозамещение</div>
                    <p className="text-muted-foreground">
                      Переход на отечественные комплектующие снижает стоимость на <span className="font-bold text-foreground">20-30%</span> при сохранении качества.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Wrench" size={32} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground mb-3">Сервисное обслуживание</div>
                    <p className="text-muted-foreground">
                      Гарантийное и сервисное обслуживание по территориальному принципу: <span className="font-semibold">Центральный, Северо-Западный, Южный и Уральский</span> Федеральные округа.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center border-2 hover:border-primary/50 transition-colors">
              <Icon name="PackageCheck" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Российские комплектующие</h3>
              <p className="text-muted-foreground text-sm">
                Производство из отечественных материалов с привлечением опыта зарубежных компаний
              </p>
            </Card>
            <Card className="p-6 text-center border-2 hover:border-primary/50 transition-colors">
              <Icon name="Truck" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Переоборудование</h3>
              <p className="text-muted-foreground text-sm">
                Монтаж нового технологического оборудования на автотранспорт заказчиков
              </p>
            </Card>
            <Card className="p-6 text-center border-2 hover:border-primary/50 transition-colors">
              <Icon name="Sparkles" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Инновации</h3>
              <p className="text-muted-foreground text-sm">
                Реализация традиционных методов ремонта и метода пневмонабрызга
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Каталог продукции</h2>
            <p className="text-xl text-muted-foreground">
              Широкий ассортимент дорожно-строительной техники
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-200 cursor-pointer animate-fade-in overflow-hidden border-2 hover:border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-12 h-12 rounded bg-white flex items-center justify-center shadow-lg">
                        <Icon name={category.icon} size={24} className="text-primary" />
                      </div>
                    </div>
                  </div>
                )}
                <CardContent className="p-6">
                  {!category.image && (
                    <div className="w-14 h-14 rounded bg-primary/5 flex items-center justify-center mb-4 border border-primary/10">
                      <Icon name={category.icon} size={28} className="text-primary" />
                    </div>
                  )}
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">О компании</h2>
              <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                ДорТехПром — ведущий производитель дорожно-строительной техники с 15-летним опытом работы на российском рынке.
              </p>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Мы предлагаем полный спектр оборудования для строительства и содержания дорог: от асфальто-бетонных заводов до специализированной техники для зимнего содержания.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-white border-l-4 border-primary rounded shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground font-medium">Единиц техники</div>
                </div>
                <div className="p-5 bg-white border-l-4 border-primary rounded shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">15 лет</div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground font-medium">На рынке</div>
                </div>
                <div className="p-5 bg-white border-l-4 border-primary rounded shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">200+</div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground font-medium">Довольных клиентов</div>
                </div>
                <div className="p-5 bg-white border-l-4 border-primary rounded shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground font-medium">Сервисная поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded border border-primary/10 flex items-center justify-center animate-fade-in">
              <Icon name="Building2" size={120} className="text-primary/20" />
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Сервисное обслуживание</h2>
            <p className="text-xl text-muted-foreground">
              Полный комплекс услуг по техническому обслуживанию
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in border-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded bg-primary/5 flex items-center justify-center mb-6 border border-primary/10">
                  <Icon name="Settings" size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Гарантийное обслуживание</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Полное гарантийное обслуживание на всё оборудование с выездом специалистов
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in border-2" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded bg-primary/5 flex items-center justify-center mb-6 border border-primary/10">
                  <Icon name="Package" size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Запасные части</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Собственный склад оригинальных запчастей с оперативной доставкой
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in border-2" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded bg-primary/5 flex items-center justify-center mb-6 border border-primary/10">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Обучение операторов</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Программы обучения для эффективной работы с нашей техникой
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Готовы ответить на все ваши вопросы
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Контактная информация</h3>
                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded bg-primary/5 flex items-center justify-center flex-shrink-0 border border-primary/10">
                        <Icon name="Phone" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Телефон</h4>
                        <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded bg-primary/5 flex items-center justify-center flex-shrink-0 border border-primary/10">
                        <Icon name="Mail" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                        <p className="text-sm text-muted-foreground">info@dortehprom.ru</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded bg-primary/5 flex items-center justify-center flex-shrink-0 border border-primary/10">
                        <Icon name="MapPin" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Адрес</h4>
                        <p className="text-sm text-muted-foreground">Москва, ул. Промышленная, 25</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Написать нам</h3>
                <Card className="border-2">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Ваше имя *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Иван Иванов"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Телефон *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+7 (999) 123-45-67"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="email@example.com"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Сообщение *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Расскажите о вашем проекте или задайте вопрос..."
                          rows={5}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      
                      {submitStatus === 'success' && (
                        <div className="p-4 bg-primary/5 border-2 border-primary rounded text-primary text-sm">
                          <div className="flex items-center gap-2">
                            <Icon name="CheckCircle" size={20} />
                            <span className="font-medium">Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.</span>
                          </div>
                        </div>
                      )}
                      
                      {submitStatus === 'error' && (
                        <div className="p-4 bg-red-50 border-2 border-red-300 rounded text-red-800 text-sm">
                          <div className="flex items-center gap-2">
                            <Icon name="AlertCircle" size={20} />
                            <span className="font-medium">Произошла ошибка. Попробуйте позже или позвоните нам.</span>
                          </div>
                        </div>
                      )}

                      <Button 
                        type="submit" 
                        className="w-full font-semibold"
                        disabled={isSubmitting}
                        size="lg"
                      >
                        {isSubmitting ? (
                          <>
                            <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                            Отправка...
                          </>
                        ) : (
                          <>
                            <Icon name="Send" size={20} className="mr-2" />
                            Отправить сообщение
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4 border-t-4 border-primary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/c97b0f02-d47a-4183-9883-0cfe94bc5eac.png" 
                  alt="ДорТехПром" 
                  className="h-8 w-auto"
                />
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