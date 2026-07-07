/**
 * ============================================================================
 * BUSINESS DATA — EJEMPLO: SALÓN DE FIESTAS Y EVENTOS (VERSIÓN VERIFICADA)
 * ============================================================================
 *
 * Fuente única de verdad para la información del negocio.
 *
 * Todo lo que el cliente puede modificar debe vivir aquí.
 *
 * Ejemplos:
 * - Nombre
 * - Teléfonos
 * - WhatsApp
 * - Dirección
 * - Hero
 * - Servicios
 * - FAQ
 * - Testimonios
 * - Configuración de módulos
 *
 * En un futuro estos datos podrán venir de Supabase
 * sin necesidad de modificar los componentes.
 *
 * Datos 100% ficticios, creados como ejemplo para un salón de fiestas/eventos.
 *
 * ----------------------------------------------------------------------------
 * VERIFICACIÓN DE CONSISTENCIA (mismos puntos revisados que en business.ts):
 * 1) Teléfono: business.phone, whatsapp.phone y el tel: del botón "Llamar"
 *    usan el mismo número (+52 951 555 7788) desde el inicio. Sin cambios.
 * 2) address.city: sin espacios accidentales. Sin cambios.
 * 3) Coordenadas: latitude/longitude, googleMapsUrl y mapEmbedUrl apuntan
 *    todos a 17.0654 / -96.7237. Sin cambios.
 * 4) heroSection.primaryButton.href usa "#contacto", igual que el id
 *    definido en `navigation`. Sin cambios.
 * 5) Formato de `id` en `services`: ya usa espacio consistente (`id: 1`,
 *    `id: 2`, `id: 3`). Sin cambios.
 *
 * DECISIONES DE CONFIGURACIÓN (no son errores, se mantienen tal cual):
 * - `settings.showServices: true` — a diferencia del ejemplo de la
 *   funeraria, aquí la sección de servicios sí está activa.
 * - `whatsapp.hideOnFooter: false` — el botón flotante de WhatsApp se
 *   mantiene visible también cerca del footer.
 * - `servicesSection.subtitle` — sí tiene contenido en este ejemplo,
 *   para que sirva de referencia de cómo se ve con el campo lleno.
 * ============================================================================
 */

import type { BusinessData } from "@/types";

import { IMAGE_PATHS } from "@/constants/image-paths";

const HERO = IMAGE_PATHS.hero;

const TESTIMONIALS = IMAGE_PATHS.testimonials;

