import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

interface Specification {
  label: string;
  value: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Equipment {
  name: string;
  quantity: string;
}

interface ProductInfoTabsProps {
  specifications: Specification[];
  features: Feature[];
  equipment: Equipment[];
}

const ProductInfoTabs = ({ specifications, features, equipment }: ProductInfoTabsProps) => {
  return (
    <section className="py-12 px-6 bg-slate-50">
      <div className="container mx-auto">
        <Tabs defaultValue="specs" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 h-auto p-1 md:p-2 bg-white shadow-md rounded-xl">
            <TabsTrigger 
              value="specs" 
              className="text-xs md:text-base font-semibold py-2 px-2 md:py-4 md:px-6 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all flex flex-col md:flex-row items-center gap-1"
            >
              <Icon name="FileText" size={16} className="md:mr-2" />
              <span className="hidden md:inline">Технические характеристики</span>
              <span className="md:hidden">Техн. хар-ки</span>
            </TabsTrigger>
            <TabsTrigger 
              value="features" 
              className="text-xs md:text-base font-semibold py-2 px-2 md:py-4 md:px-6 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all flex flex-col md:flex-row items-center gap-1"
            >
              <Icon name="Star" size={16} className="md:mr-2" />
              <span>Особенности</span>
            </TabsTrigger>
            <TabsTrigger 
              value="equipment" 
              className="text-xs md:text-base font-semibold py-2 px-2 md:py-4 md:px-6 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all flex flex-col md:flex-row items-center gap-1"
            >
              <Icon name="Package" size={16} className="md:mr-2" />
              <span>Комплектация</span>
            </TabsTrigger>
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
          
          <TabsContent value="equipment">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Комплектация</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {equipment.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground font-medium">{item.name}</span>
                      <span className="text-foreground font-semibold">{item.quantity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductInfoTabs;