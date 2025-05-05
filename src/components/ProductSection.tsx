
import { useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductSectionProps {
  products: Product[];
  categories: string[];
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  searchResults: Product[] | null;
}

const ProductSection = ({
  products,
  categories,
  onAddToCart,
  onViewDetails,
  searchResults,
}: ProductSectionProps) => {
  const [category, setCategory] = useState<string>("all");

  const filteredProducts = 
    searchResults !== null
      ? searchResults
      : category === "all"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <section id="products" className="py-16 bg-lbs-ivory">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-lbs-charcoal mb-4">Our Collection</h2>
          <p className="text-lbs-charcoal/70 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium men's clothing and accessories, 
            designed with quality and style in mind.
          </p>
        </div>

        {searchResults !== null ? (
          <div className="mb-8">
            <h3 className="text-xl font-medium text-lbs-charcoal mb-4">
              Search Results ({filteredProducts.length} items)
            </h3>
          </div>
        ) : (
          <Tabs
            defaultValue="all"
            value={category}
            onValueChange={setCategory}
            className="mb-8"
          >
            <div className="flex justify-center">
              <TabsList className="bg-white">
                <TabsTrigger 
                  value="all"
                  className="data-[state=active]:bg-lbs-burgundy data-[state=active]:text-white"
                >
                  All Products
                </TabsTrigger>
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className="data-[state=active]:bg-lbs-burgundy data-[state=active]:text-white"
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        )}

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-lbs-charcoal">
              No products found
            </h3>
            <p className="text-lbs-charcoal/70 mt-2">
              Try a different search term or browse our categories
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
