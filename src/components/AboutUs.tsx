
const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-lbs-charcoal mb-4">About LBS</h2>
          <p className="text-lbs-charcoal/70 max-w-2xl mx-auto">
            Our mission is to provide high-quality, fashionable men's clothing with a focus on comfort and style.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1170&auto=format&fit=crop"
              alt="LBS Store Interior"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-lbs-charcoal mb-2">Our Story</h3>
              <p className="text-lbs-charcoal/80">
                Founded in 2018, LBS began with a simple idea: to create stylish, high-quality men's clothing that combines contemporary fashion with timeless elegance. Our founder's passion for fine fabrics and exceptional craftsmanship forms the foundation of every piece we create.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-lbs-charcoal mb-2">Our Promise</h3>
              <p className="text-lbs-charcoal/80">
                At LBS, we're committed to quality in everything we do. From sourcing the finest materials to ensuring perfect fits, we take pride in crafting garments that look good and feel comfortable, designed to last for years to come.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-lbs-charcoal mb-2">Our Approach</h3>
              <p className="text-lbs-charcoal/80">
                We believe that style should never compromise comfort. Each piece in our collection is carefully designed with attention to detail, ensuring that you not only look your best but feel your best. Our curated collections offer versatile options for every occasion, from casual weekends to formal events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
