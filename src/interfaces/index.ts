export interface IProduct {
  _id: string;
  title: string;
  price: number;
  unit: string;
  discountPercentage: number;
  categoryId: string;
  subCategoryId: string;
  brand?: string;
  stock: number;
  thumbnail: string;
  images: string[];
  details: { title: string; description: string }[];
}
