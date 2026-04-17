interface ProductGalleryProps {
  productImages: string[];
  selectedImage: number;
  setSelectedImage: (index: number) => void;
}

const ProductGallery = ({ productImages, selectedImage, setSelectedImage }: ProductGalleryProps) => {
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