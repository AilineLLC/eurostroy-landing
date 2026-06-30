import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/app/lib/api/axios';
import type { CategoriesResponse } from '@/app/lib/api/types/categories';

const fetchCategories = async (): Promise<CategoriesResponse> => {
  const { data } = await apiClient.get<CategoriesResponse>('/api/Cat', {
    params: { frontPage: true, First: true, Size: 8 },
  });
  return data;
};

export const useCategories = () =>
  useQuery({
    queryKey: ['categories', 'frontPage'],
    queryFn: fetchCategories,
  });
