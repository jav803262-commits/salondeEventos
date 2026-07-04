import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Permite acceder al servidor de desarrollo
   * desde otros dispositivos de la red local.
   */
  allowedDevOrigins: ["192.168.0.211"],

  /**
   * Compresión Gzip/Brotli
   */
  compress: true,

  /**
   * Oculta el header X-Powered-By
   */
  poweredByHeader: false,

  /**
   * Optimización de imágenes
   */
  images: {
    formats: ["image/avif", "image/webp"],
  },

  /**
   * React Strict Mode
   */
  reactStrictMode: true,

  /**
   * Optimización de imports
   */
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;