
import { Product } from "@/types/product";

const products: Product[] = [
  {
    id: "1",
    name: "Premium Slim Fit Jeans",
    price: 899,
    shortDescription: "Classic dark wash slim fit jeans with perfect stretch comfort.",
    description: "These premium slim fit jeans are designed for the modern man who values both style and comfort. Crafted from high-quality denim with just the right amount of stretch, they provide exceptional comfort while maintaining their shape throughout the day.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1026&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=987&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=986&auto=format&fit=crop"
    ],
    category: "jeans",
    material: "98% Cotton, 2% Elastane",
    isNew: true,
    isFeatured: true
  },
  {
    id: "2",
    name: "Casual Linen Shirt",
    price: 599,
    shortDescription: "Breathable pure linen shirt perfect for warm weather.",
    description: "Stay cool and stylish with our pure linen casual shirt. Designed for comfort in warm weather, this shirt features a relaxed fit and breathable fabric that's perfect for both casual weekend outings and summer events.",
    image: "https://images.unsplash.com/photo-1604695573706-53170668f6a6?q=80&w=987&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1625910513399-116294a53247?q=80&w=987&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559334417-a57bd929f003?q=80&w=987&auto=format&fit=crop"
    ],
    category: "shirts",
    material: "100% Pure Linen",
    isFeatured: true
  },
  {
    id: "3",
    name: "Classic Leather Jacket",
    price: 1599,
    shortDescription: "Timeless leather jacket crafted from premium full-grain leather.",
    description: "Our classic leather jacket is an investment piece designed to last for years. Made from premium full-grain leather that gets better with age, it features a timeless design with clean lines and minimal detailing for a sophisticated look that never goes out of style.",
    image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=992&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1560258018-c7db7645254e?q=80&w=992&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1035&auto=format&fit=crop"
    ],
    category: "jackets",
    material: "100% Full-Grain Leather",
    isNew: true,
    isFeatured: true
  },
  {
    id: "4",
    name: "Premium Cotton T-Shirt",
    price: 349,
    shortDescription: "Soft, durable cotton t-shirt with a perfect fit.",
    description: "Elevate your casual wardrobe with our premium cotton t-shirt. Made from high-quality long-staple cotton for exceptional softness and durability, this t-shirt offers a perfect fit and maintains its shape even after multiple washes.",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=987&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=987&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?q=80&w=1035&auto=format&fit=crop"
    ],
    category: "t-shirts",
    material: "100% Premium Cotton",
    isFeatured: true
  },
  {
    id: "5",
    name: "Wool Blend Overcoat",
    price: 1899,
    shortDescription: "Elegant overcoat crafted from luxurious wool blend fabric.",
    description: "Our wool blend overcoat combines classic elegance with modern versatility. Perfect for colder months, this refined coat features a tailored silhouette, premium lining for added warmth, and a luxurious wool blend that offers both comfort and sophistication.",
    image: "https://images.unsplash.com/photo-1483118714900-540cf339fd46?q=80&w=1170&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1578932750355-5eb30ece487f?q=80&w=987&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592887173566-33f5704aa60e?q=80&w=1170&auto=format&fit=crop"
    ],
    category: "jackets",
    material: "70% Wool, 30% Polyester",
    isNew: true
  },
  {
    id: "6",
    name: "Tailored Fit Chinos",
    price: 699,
    shortDescription: "Versatile chinos with a tailored fit for everyday style.",
    description: "These tailored fit chinos offer a perfect balance of comfort and style. Crafted from premium cotton with a touch of stretch, they provide a sleek, modern silhouette that transitions seamlessly from casual to smart-casual occasions.",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=987&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1170&auto=format&fit=crop"
    ],
    category: "pants",
    material: "97% Cotton, 3% Elastane"
  },
  {
    id: "7",
    name: "Premium Leather Belt",
    price: 399,
    shortDescription: "Handcrafted belt made from full-grain Italian leather.",
    description: "Complete your look with our premium leather belt. Handcrafted from full-grain Italian leather and featuring a classic buckle design, this belt adds a touch of sophistication to any outfit while offering exceptional durability for years of wear.",
    image: "https://images.unsplash.com/photo-1659095878242-91295370f937?q=80&w=1170&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=987&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624222247804-6c32ddc4eb9a?q=80&w=1170&auto=format&fit=crop"
    ],
    category: "accessories",
    material: "100% Full-Grain Italian Leather"
  },
  {
    id: "8",
    name: "Oxford Button-Down Shirt",
    price: 649,
    shortDescription: "Classic Oxford shirt crafted from premium cotton.",
    description: "A wardrobe essential, our Oxford button-down shirt combines timeless style with everyday versatility. Made from premium cotton that gets better with each wash, this shirt features a comfortable regular fit and classic details that make it perfect for both casual and smart-casual occasions.",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1025&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1541087264-3cbcd7630f71?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1171&auto=format&fit=crop"
    ],
    category: "shirts",
    material: "100% Premium Cotton"
  },
  {
    id: "9",
    name: "Merino Wool Sweater",
    price: 799,
    shortDescription: "Luxuriously soft merino wool sweater for ultimate comfort.",
    description: "Experience exceptional comfort with our merino wool sweater. Crafted from premium merino wool that's naturally temperature-regulating, incredibly soft, and lightweight, this versatile sweater offers both warmth and breathability for year-round wear.",
    image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1072&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=987&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=987&auto=format&fit=crop"
    ],
    category: "sweaters",
    material: "100% Merino Wool",
    isNew: true
  },
  {
    id: "10",
    name: "Classic Aviator Sunglasses",
    price: 499,
    shortDescription: "Timeless aviator sunglasses with polarized lenses.",
    description: "Our classic aviator sunglasses combine iconic style with modern functionality. Featuring polarized lenses that reduce glare and enhance visual clarity, a lightweight metal frame, and adjustable nose pads for a comfortable fit, these sunglasses offer both sophistication and practical UV protection.",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1170&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1180&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1625591342274-013866180476?q=80&w=1164&auto=format&fit=crop"
    ],
    category: "accessories",
    material: "Metal Frame, Polarized Lenses"
  },
  {
    id: "11",
    name: "Slim Fit Dress Pants",
    price: 749,
    shortDescription: "Elegant dress pants with a modern slim fit.",
    description: "Elevate your formal wardrobe with our slim fit dress pants. Featuring a modern silhouette, premium fabric with a subtle texture, and expert tailoring, these versatile pants provide a polished look for business meetings, formal events, or dressed-up casual occasions.",
    image: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=987&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=987&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603252109612-24fa03d145c8?q=80&w=987&auto=format&fit=crop"
    ],
    category: "pants",
    material: "65% Polyester, 33% Viscose, 2% Elastane"
  },
  {
    id: "12",
    name: "Casual Canvas Sneakers",
    price: 549,
    shortDescription: "Comfortable canvas sneakers for everyday casual style.",
    description: "Step up your casual style with our canvas sneakers. Designed for everyday comfort, these versatile shoes feature a cushioned insole, breathable canvas upper, and durable rubber outsole. Their clean, minimalist design pairs effortlessly with jeans, chinos, or shorts for an effortlessly cool look.",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=998&auto=format&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1257&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1171&auto=format&fit=crop"
    ],
    category: "shoes",
    material: "Canvas Upper, Rubber Sole"
  }
];

export const categories = [
  "jeans",
  "shirts",
  "t-shirts",
  "jackets",
  "pants",
  "sweaters",
  "accessories",
  "shoes"
];

export default products;
