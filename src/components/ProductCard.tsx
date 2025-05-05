
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart, onViewDetails }: ProductCardProps) => {
  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {product.isNew && (
          <div className="absolute top-2 right-2 bg-lbs-burgundy text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-lbs-charcoal mb-1">{product.name}</h3>
        <p className="text-lbs-charcoal/70 text-sm mb-2 line-clamp-2 h-10">{product.shortDescription}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lbs-burgundy font-bold">{product.price} EGP</span>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="border-lbs-charcoal text-lbs-charcoal hover:bg-lbs-charcoal hover:text-white"
              onClick={() => onViewDetails(product)}
            >
              Details
            </Button>
            <Button
              size="sm"
              className="bg-lbs-burgundy hover:bg-lbs-burgundy/90 text-white"
              onClick={() => onAddToCart(product)}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
