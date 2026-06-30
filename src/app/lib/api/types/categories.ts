export type CategoryImage = {
  path: string;
};

export type Category = {
  id: string;
  name: string;
  image: CategoryImage | null;
  icon: CategoryImage | null;
};

export type CategoriesResponse = {
  data: Category[];
  totalCount: number;
};
