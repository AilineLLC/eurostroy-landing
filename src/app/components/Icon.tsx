import React from 'react';

import Location from '@/app/assets/icons/location.svg';
import Mail from '@/app/assets/icons/mail.svg';
import Phone from '@/app/assets/icons/phone.svg';

const iconsMap = {
  location: <Location />,
  mail: <Mail />,
  phone: <Phone />,
};

const iconsSize = {
  '20': '!h-5 !w-5',
  '24': '!h-6 !w-6',
  '30': '!h-7.5 !w-7.5',
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof iconsMap;
  size?: keyof typeof iconsSize;
  className?: string;
}

export const Icon = ({
  name,
  size = '24',
  className = '',
  ...props
}: IconProps) => {
  const IconComponent = iconsMap[name];

  if (!IconComponent) {
    return null;
  }

  return React.cloneElement(IconComponent, {
    width: size,
    height: size,
    className: `inline-block ${className} ${iconsSize[size]}`,
    ...props,
  });
};

