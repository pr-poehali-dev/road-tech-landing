import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ProductGalleryProps {
  productImages: string[];
  selectedImage: number;
  setSelectedImage: (index: number) => void;
}

const ProductGallery = ({ productImages, selectedImage, setSelectedImage }: ProductGalleryProps) => {
  return (
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
  );
};

export default ProductGallery;
