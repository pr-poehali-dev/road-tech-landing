import Icon from "@/components/ui/icon";

interface ProductGalleryProps {
  productImages: string[];
  selectedImage: number;
  setSelectedImage: (index: number) => void;
  videoUrl?: string;
  videoPoster?: string;
}

const ProductGallery = ({ productImages, selectedImage, setSelectedImage, videoUrl, videoPoster }: ProductGalleryProps) => {
  const defaultVideoUrl = videoUrl ?? "https://www.youtube.com/embed/dQw4w9WgXcQ";
  const defaultPoster = videoPoster ?? productImages[0];

  return (
    <div>
      <div className="sticky top-24">
        <div className="rounded-lg overflow-hidden bg-white border border-border mb-4">
          <img 
            src={productImages[selectedImage]} 
            alt="Ремонтер дорожный РД-925"
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
        </div>
        
        <div className="grid grid-cols-3 gap-3 mb-4">
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

        <div className="mt-6">
          <div className="flex items-center gap-2 mb-3">
            <Icon name="PlayCircle" size={20} className="text-primary" />
            <h3 className="font-semibold text-foreground">Видео работы оборудования</h3>
          </div>
          <div className="rounded-lg overflow-hidden bg-black border border-border aspect-video">
            <iframe
              src={defaultVideoUrl}
              title="Превью видео"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;