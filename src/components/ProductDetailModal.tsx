
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Product } from "@/types/product";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  similarProducts: Product[];
  onViewDetails: (product: Product) => void;
}

const ProductDetailModal = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  similarProducts,
  onViewDetails,
}: ProductDetailModalProps) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-bold text-lbs-charcoal">
            {product.name}
          </DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <X className="h-5 w-5" />
            </Button>
          </DialogClose>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden h-[350px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2">
              <div className="h-20 w-20 rounded border border-gray-200 p-1 cursor-pointer hover:border-lbs-burgundy">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.additionalImages?.map((img, idx) => (
                <div
                  key={idx}
                  className="h-20 w-20 rounded border border-gray-200 p-1 cursor-pointer hover:border-lbs-burgundy"
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${idx + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Tabs defaultValue="details">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="sizing">Sizing & Care</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="space-y-4 pt-4">
                <div className="text-lbs-burgundy text-2xl font-bold">
                  {product.price} EGP
                </div>
                
                <p className="text-lbs-charcoal/80">{product.description}</p>
                
                <div>
                  <h4 className="font-medium text-sm text-lbs-charcoal mb-2">
                    Materials
                  </h4>
                  <p className="text-sm text-lbs-charcoal/80">
                    {product.material || "100% Premium Materials"}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-lbs-charcoal mb-2">Size</h4>
                  <div className="flex flex-wrap gap-2">
                    {["S", "M", "L", "XL", "XXL"].map((size) => (
                      <Button
                        key={size}
                        type="button"
                        variant={selectedSize === size ? "default" : "outline"}
                        className={
                          selectedSize === size
                            ? "bg-lbs-burgundy hover:bg-lbs-burgundy/90 text-white"
                            : "border-lbs-charcoal/30 text-lbs-charcoal"
                        }
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-lbs-charcoal mb-2">Color</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Black", "Navy", "Beige", "Gray"].map((color) => (
                      <Button
                        key={color}
                        type="button"
                        variant={selectedColor === color ? "default" : "outline"}
                        className={
                          selectedColor === color
                            ? "bg-lbs-burgundy hover:bg-lbs-burgundy/90 text-white"
                            : "border-lbs-charcoal/30 text-lbs-charcoal"
                        }
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div>
                    <h4 className="font-medium text-sm text-lbs-charcoal mb-2">
                      Quantity
                    </h4>
                    <div className="flex items-center border border-lbs-charcoal/30 rounded-md">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-lbs-charcoal"
                        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                        disabled={quantity <= 1}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{quantity}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-lbs-charcoal"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full bg-lbs-burgundy hover:bg-lbs-burgundy/90 text-white"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </TabsContent>
              
              <TabsContent value="sizing" className="space-y-4 pt-4">
                <div>
                  <h4 className="font-medium text-lbs-charcoal mb-2">Size Chart</h4>
                  <div className="border border-lbs-charcoal/20 rounded-md overflow-hidden">
                    <table className="min-w-full divide-y divide-lbs-charcoal/20">
                      <thead className="bg-lbs-ivory">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-lbs-charcoal uppercase tracking-wider">
                            Size
                          </th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-lbs-charcoal uppercase tracking-wider">
                            Chest (in)
                          </th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-lbs-charcoal uppercase tracking-wider">
                            Waist (in)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-lbs-charcoal/20">
                        <tr>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-lbs-charcoal">S</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-lbs-charcoal">36-38</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-lbs-charcoal">30-32</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-lbs-charcoal">M</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-lbs-charcoal">38-40</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-lbs-charcoal">32-34</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-lbs-charcoal">L</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-lbs-charcoal">40-42</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-lbs-charcoal">34-36</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-lbs-charcoal">XL</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-lbs-charcoal">42-44</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-lbs-charcoal">36-38</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-lbs-charcoal">XXL</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-lbs-charcoal">44-46</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-lbs-charcoal">38-40</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-lbs-charcoal mb-2">Care Instructions</h4>
                  <ul className="list-disc list-inside text-sm text-lbs-charcoal/80 space-y-1">
                    <li>Machine wash cold with similar colors</li>
                    <li>Do not bleach</li>
                    <li>Tumble dry low</li>
                    <li>Warm iron if needed</li>
                    <li>Do not dry clean</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
            
            {similarProducts.length > 0 && (
              <div className="mt-6">
                <h4 className="font-medium text-lbs-charcoal mb-3">You might also like</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {similarProducts.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="cursor-pointer hover-scale"
                      onClick={() => {
                        onClose();
                        onViewDetails(item);
                      }}
                    >
                      <div className="h-24 rounded overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs font-medium mt-1 text-lbs-charcoal">
                        {item.name}
                      </p>
                      <p className="text-xs text-lbs-burgundy">{item.price} EGP</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