export const businessData: BusinessData = {
  /**
   * Información general del negocio
   */
business: {
  name: "Salón Jardín Esmeralda",

  // ✅ Verificado: mismo número usado en whatsapp.phone y en el tel: del hero.
  phone: "+529515557788",
  displayPhone: "(951) 555-7788",

  email: "eventos@jardinesmeralda.com",

  /**
   * Dirección física
   */
  address: {
    street: "Av. de las Rosas 245",

    // ✅ Verificado: sin espacios accidentales.
    city: "Oaxaca de Juárez",

    state: "Oaxaca",

    postalCode: "68000",

    country: "MX",

    // ✅ Verificado: coincide con googleMapsUrl y con las coordenadas del embed.
    latitude: "17.0654",

    longitude: "-96.7237",
  },

  /**
   * Google Maps
   */
  // ✅ Verificado: mismas coordenadas que latitude/longitude y mapEmbedUrl.
  googleMapsUrl:
    "https://maps.google.com/?q=17.0654,-96.7237",

  // ✅ Verificado: usa las mismas coordenadas (2d=-96.7237, 3d=17.0654)
  // que latitude/longitude y googleMapsUrl de arriba.
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.123456789!2d-96.7237!3d17.0654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c730a5f1234567%3A0xabcdef1234567890!2sSal%C3%B3n%20Jard%C3%ADn%20Esmeralda!5e0!3m2!1ses-419!2smx!4v1782057999999!5m2!1ses-419!2smx",

  /**
   * Horarios
   */
  hours: {
    monday: "Cerrado",
    tuesday: "10:00 - 18:00",
    wednesday: "10:00 - 18:00",
    thursday: "10:00 - 18:00",
    friday: "10:00 - 20:00",
    saturday: "09:00 - 23:00",
    sunday: "09:00 - 21:00",
  },

  /**
   * Cobertura
   */
  serviceArea: [
    "Oaxaca de Juárez",
    "Santa Lucía del Camino",
    "San Agustín Yatareni",
    "Tlalixtac de Cabrera",
  ],
},

/** WhatsApp Configuration */
whatsapp: {
  enabled: true,

  // ✅ Verificado: mismo número que business.phone.
  phone: "529515557788",

  message: "Hola, me gustaría cotizar un evento en el salón.",

  greeting: "¡Hola! 🎉 ¿Planeando un evento? Escríbenos",

  delay: 4000,

  showGreeting: true,

  pulse: true,

  showOnMobileOnly: false,

  // Decisión de diseño: aquí se mantiene visible cerca del footer
  // (a diferencia del ejemplo de la funeraria, donde se oculta).
  hideOnFooter: false,

  rememberDismiss: true,
},


 /** navegacion menu */
 navigation: [
  {
    label: "Inicio",
    href: "#inicio",
  },
  {
    label: "Servicios",
    href: "#servicios",
  },
  {
    label: "Galería",
    href: "#galeria",
  },
  {
    label: "Preguntas frecuentes",
    href: "#faq",
  },
  {
    label: "Contacto",
    href: "#contacto",
  },
],


  /**
   * Hero principal
   */
heroSection: {
  badge: "El escenario perfecto para tu celebración",

  title:
    "Haz de tu evento un momento inolvidable",

  subtitle:
    "Salón de fiestas y eventos con jardines, salones climatizados y todo lo necesario para bodas, XV años, graduaciones y celebraciones corporativas.",

  primaryButton: {
    text: "Cotizar por WhatsApp",
    // ✅ Verificado: coincide con el id "#contacto" de `navigation`.
    href: "#contacto",
  },

  secondaryButton: {
    text: "Llamar ahora",
    // ✅ Verificado: mismo número que business.phone/whatsapp.phone.
    href: "tel:+529515557788",
  },

  image: {
    src:`${HERO}/hero-a.jpg` ,
   alt: "Salón Jardín Esmeralda, área de jardín para eventos",
  },
  features: [
    {
      text:"Jardín al aire libre y salón climatizado",
    },
    {
      text: "Estacionamiento privado para 100 autos",
    },
    {
      text:  "Paquetes personalizados con banquete incluido",
    },
  ],

  stats: [
    {
      value: "+300",
      label: "Eventos realizados",
    },
    {
      value: "500",
      label: "Invitados de capacidad máxima",
    },
    {
      value: "12+",
      label: "Años de experiencia",
    },
  ],

  showStats: false,

  showSecondaryButton: true,

  showImage: true,
},

  /**
   * Servicios
   * A diferencia del ejemplo de la funeraria, aquí `showServices` está en
   * true (ver settings más abajo), por lo que esta sección sí se muestra.
   */
  servicesSection: {
    badge: "Servicios",
    title: "Todo lo que necesitas para tu evento",
    description: "Ofrecemos paquetes completos y servicios individuales para que tu celebración salga perfecta, sin complicaciones.",
    columns: 3,
    subtitle: "Paquetes flexibles para cada tipo de celebración"
  },

  services: [
    {
      // ✅ Verificado: formato de id consistente (con espacio) en los 3 elementos.
      id: 1,
      title: "Renta de salón",

      description:
        "Salón principal climatizado con capacidad para 500 personas, más área de jardín al aire libre.",
        icon: "Building",
    },

    {
      id: 2,
      title: "Banquete y coctelería",

      description: "Menús personalizados, servicio de meseros y barra libre con opciones para todos los gustos.",
      icon: "Martini",
    },

    {
      id: 3,
      title: "Decoración temática",

      description:
        "Diseño de mobiliario, iluminación y ambientación según el estilo de tu evento.",
      icon: "PartyPopper",
    },
  ],

  /**
   * Testimonios
   */

  testimonials: [
    {
      id: 1,
      name: "Karla Sánchez",
      location: "Oaxaca de Juárez, Oaxaca",
      image:`${TESTIMONIALS}/1.jpg` ,
      rating: 5,
      comment:
        "Celebramos la boda de mi hermana aquí y todo fue espectacular. El jardín se veía hermoso y el servicio impecable.",
    },
    {
      id: 2,
      name: "Édgar Ramírez",
      location: "Santa Lucía del Camino, Oaxaca",
      image:`${TESTIMONIALS}/2.jpg` ,
      rating: 5,
      comment:
        "Organizamos el evento de fin de año de la empresa y superó nuestras expectativas. Muy recomendado para eventos corporativos.",
    },
    {
      id: 3,
      name: "Fernanda Ortiz",
      location: "Tlalixtac de Cabrera, Oaxaca",
      image:`${TESTIMONIALS}/3.jpg` ,
      rating: 4,
      comment:
        "Los XV años de mi hija quedaron increíbles, el equipo estuvo al pendiente de cada detalle durante toda la fiesta.",
    },
  ] ,

  /**
 * Encabezado de testimonios
 */
testimonialsSection: {
  badge: "Clientes Felices",

  title: "Celebraciones que hicimos realidad",

  description:
    "Cientos de familias y empresas han confiado en nosotros para sus momentos más importantes.",

   maxStars: 5,

  columns: 3,

  showLocation: true,

},


  /**
   * Preguntas frecuentes
   */
faqSection: {
  badge: "Preguntas Frecuentes",

  title: "Resolvemos tus dudas",

  description:
    "Todo lo que necesitas saber antes de reservar tu evento con nosotros.",

  categories: [
    {
      label: "Reservaciones y pagos",

      items: [
        {
          question: "¿Con cuánto tiempo de anticipación debo reservar?",
          answer:
            "Recomendamos reservar con al menos 3 meses de anticipación, especialmente para fechas en fin de semana."
        },

        {
          question: "¿Qué formas de pago aceptan?",
          answer:
            "Aceptamos efectivo, tarjeta de crédito/débito y transferencia bancaria, con un anticipo del 50% para apartar la fecha."
        },

        {
          question: "¿Puedo cancelar o cambiar la fecha de mi evento?",
          answer:
            "Sí, aplican políticas de cambio y cancelación según el tiempo de anticipación; te las explicamos al momento de firmar el contrato."
        },

        {
          question: "¿Cómo solicito una cotización?",
          answer:
            "Puedes llamarnos, escribirnos por WhatsApp o llenar el formulario de contacto para recibir una cotización personalizada."
        },

        {
          question: "¿Puedo hacer una visita antes de contratar?",
          answer:
            "Sí, puedes agendar una visita guiada para conocer las instalaciones antes de reservar."
        }
      ]
    },

    {
      label: "Instalaciones",

      items: [
        {
          question: "¿Cuál es la capacidad máxima del salón?",
          answer:
            "Nuestro salón principal tiene capacidad para 500 personas, incluyendo el área de jardín al aire libre."
        },

        {
          question: "¿Cuentan con estacionamiento?",
          answer:
            "Sí, contamos con estacionamiento privado y vigilado para 100 vehículos."
        },

        {
          question: "¿El salón está climatizado?",
          answer:
            "Sí, el salón principal cuenta con aire acondicionado y calefacción según la temporada."
        },

        {
          question: "¿Incluyen mobiliario y decoración básica?",
          answer:
            "Sí, el paquete básico incluye mesas, sillas, manteles y centros de mesa sencillos."
        },

        {
          question: "¿Tienen área para niños?",
          answer:
            "Sí, contamos con un área de jardín adicional que puede habilitarse con inflables y juegos para niños."
        },

        {
          question: "¿El salón cuenta con acceso para personas con discapacidad?",
          answer:
            "Sí, contamos con rampas de acceso y sanitarios adaptados en todas las áreas del salón."
        }
      ]
    },

    {
      label: "Servicios y el día del evento",

      items: [
        {
          question: "¿El precio de renta incluye el banquete?",
          answer:
            "No, la renta del salón y el banquete se cotizan por separado, aunque contamos con paquetes que combinan ambos con descuento."
        },

        {
          question: "¿Puedo llevar mi propio proveedor de banquete?",
          answer:
            "Sí, puedes contratar proveedores externos, aunque también ofrecemos servicio de banquete propio con opción a degustación previa."
        },

        {
          question: "¿Ofrecen paquetes para eventos corporativos?",
          answer:
            "Sí, tenemos paquetes especiales para conferencias, cenas de fin de año y presentaciones de producto."
        },

        {
          question: "¿Permiten música en vivo o DJ?",
          answer:
            "Sí, puedes contratar tu propio DJ, grupo musical o banda, siempre respetando el horario permitido del salón."
        }
      ]
    }
  ]
},

  /**
   * Configuración visual y funcional
   */
  settings: {
    showStickyCTA: false,

    showWhatsAppButton: true,

    showTestimonials: true,

    showFAQ: true,

    showMap: true,

    showContactForm: true,
    // Decisión de diseño: activa a diferencia del ejemplo de la funeraria.
    showServices: true,
    showGallery: true,

    //CTA
    showCTAPhone:   false,
    showCTAEmail: false,
    showCTAAddress: false,
  
  

    // Footer
  showFooterPhone: true,
  showFooterEmail: false,
  showFooterAddress: false,
  showFooterDeveloperCredit: true,


  },


   seo: {
  title: "Salón Jardín Esmeralda | Salón de Fiestas y Eventos en Oaxaca",
  description:
    "Salón de fiestas y eventos con jardín y salón climatizado en Oaxaca de Juárez. Ideal para bodas, XV años y eventos corporativos.",

  keywords: [
    "salón de fiestas",
    "salón de eventos oaxaca",
    "renta de salón",
    "bodas oaxaca",
    "xv años oaxaca",
  ],

  siteUrl: "https://jardinesmeralda.com",

  ogImage: "/og-image.jpg",
},


/*section final de contacto y CTA */


ctaFinal: {
  badge: "Reserva tu fecha",

  title: "¿Listo para planear tu evento?",

  description:
    "Contáctanos hoy mismo y aparta la fecha de tu celebración antes de que se agote.",

  phoneButton: {
    label: "Llamar ahora",
    type: "phone",
  },

  whatsappButton: {
    label: "Cotizar por WhatsApp",
    type: "whatsapp",
  },
},

};