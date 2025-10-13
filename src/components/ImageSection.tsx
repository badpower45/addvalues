import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ImageSectionProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  overlay?: boolean;
  overlayGradient?: string;
}

export function ImageSection({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  overlay = false,
  overlayGradient
}: ImageSectionProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ImageWithFallback
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading={loading}
        />
      </motion.div>
      
      {overlay && (
        <div
          className="absolute inset-0"
          style={{
            background: overlayGradient || 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
          }}
        />
      )}
    </div>
  );
}