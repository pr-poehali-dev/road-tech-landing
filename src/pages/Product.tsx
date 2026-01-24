import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfoTabs from "@/components/product/ProductInfoTabs";
import ProductContactForm from "@/components/product/ProductContactForm";

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
    "https://tehruss.ru/assets/images/products/478/6e8ce83487e48404ec2ce4377b14db217084e505.jpg",
    "https://tehruss.ru/assets/images/products/478/8c49664d92c6f5cbff526890f69e9a83a568650d.jpg",
    "https://tehruss.ru/assets/images/products/478/fc0be0908da49e5b9c282cecd59e905247a6c164.jpg",
    "https://tehruss.ru/assets/images/products/478/5ac551b3d9e9e459cbbb5c6396a2435c415ca3c3.jpg",
    "https://tehruss.ru/assets/images/products/478/e3c86e33abe533b04acf325d391020fcde3ab2e8.jpg",
    "https://tehruss.ru/assets/images/products/478/a02e8bf67e710ed3508d78c9f07d8706dd435145.jpg",
  ];

  const specifications = [
    { label: "Внутренний объем бункера", value: "4.2 м³" },
    { label: "Масса литого асфальтобетона", value: "9 т" },
    { label: "Масса", value: "3170 кг" },
    { label: "Температура разогрева", value: "200 ℃" },
    { label: "Тип горючего", value: "дизель" },
    { label: "Объем топливного бака", value: "100 л" },
    { label: "Тепловая мощность горелки", value: "65 кВт" },
    { label: "Расход топлива", value: "3 - 8.5 л/ч" },
    { label: "Габаритные размеры (д×ш×в)", value: "5.15 × 1.8 × 2.3 м" },
    { label: "Частота вращения мешалки", value: "10 об/мин" },
    { label: "Крутящий момент на валу мешалки", value: "24000 Нм" },
    { label: "Тип котла", value: "цилиндрический, горизонтальный" },
    { label: "Горелка", value: "дизельная 2 шт." },
    { label: "Розжиг горелок", value: "автоматический" },
    { label: "Система привода", value: "гидромеханическая" },
    { label: "Привод установки", value: "дизель Д-130" },
    { label: "Гидронасос", value: "НШ-50" },
    { label: "Объем гидронасоса", value: "50 см³" },
    { label: "Гидромотор", value: "410.56.3.У" },
    { label: "Редуктор", value: "1Ц2У" },
    { label: "Открывание шибера", value: "гидравлическое" },
    { label: "Тепловая рубашка котла", value: "воздушная" },
    { label: "Толщина изоляции", value: "50 мм" },
    { label: "Терморегулятор", value: "есть" },
    { label: "Автоматическое поддержание температуры", value: "есть" },
    { label: "Тип соединения", value: "рапид" },
    { label: "Размещение", value: "на шасси" },
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

  const equipment = [
    { name: "Варочный бак с агрегатами", quantity: "1 шт" },
    { name: "Рама для хранения кохера навесу", quantity: "1 шт" },
    { name: "Энергетическая силовая установка", quantity: "1 шт" },
    { name: "Гидравлическая система", quantity: "1 шт" },
    { name: "Шкаф управления", quantity: "1 шт" },
    { name: "Паспорт", quantity: "1 шт" },
    { name: "Руководство по эксплуатации", quantity: "1 шт" },
    { name: "Руководства по эксплуатации покупных механизмов", quantity: "1 шт" },
    { name: "Лоток выдачи литой смеси", quantity: "1 шт" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

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
              <ProductGallery 
                productImages={productImages}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />

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

        <ProductInfoTabs 
          specifications={specifications}
          features={features}
          equipment={equipment}
        />

        <ProductContactForm 
          formData={formData}
          isSubmitting={isSubmitting}
          submitStatus={submitStatus}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Product;