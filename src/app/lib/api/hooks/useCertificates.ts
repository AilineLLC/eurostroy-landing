import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/app/lib/api/axios';
import type { CertificateSliderItem } from '@/app/lib/api/types/certificates';

const fetchCertificates = async (): Promise<CertificateSliderItem[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';
  const { data } = await apiClient.get<CertificateSliderItem[]>(`${baseUrl}/UiBanner`, {
    params: {
      Type: 'LandingCertificatesSliderItem',
      SortBy: 'Ordinal',
      SortOrder: 'Asc',
    },
  });
  return data ?? [];
};

export const useCertificates = () =>
  useQuery({
    queryKey: ['certificates', 'landing-slider'],
    queryFn: fetchCertificates,
  });
