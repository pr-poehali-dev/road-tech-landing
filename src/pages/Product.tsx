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