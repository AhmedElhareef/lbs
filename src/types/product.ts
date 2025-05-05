
export interface Product {
  id: string;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  image: string;
  additionalImages?: string[];
  category: string;
  material?: string;
  isNew?: boolean;
  isFeatured?: boolean;
}
