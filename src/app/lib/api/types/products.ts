export type ProductImage = {
  path: string;
};

export type ProductCategory = {
  id: string;
  name: string;
};

export type Product = {
  id: string;
  name: string;
  description?: string | null;
  rating?: number | null;
  image: ProductImage | null;
  icon: ProductImage | null;
  category?: ProductCategory | null;
};

export type ProductsResponse = {
  data: Product[];
  totalCount: number;
};
