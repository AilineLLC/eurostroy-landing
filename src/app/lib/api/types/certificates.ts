export type CertificateSliderImage = {
  id: string;
  name: string | null;
  extension: string;
  size: number;
  createdAt: string;
  path: string;
};

export type CertificateSliderItem = {
  id: string;
  type: string;
  ordinal: number;
  link: string | null;
  customData: string | Record<string, unknown> | null;
  uiSaleId: string | null;
  image: CertificateSliderImage;
};
