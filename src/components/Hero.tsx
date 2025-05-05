
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-lbs-ivory py-20 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="z-10 max-w-xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-lbs-charcoal mb-4">
            Redefine Your Style
          </h1>
          <p className="text-lg text-lbs-charcoal/80 mb-6">
            Discover our latest collection of premium men's clothing crafted with exceptional 
            materials and attention to detail. Elevate your wardrobe with timeless pieces 
            designed for the modern gentleman.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-lbs-burgundy hover:bg-lbs-burgundy/90 text-white"
              size="lg"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Shop Now
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-lbs-charcoal text-lbs-charcoal hover:bg-lbs-charcoal hover:text-white"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Story
            </Button>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[500px] w-full order-first md:order-last animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-lbs-gold/30 to-lbs-burgundy/20 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1180&auto=format&fit=crop" 
              alt="Stylish men's clothing collection" 
              className="object-cover h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
