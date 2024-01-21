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

export interface ISubCategory {
  _id: string;
  title: string;
  categoryId: string;
  thumbnail: string;
}

export interface ICategory {
  _id: string;
  title: string;
  thumbnail: string;
  subCategories: ISubCategory[];
}

export interface IAddress {
  _id: string;
  courtesyTitle: string;
  name: string;
  addressLine1: string;
  addressLine2: string;
  addressType: string;
  latitude: number;
  longitude: number;
  landmark: string;
}

export interface IOrder {
  _id: string;
  userId: string;
  transactionId: string;
  selectedAddress: IAddress;
  paymentStatus: string;
  orderStatus: string;
  totalAmount: number;
  totalItems: number;
  items: Omit<IProduct, "images" | "details">[];
}
