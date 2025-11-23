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
      image: "https://cdn.poehali.dev/files/4dda6f12-e705-4690-b945-ab36534b83fe.jpg"
    },
    {
      title: "Ремонтеры дорожных покрытий",
      icon: "Wrench",
      description: "Современное оборудование для эффективного ремонта дорог",
      image: "https://cdn.poehali.dev/files/8fb274df-9782-45bf-ab08-b4f47da85e3f.jpg"
    },
    {
      title: "Разметочные машины",
      icon: "PaintBucket",
      description: "Профессиональная техника для нанесения дорожной разметки",
      image: "https://cdn.poehali.dev/files/e9dbe27f-1ec7-48b3-9fff-f3e3c489ef2b.jpg"
    },
    {
      title: "Битумные котлы для заливки швов",
      icon: "Flame",
      description: "Надёжные котлы для работы с битумными материалами",
      image: "https://cdn.poehali.dev/files/e8317f3f-73fe-4040-a813-746790344550.jpg"
    },
    {
      title: "Поливомоечное оборудование",
      icon: "Droplets",
      description: "Эффективная техника для поддержания чистоты дорог",
      image: "https://cdn.poehali.dev/files/4bc44291-b31e-4a77-852f-4751a15f4a63.jpg"
    },
    {
      title: "Пескоразбрасывающее оборудование",
      icon: "Wind",
      description: "Техника для зимнего содержания и борьбы с гололёдом",
      image: "https://cdn.poehali.dev/files/2af0fc52-c1c9-43d5-8e28-5b6479f2cdc7.jpg"
    },
    {
      title: "Автомобильные прицепы",
      icon: "Truck",
      description: "Прочные прицепы для транспортировки оборудования",
      image: "https://cdn.poehali.dev/files/668e402c-52cd-4fee-8838-51201b98e845.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-6 py-3">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/c97b0f02-d47a-4183-9883-0cfe94bc5eac.png" 
                alt="ДОРПРОМ" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-semibold text-foreground">ДОРПРОМ</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">О нас</a>
              <a href="#catalog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Каталог</a>
              <a href="#certificates" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Сертификаты</a>
              <a href="#patents" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Патенты</a>
              <a href="#partners" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Партнеры</a>
              <a href="#contacts" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+74957734157" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={18} strokeWidth={1.5} />
                +7 (495) 773-41-57
              </a>
              <Button size="sm" className="hidden xl:flex">
                <Icon name="Phone" size={16} className="mr-2" strokeWidth={1.5} />
                Связаться
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} strokeWidth={1.5} />
            </Button>
          </nav>
        </div>
      </header>

      <section className="pt-20 px-6 relative overflow-hidden min-h-[85vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/9c22e603-df9c-4b19-8488-a4ff6c7094aa.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/70"></div>
        
        <div className="container mx-auto relative z-20 py-20 md:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-primary font-semibold text-sm tracking-wide">ПРОИЗВОДСТВО С 1992 ГОДА</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Дорпром Интернациональ
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl leading-relaxed">
              Разработка и производство оборудования для строительства, ремонта и содержания дорог
            </p>
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-white/20">
              <div className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">12</div>
                <div className="text-sm text-white/80 font-medium">Видов техники</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">30+</div>
                <div className="text-sm text-white/80 font-medium">Лет на рынке</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-white/80 font-medium">Патентов получено</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/60" strokeWidth={1.5} />
        </div>
      </section>

      <section id="catalog" className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Каталог продукции</h2>
            <p className="text-base text-muted-foreground">
              Широкий ассортимент дорожно-строительной техники
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
              >
                {category.image && (
                  <div className="relative h-44 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                )}
                <CardContent className="p-5">
                  {!category.image && (
                    <div className="mb-3">
                      <Icon name={category.icon} size={32} className="text-primary" strokeWidth={1.5} />
                    </div>
                  )}
                  <h3 className="text-sm font-bold text-foreground mb-2 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-base text-muted-foreground mb-6">
              Не нашли нужную технику или хотите узнать подробнее?
            </p>
            <Button size="lg" className="font-medium shadow-lg hover:shadow-xl transition-all px-8">
              <Icon name="Phone" size={18} className="mr-2" strokeWidth={1.5} />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">О компании ДОРПРОМ</h2>
            <p className="text-base text-muted-foreground max-w-3xl">
              Инженерно-производственная фирма с многолетним опытом разработки и производства дорожно-строительной техники
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <Card className="p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Icon name="CalendarCheck" size={32} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">1992</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Фирма «ДОРПРОМ» зарегистрирована в Подмосковье. За время деятельности разработано, запатентовано и изготовлено <span className="font-semibold text-foreground">12 видов машин</span> для дорожного, лесного и сельского хозяйства.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Icon name="Globe" size={32} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground mb-2">Дорпром Интернациональ</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Сотрудничество с зарубежными компаниями: <span className="font-medium">Виртген, Бомаг, Цедима</span> (Германия), <span className="font-medium">Динапак, Партнер</span> (Швеция), <span className="font-medium">Бернарди</span> (Италия).
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Icon name="Award" size={32} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground mb-2">Качество и сертификация</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Все машины имеют сертификаты и одобрения типа ТС. Срок производства от <span className="font-semibold text-foreground">15 до 45 дней</span>.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-4">
              <Card className="p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Icon name="Factory" size={32} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground mb-2">Импортозамещение</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Переход на отечественные комплектующие снижает стоимость на <span className="font-semibold text-foreground">20-30%</span> при сохранении качества.
                    </p>
                  </div>
                </div>
              </Card>

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-5 text-center shadow-sm hover:shadow-md transition-shadow">
              <Icon name="PackageCheck" size={48} className="text-primary mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="text-base font-bold text-foreground mb-2">Российские комплектующие</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Производство из отечественных материалов с привлечением опыта зарубежных компаний
              </p>
            </Card>
            <Card className="p-5 text-center shadow-sm hover:shadow-md transition-shadow">
              <Icon name="Truck" size={48} className="text-primary mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="text-base font-bold text-foreground mb-2">Переоборудование</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Монтаж нового технологического оборудования на автотранспорт заказчиков
              </p>
            </Card>
            <Card className="p-5 text-center shadow-sm hover:shadow-md transition-shadow">
              <Icon name="Sparkles" size={48} className="text-primary mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="text-base font-bold text-foreground mb-2">Инновации</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Реализация традиционных методов ремонта и метода пневмонабрызга
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 relative overflow-hidden min-h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/e409c0ab-f8eb-4d61-b2fe-3200a680d1bd.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/70"></div>
        
        <div className="container mx-auto relative z-20 py-20">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Сервисное обслуживание
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Полное гарантийное и сервисное обслуживание техники по территориальному принципу: Центральный, Северо-Западный, Южный и Уральский Федеральные округа.
            </p>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">Свяжитесь с нами</h2>
              <p className="text-base text-muted-foreground">
                Готовы ответить на все ваши вопросы
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground mb-4">Контактная информация</h3>
                <Card className="shadow-sm">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <Icon name="Phone" size={28} className="text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-0.5">Телефон</h4>
                        <p className="text-sm text-muted-foreground">+7 (495) 773-41-57</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-sm">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <Icon name="Mail" size={28} className="text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-0.5">Email</h4>
                        <p className="text-sm text-muted-foreground">dorprom@mail.ru</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-sm">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <Icon name="MapPin" size={28} className="text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-0.5">Адрес</h4>
                        <p className="text-sm text-muted-foreground">МО, г. Пушкино, мкр-н Мамонтовка, ул. 2-я Полевая, д. 26</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Написать нам</h3>
                <Card className="shadow-sm">
                  <CardContent className="p-5">
                    <form onSubmit={handleSubmit} className="space-y-3">
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
                          placeholder="Расскажите о ваших потребностях или задайте вопрос..."
                          rows={5}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      
                      {submitStatus === 'success' && (
                        <div className="p-3 bg-primary/5 border border-primary rounded text-primary text-sm">
                          <div className="flex items-center gap-2">
                            <Icon name="CheckCircle" size={18} />
                            <span className="font-medium">Спасибо! Ваше сообщение отправлено.</span>
                          </div>
                        </div>
                      )}
                      
                      {submitStatus === 'error' && (
                        <div className="p-3 bg-red-50 border border-red-300 rounded text-red-800 text-sm">
                          <div className="flex items-center gap-2">
                            <Icon name="AlertCircle" size={18} />
                            <span className="font-medium">Произошла ошибка. Попробуйте позже.</span>
                          </div>
                        </div>
                      )}

                      <Button 
                        type="submit" 
                        className="w-full font-medium"
                        disabled={isSubmitting}
                        size="default"
                      >
                        {isSubmitting ? (
                          <>
                            <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                            Отправка...
                          </>
                        ) : (
                          <>
                            <Icon name="Send" size={16} className="mr-2" />
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
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#catalog" className="hover:text-white transition-colors">Каталог</a></li>
                <li><a href="#certificates" className="hover:text-white transition-colors">Сертификаты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">&nbsp;</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#patents" className="hover:text-white transition-colors">Патенты</a></li>
                <li><a href="#partners" className="hover:text-white transition-colors">Партнеры</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
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
    </div>
  );
};

export default Index;