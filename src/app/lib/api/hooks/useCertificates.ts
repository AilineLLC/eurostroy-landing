import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/app/lib/api/axios';
import type { CertificatesResponse } from '@/app/lib/api/types/certificates';

const fetchCertificates = async (): Promise<CertificatesResponse> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';
  const { data } = await apiClient.get<CertificatesResponse>(`${baseUrl}/Certificate`, {
    params: { Size: 10 },
  });
  return data;
};

export const useCertificates = () =>
  useQuery({
    queryKey: ['certificates'],
    queryFn: fetchCertificates,
  });
