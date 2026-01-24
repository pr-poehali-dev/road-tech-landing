import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
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

  const productImages = [
    "https://cdn.poehali.dev/files/e413111d-a601-4498-8e33-136fd87b9578.jpeg",
    "https://cdn.poehali.dev/files/1fa98e41-9dcc-459e-b769-9bf9ece9eac5.jpg",
    "https://cdn.poehali.dev/files/59e7c03d-f6e9-4733-963e-66847d8d15e4.jpg",
  ];

  const specifications = [
    { label: "Базовое шасси", value: "КАМАЗ, МАЗ, ГАЗ" },
    { label: "Объем бункера", value: "2-4 м³" },
    { label: "Производительность", value: "до 50 т/ч" },
    { label: "Тип материала", value: "Литой асфальт" },
    { label: "Рабочая температура", value: "от -30°C до +40°C" },
    { label: "Система нагрева", value: "Газовая/Дизельная" },
    { label: "Срок изготовления", value: "15-45 дней" },
    { label: "Гарантия", value: "12 месяцев" },
  ];

  const features = [
    {
      icon: "Snowflake",
      title: "Всесезонная работа",
      description: "Эксплуатация в любое время года, включая зимний период"
    },
    {
      icon: "Gauge",
      title: "Высокая производительность",
      description: "Обработка до 50 тонн материала в час"
    },
    {
      icon: "Shield",
      title: "Надежность",
      description: "Проверенные комплектующие и 12 месяцев гарантии"
    },
    {
      icon: "Wrench",
      title: "Простое обслуживание",
      description: "Доступ ко всем узлам для быстрого ремонта"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
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

      <div className="pt-20">
        <div className="bg-slate-50 py-4 px-6">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Главная</a>
              <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
              <a href="/#catalog" className="text-muted-foreground hover:text-foreground transition-colors">Каталог</a>
              <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
              <span className="text-foreground font-medium">Ремонтер дорожный РД-925</span>
            </div>
          </div>
        </div>

        <section className="py-12 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="sticky top-24">
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-4">
                      <Icon name="Star" size={14} className="mr-1" />
                      Хит продаж
                    </Badge>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden bg-white border border-border mb-4">
                    <img 
                      src={productImages[selectedImage]} 
                      alt="Ремонтер дорожный РД-925"
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {productImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === index 
                            ? 'border-primary shadow-md' 
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <img 
                          src={image} 
                          alt={`Вид ${index + 1}`}
                          className="w-full h-24 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  Ремонтер дорожный РД-925
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Профессиональное оборудование для ремонта и содержания дорог литым асфальтом. 
                  Работает круглогодично в любых погодных условиях.
                </p>

                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-border">
                  <div>
                    <div className="text-3xl font-bold text-foreground">От 2 500 000 ₽</div>
                    <div className="text-sm text-muted-foreground">Цена зависит от комплектации</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <Button size="lg" className="w-full text-base font-semibold">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Получить коммерческое предложение
                  </Button>
                  <Button size="lg" variant="outline" className="w-full text-base font-semibold">
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать техническую документацию
                  </Button>
                </div>

                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-primary" />
                      Преимущества
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Всесезонная эксплуатация при температуре от -30°C до +40°C</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Производительность до 50 тонн в час</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Монтаж на различные шасси: КАМАЗ, МАЗ, ГАЗ</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Гарантия 12 месяцев и полное сервисное обслуживание</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Сертификаты соответствия и одобрение типа ТС</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Truck" size={16} />
                    <span>Доставка по России</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    <span>Срок изготовления: 15-45 дней</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-6 bg-slate-50">
          <div className="container mx-auto">
            <Tabs defaultValue="specs" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="specs">Технические характеристики</TabsTrigger>
                <TabsTrigger value="features">Особенности</TabsTrigger>
                <TabsTrigger value="application">Применение</TabsTrigger>
              </TabsList>
              
              <TabsContent value="specs">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Технические характеристики</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {specifications.map((spec, index) => (
                        <div key={index} className="flex justify-between items-center py-3 border-b border-border">
                          <span className="text-muted-foreground font-medium">{spec.label}</span>
                          <span className="text-foreground font-semibold">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="features">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Icon name={feature.icon} size={24} className="text-primary" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="application">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Области применения</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                          <Icon name="Road" size={20} className="text-primary" />
                          Дорожное строительство
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Применяется для ремонта дорожных покрытий различных категорий. 
                          Особенно эффективен для ямочного ремонта и заделки трещин.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                          <Icon name="Home" size={20} className="text-primary" />
                          Городское хозяйство
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Идеально подходит для оперативного ремонта городских дорог, 
                          тротуаров и пешеходных зон в любое время года.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                          <Icon name="Factory" size={20} className="text-primary" />
                          Промышленные объекты
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Используется для содержания территорий промышленных предприятий, 
                          складских комплексов и логистических центров.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-3">Получить консультацию</h2>
                <p className="text-muted-foreground">
                  Оставьте заявку и наш специалист свяжется с вами в течение часа
                </p>
              </div>

              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя</label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Иван Иванов"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input 
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@mail.ru"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Расскажите о ваших задачах..."
                        rows={4}
                      />
                    </div>
                    
                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                        <Icon name="CheckCircle2" size={20} className="text-green-600" />
                        <span className="text-green-800 text-sm">Заявка успешно отправлена!</span>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
                        <Icon name="AlertCircle" size={20} className="text-red-600" />
                        <span className="text-red-800 text-sm">Ошибка отправки. Попробуйте позже.</span>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

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
    </div>
  );
};

export default Product;
