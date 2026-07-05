/**
 * ============================================================================
 * BUSINESS DATA
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
  name: "Funeraria Ríos",

  phone: "+529511234567",
  displayPhone: "(951) 123-4567",

  email: "contacto@funerariarios.com",

  /**
   * Dirección física
   */
  address: {
    street: "Jardín Centro",

    city: " Santo Domingo Tehuantepec",

    state: "Oaxaca",

    postalCode: "70760",

    country: "MX",

    latitude: "16.3320",

    longitude: "-96.5960",
  },

  /**
   * Google Maps
   */
  googleMapsUrl:
    "https://maps.google.com/?q=16.3320,-96.5960",

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d478.6052663698814!2d-95.23286238312724!3d16.331008752213705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85bff12c5c074da5%3A0xc760ffdd9e06d24e!2sJard%C3%ADn%20Centro%20Tehuantepec!5e0!3m2!1ses-419!2smx!4v1782057365706!5m2!1ses-419!2smx",

  /**
   * Horarios
   */
  hours: {
    monday: "24 horas",
    tuesday: "24 horas",
    wednesday: "24 horas",
    thursday: "24 horas",
    friday: "24 horas",
    saturday: "24 horas",
    sunday: "24 horas",
  },

  /**
   * Cobertura
   */
  serviceArea: [
    "Miahuatlán de Porfirio Díaz",
    "Oaxaca",
    "Ejutla de Crespo",
    "Ocotlán de Morelos",
  ],
},

/** WhatsApp Configuration */
whatsapp: {
  enabled: true,

  phone: "529711459413",

  message: "Hola, quisiera información.",

  greeting: "¡Hola! 👋 ¿Cómo podemos ayudarte?",

  delay: 5000,

  showGreeting: true,

  pulse: true,

  showOnMobileOnly: false,

  hideOnFooter: true,

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
  badge: "Servicio funerario profesional",

  title:
    "Atención funeraria 24 horas",

  subtitle:
    "Acompañamos a las familias con respeto, profesionalismo y atención inmediata cuando más lo necesitan.",

  primaryButton: {
    text: " WhatsApp",
    href: "#contact",
  },

  secondaryButton: {
    text: "Llamar",
    href: "tel:+529711459413",
  },

  image: {
    src:`${HERO}/hero.jpg` ,
   alt: "Funeraria Ríos",
  },
  features: [
    {
      text:"Velación y cremación",
    },
    {
      text: "Traslados locales y foráneos",
    },
    {
      text:  "Apoyo en trámites funerarios",
    },
  ],

  stats: [
    {
      value: "+500",
      label: "Familias atendidas",
    },
    {
      value: "24/7",
      label: "Disponibles",
    },
    {
      value: "10+",
      label: "Años de experiencia",
    },
  ],

  showStats: false,

  showSecondaryButton: true,

  showImage: true,
},

  /**
   * Servicios
   */
  servicesSection: {
    badge: "Servicios",
    title: "Nuestros servicios funerarios",
    description: "Conoce los servicios que ofrecemos para acompañarte en cada etapa con atención humana y profesional.",
    columns: 3,
    subtitle: ""
  },

  services: [
    {
      id: 1,
      title: "Velación",

      description:
        "Servicio completo de velación con instalaciones adecuadas para la familia.",
    },

    {
      id:2,
      title: "Traslados",

      description: "Traslados locales y nacionales con atención profesional.",
    },

    {
      id:3,
      title: "Cremación",

      description:
        "Servicio profesional de cremación con acompañamiento integral.",
    },
  ],

  /**
   * Testimonios
   */

  testimonials: [
    {
      id: 1,
      name: "Miguel Hernández",
      location: "Miahuatlán, Oaxaca",
      image:`${TESTIMONIALS}/1.jpg` ,
      rating: 5,
      comment:
        "Agradecemos profundamente el apoyo brindado durante un momento tan difícil. El servicio fue profesional, humano y respetuoso.",
    },
    {
      id: 2,
      name: "Rosa Martínez",
      location: "Tehuantepec, Oaxaca",
      image:`${TESTIMONIALS}/2.jpg` ,
      rating: 5,
      comment:
        "La atención fue excelente desde el primer contacto. Nos ayudaron en cada paso con mucha empatía.",
    },
    {
      id: 3,
      name: "Luis López",
      location: "Miahuatlán, Oaxaca",
      image:`${TESTIMONIALS}/3.jpg` ,
      rating: 5,
      comment:
        "Instalaciones impecables y personal muy atento. Recomiendo ampliamente sus servicios.",
    },
  ] ,

  /**
 * Encabezado de testimonios
 */
