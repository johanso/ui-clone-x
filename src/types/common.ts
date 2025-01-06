export interface ImageProps {
  path: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
  transformations?: boolean;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}