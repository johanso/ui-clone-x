// src/components/commons/Image/index.tsx
"use client";

import NextImage from "next/image";
import { ImageProps } from './types';

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

if (!urlEndpoint) {
  throw new Error('Error: Please add NEXT_PUBLIC_URL_ENDPOINT to .env');
}

const Image = ({ 
  src, 
  width, 
  height, 
  alt, 
  className = '', 
  useTransformation = false 
}: ImageProps) => {
  if (!src) {
    console.warn('Image component: src is required');
    return null;
  }

  const imagePath = src.startsWith('/') ? src.slice(1) : src;
  const imageUrl = `${urlEndpoint}/${imagePath}`;

  // Si no se proporciona alguna dimensión, usamos un valor por defecto
  const finalWidth = width || 100;
  const finalHeight = height || 100;
  
  return (
    <NextImage
      src={imageUrl}
      width={finalWidth}
      height={finalHeight}
      alt={alt || ''}
      className={`${className} ${useTransformation ? 'object-cover' : 'object-contain'}`}
    />
  );
};

export default Image;