testimonialsSection: {
  badge: "Testimonios Reales",

  title: "Familias que confiaron en nosotros",

  description:
    "Nuestro compromiso es brindar acompañamiento humano, respeto y atención profesional en cada momento.",

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
    "Conoce respuestas claras sobre nuestros servicios funerarios, atención y acompañamiento.",

  items: [
    {
      question: "¿Atienden las 24 horas?",
      answer:
        "Sí, brindamos atención las 24 horas del día, los 365 días del año."
    },

    {
      question: "¿Qué debo hacer cuando ocurre un fallecimiento?",
      answer:
        "Comunícate inmediatamente con nuestro equipo para recibir orientación y apoyo durante todo el proceso."
    },

    {
      question: "¿Realizan traslados locales y foráneos?",
      answer:
        "Sí, contamos con servicio de traslado dentro y fuera del estado."
    },

    {
      question: "¿Ofrecen planes funerarios a futuro?",
      answer:
        "Sí, contamos con planes de previsión para proteger a tu familia y evitar gastos imprevistos."
    },

    {
      question: "¿Cuáles son las formas de pago disponibles?",
      answer:
        "Aceptamos efectivo, transferencias bancarias y otras formas de pago según disponibilidad."
    },

    {
      question: "¿Incluyen servicio de velación?",
      answer:
        "Sí, disponemos de salas de velación cómodas y adecuadas para acompañar a las familias."
    },

    {
      question: "¿Pueden ayudar con trámites legales?",
      answer:
        "Sí, orientamos y apoyamos en los trámites necesarios relacionados con el fallecimiento."
    },

    {
      question: "¿Trabajan con aseguradoras?",
      answer:
        "Sí, podemos asesorarte sobre la aplicación de pólizas y seguros funerarios."
    },

    {
      question: "¿Ofrecen cremación?",
      answer:
        "Sí, contamos con opciones de cremación y asesoría personalizada para cada familia."
    },

    {
      question: "¿Cuánto tiempo tarda la organización del servicio?",
      answer:
        "El proceso puede iniciarse de inmediato una vez confirmado el servicio."
    },

    {
      question: "¿Puedo contratar servicios por separado?",
      answer:
        "Sí, ofrecemos servicios individuales según las necesidades de cada familia."
    },

    {
      question: "¿Atienden comunidades cercanas?",
      answer:
        "Sí, brindamos cobertura en la ciudad y localidades cercanas."
    },

    {
      question: "¿Qué incluye un servicio funerario básico?",
      answer:
        "Dependiendo del plan, puede incluir traslado, preparación, velación y acompañamiento."
    },

    {
      question: "¿Puedo solicitar información por WhatsApp?",
      answer:
        "Sí, nuestro equipo puede atenderte y resolver tus dudas a través de WhatsApp."
    },

    {
      question: "¿Cómo solicito una cotización?",
      answer:
        "Puedes llamarnos o enviarnos un mensaje para recibir una cotización personalizada."
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
    showServices: false,
    showGallery: true,

    // Footer
  showFooterPhone: true,
  showFooterEmail: false,
  showFooterAddress: true,
  showFooterDeveloperCredit: true,


  },


   seo: {
  title: "Funeraria Ríos | Servicios Funerarios 24 Horas",
  description:
    "Atención funeraria inmediata las 24 horas. Servicio profesional y humano para acompañar a tu familia.",

  keywords: [
    "funeraria",
    "servicios funerarios",
    "funeraria oaxaca",
    "cremación",
    "velación",
  ],

  siteUrl: "https://funerariarios.com",

  ogImage: "/og-image.jpg",
},


/*section final de contacto y CTA */


ctaFinal: {
  badge: "Atención inmediata",

  title: "¿Necesitas ayuda inmediata?",

  description:
    "Estamos disponibles las 24 horas para brindarte atención y orientación cuando más lo necesites.",

  phoneButton: {
    label: "📞 Llamar ahora",
    type: "phone",
  },

  whatsappButton: {
    label: "💬 WhatsApp",
    type: "whatsapp",
  },
},

};
