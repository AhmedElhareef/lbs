
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { CartItem } from "@/types/cart";

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

const ShoppingCart = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: ShoppingCartProps) => {
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const { toast } = useToast();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    toast({
      title: "Order Placed Successfully!",
      description: `Your order has been placed using ${
        paymentMethod === "card" ? "Credit Card" : "Cash on Delivery"
      }.`,
    });
    onClearCart();
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="mb-5">
          <SheetTitle className="text-2xl font-bold text-lbs-charcoal">
            Your Shopping Cart {totalItems > 0 && `(${totalItems})`}
          </SheetTitle>
        </SheetHeader>
        
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-lbs-charcoal/70 mb-4">
              Your cart is empty
            </p>
            <SheetClose asChild>
              <Button 
                className="bg-lbs-burgundy hover:bg-lbs-burgundy/90 text-white"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Continue Shopping
              </Button>
            </SheetClose>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 pb-4 border-b border-gray-200"
                >
                  <div className="h-20 w-20 flex-shrink-0 rounded overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-lbs-charcoal">{item.name}</h4>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-lbs-charcoal/70 hover:text-lbs-burgundy -mt-1"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-lbs-charcoal/70 mb-2">
                      {item.price} EGP
                    </p>
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-md border-lbs-charcoal/30"
                        onClick={() =>
                          onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-md border-lbs-charcoal/30"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                      <span className="ml-auto font-medium text-lbs-charcoal">
                        {(item.price * item.quantity).toFixed(2)} EGP
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between py-2 border-t border-b border-gray-200">
                <span className="font-medium text-lbs-charcoal">Subtotal</span>
                <span className="font-medium text-lbs-charcoal">
                  {subtotal.toFixed(2)} EGP
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="font-medium text-lbs-charcoal">Payment Method</h4>
              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="space-y-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center gap-2">
                    <span>Credit Card</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod" className="flex items-center gap-2">
                    <span>Cash on Delivery</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <SheetFooter className="sm:justify-start gap-2 flex-col sm:flex-row">
              <Button
                className="w-full bg-lbs-burgundy hover:bg-lbs-burgundy/90 text-white"
                onClick={handleCheckout}
              >
                Checkout ({subtotal.toFixed(2)} EGP)
              </Button>
              <Button
                variant="outline"
                className="w-full border-lbs-charcoal/30 text-lbs-charcoal"
                onClick={onClearCart}
              >
                Clear Cart
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
