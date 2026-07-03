export type CertificateProduct = {
  id: string;
  name: string;
  article: string | null;
};

export type CertificateFile = {
  id: string;
  name: string | null;
  extension: string;
  size: number;
  createdAt: string;
  path: string;
};

export type CertificateFactory = {
  id: string;
  name: string;
};

export type Certificate = {
  id: string;
  title: string;
  description: string | null;
  product: CertificateProduct;
  file: CertificateFile;
  factory: CertificateFactory;
  createdAt: string;
};

export type CertificatesResponse = {
  data: Certificate[];
  totalCount: number;
  pageSize: number;
  hasPrevious: boolean;
  hasNext: boolean;
};
