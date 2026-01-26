import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
      title: "Ремонтер дорожный РД-925",
      icon: "Wrench",
      description: "Для ремонта и содержания дорог литым асфальтом (зима-лето)",
      image: "https://cdn.poehali.dev/files/e413111d-a601-4498-8e33-136fd87b9578.jpeg",
      feature1: "Всесезонное применение с литым асфальтом при температуре от -30°C до +40°C. Быстрый нагрев материала и поддержание рабочей температуры.",
      feature2: "Производительность до 2 тонн за смену с объёмом бункера 500 литров. Автономная работа до 8 часов без дозаправки."
    },
    {
      title: "Ремонтер дорожный РД-927",
      icon: "Wrench",
      description: "Для ремонта и содержания дорог асфальто-бетонной смесью в межсезонье",
      image: "https://cdn.poehali.dev/files/1fa98e41-9dcc-459e-b769-9bf9ece9eac5.jpg",
      feature1: "Система подогрева асфальто-бетонной смеси с регулируемой температурой до 180°C. Идеально для работы в межсезонье при температурах от -5°C до +25°C.",
      feature2: "Увеличенный бункер на 700 литров обеспечивает непрерывную работу. Система уплотнения обеспечивает качество ремонта на уровне капитального."
    },
    {
      title: "Самоходный заливщик швов РД-929",
      icon: "Flame",
      description: "Профессиональное оборудование для заливки швов дорожных покрытий",
      image: "https://cdn.poehali.dev/files/59e7c03d-f6e9-4733-963e-66847d8d15e4.jpg",
      feature1: "Самоходная платформа с электроприводом для точного позиционирования. Производительность до 1000 метров швов за смену с шириной заливки до 50 мм.",
      feature2: "Система плавного нагрева мастики до 200°C предотвращает перегрев. Автоматическое дозирование и контроль температуры материала."
    },
    {
      title: "Пескоразбрасывающее оборудование",
      icon: "Wind",
      description: "Техника для зимнего содержания и борьбы с гололёдом",
      image: "https://cdn.poehali.dev/files/2af0fc52-c1c9-43d5-8e28-5b6479f2cdc7.jpg",
      feature1: "Равномерное распределение противогололедных материалов с регулируемой шириной до 12 метров. Объём бункера от 1 до 3 м³ в зависимости от модели.",
      feature2: "Система защиты от коррозии и работа при температурах до -40°C. Электронная регулировка нормы внесения от 20 до 500 г/м²."
    },
    {
      title: "Автомобильные прицепы",
      icon: "Truck",
      description: "Прочные прицепы для транспортировки оборудования",
      image: "https://cdn.poehali.dev/files/668e402c-52cd-4fee-8838-51201b98e845.jpg",
      feature1: "Грузоподъёмность от 750 кг до 3500 кг с усиленной рамой. Легкосъёмные борта и возможность установки тентового каркаса.",
      feature2: "Рессорная подвеска для плавного хода и сохранности груза. Тормозная система с автоматической регулировкой усилия в зависимости от загрузки."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

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
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
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
          <div className="flex flex-col gap-6 max-w-6xl">
            {categories.map((category, index) => {
              const isRD925 = category.title === "Ремонтер дорожный РД-925";
              const CardWrapper = isRD925 ? 'a' : 'div';
              const cardProps = isRD925 ? { href: '/product' } : {};
              
              return (
                <CardWrapper key={index} {...cardProps}>
                  <Card 
                    className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-0 shadow-lg"
                  >
                    <div className="flex flex-col md:flex-row">
                      {category.image && (
                        <div className="relative w-full md:w-[450px] h-72 md:h-80 overflow-hidden flex-shrink-0">
                          <img 
                            src={category.image} 
                            alt={category.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <CardContent className="p-8 md:p-10 flex flex-col justify-center flex-1 bg-gradient-to-br from-white to-slate-50">
                        <h3 className="text-xl md:text-4xl font-bold text-foreground mb-4 leading-tight uppercase tracking-tight">
                          {category.title}
                        </h3>
                        <p className="text-base text-muted-foreground leading-relaxed mb-3">
                          {category.description}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                          {category.feature1}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                          {category.feature2}
                        </p>
                        <div className="flex items-center gap-3">
                          <Button 
                            variant="default" 
                            size="lg"
                            className="font-semibold group-hover:shadow-lg transition-all"
                          >
                            Подробнее
                            <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </CardWrapper>
              );
            })}
          </div>
          
          <div className="mt-12 text-center max-w-6xl">
            <p className="text-base text-muted-foreground mb-6">
              Не нашли нужную технику или хотите узнать подробнее?
            </p>
            <div className="flex justify-center md:justify-start">
              <Button size="lg" className="font-medium shadow-lg hover:shadow-xl transition-all px-8">
                <Icon name="Phone" size={18} className="mr-2" strokeWidth={1.5} />
                Получить консультацию
              </Button>
            </div>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 shadow-sm h-full">
              <div className="flex items-start gap-4 h-full">
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

            <Card className="p-6 shadow-sm h-full">
              <div className="flex items-start gap-4 h-full">
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

            <Card className="p-6 shadow-sm h-full">
              <div className="flex items-start gap-4 h-full">
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

            <Card className="p-6 shadow-sm h-full">
              <div className="flex items-start gap-4 h-full">
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

      <section id="news" className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Наши новости</h2>
            <p className="text-base text-muted-foreground">
              Последние события и публикации о нашей технике
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-md transition-shadow cursor-pointer overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/2a0e328b-3914-4f40-8285-8eeee5a9825e.png" 
                  alt="На дороги Новосибирска выходят термос-бункеры"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                  <Icon name="Calendar" size={14} strokeWidth={1.5} />
                  <span>21.10.2025</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                  На дороги Новосибирска выходят термос-бункеры
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  На портале Новая Сибирь вышла свежая статья о нашей технике
                </p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary font-semibold p-0 h-auto">
                  Читать далее
                  <Icon name="ArrowRight" size={16} className="ml-1" strokeWidth={1.5} />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-md transition-shadow cursor-pointer overflow-hidden border-dashed">
              <div className="h-full flex flex-col items-center justify-center p-8 min-h-[400px]">
                <Icon name="Plus" size={48} className="text-muted-foreground/40 mb-3" strokeWidth={1.5} />
                <p className="text-sm text-muted-foreground text-center">Место для новости</p>
              </div>
            </Card>

            <Card className="group hover:shadow-md transition-shadow cursor-pointer overflow-hidden border-dashed">
              <div className="h-full flex flex-col items-center justify-center p-8 min-h-[400px]">
                <Icon name="Plus" size={48} className="text-muted-foreground/40 mb-3" strokeWidth={1.5} />
                <p className="text-sm text-muted-foreground text-center">Место для новости</p>
              </div>
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

      <Footer />
    </div>
  );
};

export default Index;