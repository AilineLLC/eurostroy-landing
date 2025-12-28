'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

import { SectionHeading } from '@/app/components/ui/section-heading';

// Динамический импорт для Leaflet (избегаем SSR проблем)
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false },
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false },
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false },
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false },
);

type PartnerPoint = {
  id: string;
  city: string;
  address: string;
  coordinates: [number, number];
  image: string;
};

const partnerPoints: PartnerPoint[] = [
  {
    id: '1',
    city: 'Бишкек',
    address: 'ул.Горького 1/2',
    coordinates: [42.856914, 74.635075],
    image: '/suggest-1.jpg',
  },
  {
    id: '2',
    city: 'Ош',
    address: 'ул.Ленина 15',
    coordinates: [40.5156, 72.8083],
    image: '/suggest-2.jpg',
  },
  {
    id: '3',
    city: 'Талас',
    address: 'ул.Центральная 8',
    coordinates: [42.5214, 72.2428],
    image: '/suggest-3.jpg',
  },
  {
    id: '4',
    city: 'Иссык-Куль',
    address: 'ул.Курортная 22',
    coordinates: [42.6556, 77.0814],
    image: '/suggest-4.jpg',
  },
  {
    id: '5',
    city: 'Джалал-Абад',
    address: 'ул.Токтогула 10',
    coordinates: [40.9333, 72.9833],
    image: '/suggest-1.jpg',
  },
];

// Компонент маркера с попапом
const PartnerMarker = ({ point }: { point: PartnerPoint }) => {
  const [leafletIcon, setLeafletIcon] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const L = require('leaflet');

      const icon = L.divIcon({
        html: `
          <div style="
            width: 20px;
            height: 20px;
            background: #015BFF;
            border: 2px solid white;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            transform: translate(-50%, -50%);
          ">
          </div>
        `,
        className: 'partner-marker',
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      });

      setLeafletIcon(icon);
    }
  }, []);

  if (!leafletIcon) {
    return null;
  }

  return (
    <Marker position={point.coordinates as [number, number]} icon={leafletIcon}>
      <Popup
        className="partner-popup"
        closeButton={false}
        autoPan={true}
        maxWidth={320}
      >
        <div className="p-0 m-0">
          <div className="relative w-full h-[200px] rounded-t-lg overflow-hidden">
            <Image
              src={point.image}
              alt={point.city}
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>
          <div className="bg-[#015BFF] p-4 rounded-b-lg">
            <div className="flex justify-between items-center gap-2">
              <span className="text-white font-semibold text-base">
                {point.city}
              </span>
              <span className="text-white text-sm whitespace-nowrap">
                {point.address}
              </span>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export const GeographyPartnersSection = () => {
  const [isClient, setIsClient] = useState(false);
  const mapCenter: [number, number] = [42.8746, 74.5698]; // Центр Кыргызстана
  const mapZoom = 6;

  useEffect(() => {
    setIsClient(true);

    // Динамически подгружаем CSS для Leaflet
    if (typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      if (!document.head.querySelector('link[href*="leaflet"]')) {
        document.head.appendChild(link);
      }

      // Добавляем кастомные стили для попапа
      const style = document.createElement('style');
      style.textContent = `
        .partner-popup .leaflet-popup-content-wrapper {
          padding: 0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        .partner-popup .leaflet-popup-content {
          margin: 0;
          padding: 0;
        }
        .partner-popup .leaflet-popup-tip {
          background: #015BFF;
          border: none;
        }
      `;
      if (!document.head.querySelector('style[data-partner-popup]')) {
        style.setAttribute('data-partner-popup', 'true');
        document.head.appendChild(style);
      }
    }
  }, []);

  // Стили для темной карты
  const mapStyles = useMemo(() => {
    return {
      height: '100%',
      width: '100%',
      borderRadius: '32px',
      overflow: 'hidden',
    };
  }, []);

  if (!isClient) {
    return (
      <section className="container py-10 md:py-14">
        <SectionHeading as="h3">
          География и партнёры
        </SectionHeading>
        <div className="mt-8 h-[600px] bg-gray-200 rounded-[32px] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4" />
            <p className="text-gray-600">Загрузка карты...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-10 md:py-14">
      <SectionHeading as="h3">
        География и партнёры
      </SectionHeading>

      <div className="mt-8 h-[600px] md:h-[700px] relative">
        <MapContainer
          center={mapCenter}
          zoom={mapZoom}
          style={mapStyles}
          zoomControl={true}
        >
          {/* Темная тема карты - используем CartoDB Dark Matter */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            subdomains="abcd"
            maxZoom={19}
          />
          {partnerPoints.map((point) => (
            <PartnerMarker key={point.id} point={point} />
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

