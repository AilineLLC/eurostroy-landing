import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/app/lib/api/axios';
import type { ProductsResponse } from '@/app/lib/api/types/products';

const fetchProducts = async (): Promise<ProductsResponse> => {
  const { data } = await apiClient.get<ProductsResponse>('/api/Cat', {
    params: { First: true, Size: 10, frontPage: true },
  });
  return data;
};

export const useProducts = () =>
  useQuery({
    queryKey: ['products', 'bestseller'],
    queryFn: fetchProducts,
  });
