import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/app/lib/api/axios';
import type { Review, ReviewsResponse } from '@/app/lib/api/types/reviews';

const fetchReviews = async (): Promise<Review[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';
  const { data } = await apiClient.get<ReviewsResponse>(`${baseUrl}/KV/landing.reviews`);
  if (!data) return [];
  return Array.isArray(data) ? data : [data];
};

export const useReviews = () =>
  useQuery({
    queryKey: ['reviews', 'landing'],
    queryFn: fetchReviews,
  });
