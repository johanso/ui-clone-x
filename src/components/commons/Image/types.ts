// src/components/commons/Image/types.ts
export interface ImageProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
  useTransformation?: boolean;
}