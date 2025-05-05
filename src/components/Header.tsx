
import { useState } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onSearch: (term: string) => void;
}

const Header = ({ cartItemsCount, onCartClick, onSearch }: HeaderProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      toast({
        title: "Searching...",
        description: `Finding products matching "${searchTerm}"`,
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-lbs-charcoal mr-2">LBS</h1>
            <p className="hidden md:block text-sm text-lbs-burgundy italic">
              Timeless Style, Modern Elegance
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-lbs-charcoal hover:text-lbs-burgundy font-medium">
              Home
            </a>
            <a href="#products" className="text-lbs-charcoal hover:text-lbs-burgundy font-medium">
              Products
            </a>
            <a href="#about" className="text-lbs-charcoal hover:text-lbs-burgundy font-medium">
              About
            </a>
            <a href="#contact" className="text-lbs-charcoal hover:text-lbs-burgundy font-medium">
              Contact
            </a>
          </nav>

          {/* Search, Cart, and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden md:flex">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="w-60 pr-8 border-lbs-charcoal/20 focus-visible:ring-lbs-burgundy"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                  <Search className="h-5 w-5 text-lbs-charcoal" />
                </button>
              </div>
            </form>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onCartClick}
              className="relative"
            >
              <ShoppingCart className="h-6 w-6 text-lbs-charcoal" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-lbs-burgundy text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-lbs-charcoal" />
              ) : (
                <Menu className="h-6 w-6 text-lbs-charcoal" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu and Search */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <nav className="flex flex-col space-y-2 mb-4">
              <a
                href="#"
                className="text-lbs-charcoal hover:text-lbs-burgundy font-medium py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#products"
                className="text-lbs-charcoal hover:text-lbs-burgundy font-medium py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#about"
                className="text-lbs-charcoal hover:text-lbs-burgundy font-medium py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-lbs-charcoal hover:text-lbs-burgundy font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
            <form onSubmit={handleSearch} className="mt-2">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pr-8 border-lbs-charcoal/20"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Search className="h-5 w-5 text-lbs-charcoal" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
