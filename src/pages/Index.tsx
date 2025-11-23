import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <img 
                src="https://cdn.poehali.dev/files/c97b0f02-d47a-4183-9883-0cfe94bc5eac.png" 
                alt="ДОРПРОМ" 
                className="h-10 w-auto"
              />
              <span className="text-lg font-bold tracking-tight">ДОРПРОМ</span>
            </div>
            <div className="hidden lg:flex items-center gap-12">
              <a href="#products" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider">Продукция</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider">О компании</a>
              <a href="#service" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider">Сервис</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider">Контакты</a>
            </div>
            <Button size="sm">
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Производство с 1992 года
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
                Производство дорожной спецтехники
              </h1>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Разработка и производство оборудования для строительства, ремонта и содержания дорог по всей России
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline">
                  Скачать прайс
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] lg:h-[600px]">
              <img 
                src="https://cdn.poehali.dev/projects/2c87acdf-ed4a-4fac-bb52-5b655f0cb647/files/a8e78c4f-a757-4768-9ac9-d2e2c2d0b53b.jpg"
                alt="Дорожная техника"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="text-5xl font-bold mb-2">12</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Видов техники</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">30+</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Лет на рынке</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Федеральных округа</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Единиц техники</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px]">
              <img 
                src="https://cdn.poehali.dev/projects/2c87acdf-ed4a-4fac-bb52-5b655f0cb647/files/199aa18a-b921-4871-8e7f-2f9b5cb77a2a.jpg"
                alt="Производство"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                О компании
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-[1.1]">
                Инженерно-производственная фирма
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Фирма «ДОРПРОМ» зарегистрирована в Подмосковье в 1992 году. За время деятельности разработано, запатентовано и изготовлено 12 видов машин для дорожного хозяйства.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Более 500 единиц техники работают в четырех федеральных округах России. Продукция сертифицирована и соответствует всем требованиям ГОСТ.
              </p>
              <Button size="lg">
                Подробнее о компании
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-24 px-6 lg:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
            Наша продукция
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 leading-[1.1] max-w-3xl">
            Широкий спектр дорожно-строительной техники
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative h-64 mb-6 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/2c87acdf-ed4a-4fac-bb52-5b655f0cb647/files/f12c68b7-611c-4c83-93dd-855b09934a80.jpg"
                  alt="Асфальто-бетонные заводы"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">Асфальто-бетонные заводы</h3>
              <p className="text-gray-400 mb-4">Стационарные и мобильные АБЗ для производства качественных смесей</p>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
                Подробнее
                <Icon name="ArrowRight" size={16} />
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative h-64 mb-6 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/2c87acdf-ed4a-4fac-bb52-5b655f0cb647/files/08833dc0-b561-41fc-9380-6bb4b4eb0444.jpg"
                  alt="Ремонтеры дорожных покрытий"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">Ремонтеры дорожных покрытий</h3>
              <p className="text-gray-400 mb-4">Современное оборудование для эффективного ремонта дорог</p>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
                Подробнее
                <Icon name="ArrowRight" size={16} />
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative h-64 mb-6 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/2c87acdf-ed4a-4fac-bb52-5b655f0cb647/files/4ed3be1c-a1b7-4d76-b396-83d1afefdcd4.jpg"
                  alt="Разметочные машины"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">Разметочные машины</h3>
              <p className="text-gray-400 mb-4">Профессиональная техника для нанесения дорожной разметки</p>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
                Подробнее
                <Icon name="ArrowRight" size={16} />
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative h-64 mb-6 overflow-hidden bg-gray-800 flex items-center justify-center">
                <Icon name="Flame" size={64} className="text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Битумные котлы</h3>
              <p className="text-gray-400 mb-4">Надёжные котлы для работы с битумными материалами</p>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
                Подробнее
                <Icon name="ArrowRight" size={16} />
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative h-64 mb-6 overflow-hidden bg-gray-800 flex items-center justify-center">
                <Icon name="Droplets" size={64} className="text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Поливомоечное оборудование</h3>
              <p className="text-gray-400 mb-4">Эффективная техника для поддержания чистоты дорог</p>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
                Подробнее
                <Icon name="ArrowRight" size={16} />
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative h-64 mb-6 overflow-hidden bg-gray-800 flex items-center justify-center">
                <Icon name="Wind" size={64} className="text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Пескоразбрасыватели</h3>
              <p className="text-gray-400 mb-4">Техника для зимнего содержания и борьбы с гололёдом</p>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
                Подробнее
                <Icon name="ArrowRight" size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Сервис
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-[1.1]">
                Полное техническое обслуживание
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Гарантийное обслуживание</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Полная гарантия на всю технику с выездом специалистов на объект
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Запчасти и комплектующие</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Наличие оригинальных запчастей на складе для оперативного ремонта
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Обучение персонала</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Профессиональное обучение эксплуатации и обслуживанию техники
                  </p>
                </div>
              </div>
              <Button size="lg" className="mt-8">
                Заказать сервис
              </Button>
            </div>
            <div className="relative h-[500px]">
              <img 
                src="https://cdn.poehali.dev/projects/2c87acdf-ed4a-4fac-bb52-5b655f0cb647/files/de6570ba-560c-44b4-84e1-2cab7ac4d750.jpg"
                alt="Сервис"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Контакты
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-12 leading-[1.1]">
                Свяжитесь с нами
              </h2>
              
              <div className="space-y-8 mb-12">
                <div>
                  <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Телефон</div>
                  <a href="tel:+74955555555" className="text-2xl font-bold hover:text-primary transition-colors">
                    +7 (495) 555-55-55
                  </a>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Email</div>
                  <a href="mailto:info@dorprom.ru" className="text-2xl font-bold hover:text-primary transition-colors">
                    info@dorprom.ru
                  </a>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Адрес</div>
                  <p className="text-lg text-gray-600">
                    Московская область, Подмосковье
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Имя" 
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-primary outline-none bg-transparent text-lg transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-primary outline-none bg-transparent text-lg transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-primary outline-none bg-transparent text-lg transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Сообщение" 
                    rows={4}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-primary outline-none bg-transparent text-lg resize-none transition-colors"
                  ></textarea>
                </div>
                <Button size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 lg:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <img 
                src="https://cdn.poehali.dev/files/c97b0f02-d47a-4183-9883-0cfe94bc5eac.png" 
                alt="ДОРПРОМ" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold">ДОРПРОМ</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#products" className="text-sm hover:text-primary transition-colors uppercase tracking-wider">Продукция</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors uppercase tracking-wider">О компании</a>
              <a href="#service" className="text-sm hover:text-primary transition-colors uppercase tracking-wider">Сервис</a>
              <a href="#contacts" className="text-sm hover:text-primary transition-colors uppercase tracking-wider">Контакты</a>
            </div>
            <div className="text-sm text-gray-500">
              © 2024 ДОРПРОМ. Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
