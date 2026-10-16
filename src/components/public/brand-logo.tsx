import React from 'react';
import Image from 'next/image';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  imageClassName?: string;
  showTextSuffix?: boolean;
}

export function BrandLogo({ variant = 'light', className = '', imageClassName = '' }: BrandLogoProps) {
  const defaultImageClass = 'h-8 sm:h-10';
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Official nitish Solar Logo Asset */}
      <img
        src="/logo.png"
        alt="Nitish Solar"
        className={`w-auto object-contain shrink-0 transition-all duration-300 ${
          imageClassName || defaultImageClass
        } ${variant === 'dark' ? 'brightness-0' : ''}`}
      />
    </div>
  );
}
