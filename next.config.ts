import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Permite acceder al servidor de desarrollo (next dev) desde otros
   * dispositivos de la red local (celulares, tablets, otras PCs).
   *
   * IMPORTANTE:
   * 1. Reemplaza la IP por la de TU computadora (no la del móvil).
   *    - Windows: `ipconfig` → "Dirección IPv4"
   *    - Mac/Linux: `ifconfig` o `ip addr`
   * 2. Esto SOLO permite el origin en el servidor. Además necesitas
   *    arrancar next dev escuchando en todas las interfaces:
   *      "dev": "next dev -H 0.0.0.0"
   *    (ver package.json)
   * 3. Puedes agregar varias IPs/hostnames si trabajas desde distintas
   *    redes o dispositivos.
   */
  allowedDevOrigins: [
    "192.168.0.211",
    // "192.168.0.212", // ejemplo: otro dispositivo o red
  ],

  /**
   * Compresión Gzip/Brotli para las respuestas del servidor.
   * Reduce el tamaño de la transferencia, útil también en redes locales
   * más lentas como WiFi.
   */
  compress: true,

  /**
   * Oculta el header "X-Powered-By: Next.js" por seguridad
   * (evita exponer información del stack tecnológico).
   */
  poweredByHeader: false,

  /**
   * Optimización de imágenes.
   */
  images: {
    formats: ["image/avif", "image/webp"],
    /**
     * Si pruebas imágenes remotas (por ejemplo desde una API o CMS)
     * y ves errores de "hostname not configured", agrega los dominios aquí:
     */
    // remotePatterns: [
    //   { protocol: "https", hostname: "example.com" },
    // ],
  },

  /**
   * Activa comprobaciones adicionales en desarrollo
   * (detecta efectos secundarios, renders dobles, APIs obsoletas, etc.)
   */
  reactStrictMode: true,

  /**
   * Configuraciones experimentales.
   */
  experimental: {
    /**
     * Optimiza el tree-shaking de imports de librerías grandes de íconos/UI.
     * Agrega aquí otras libs pesadas que uses (ej: "date-fns", "@mui/material").
     */
    optimizePackageImports: ["lucide-react"],
  },

  /**
   * (Opcional) Permite acceso a los CORS de las Server Actions
   * cuando pruebas formularios/mutaciones desde el móvil.
   * Si no usas Server Actions con el móvil, puedes omitir esto.
   */
  // experimental: {
  //   serverActions: {
  //     allowedOrigins: ["192.168.0.211:3000"],
  //   },
  // },

  /**
   * (Opcional) Útil si accedes por HTTPS local (ej. con mkcert) y
   * quieres evitar problemas de "strict-origin" en fetch/cookies.
   */
  // async headers() {
  //   return [
  //     {
  //       source: "/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Origin", value: "*" },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;