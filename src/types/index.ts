/**
 * ============================================================================
 * BUSINESS
 * ============================================================================
 */

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  latitude: string;
  longitude: string;
}

export interface BusinessHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface Business {
  name: string;

  phone: string;

  displayPhone: string;

  whatsapp: string;

  whatsappMessage: string;

  email: string;

  address: Address;

  googleMapsUrl: string;

  mapEmbedUrl: string;

  hours: BusinessHours;

  serviceArea: string[];
}

/** navegacion menu */
export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface HeaderConfig {
  showHeader: boolean;
  sticky: boolean;
  showLogo: boolean;
  showNavigation: boolean;
  showMobileMenu: boolean;
}

/**
 * ============================================================================
 * HERO
 * ============================================================================
 */

export interface HeroFeature {
  text: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroButton {
  text: string;
  href: string;
}

export interface HeroImage {
  src: string;
  alt: string;
}

export interface HeroSection {
  badge: string;

  title: string;

  subtitle: string;
  features?: HeroFeature[];

  primaryButton: HeroButton;

  secondaryButton?: HeroButton;

  image?: HeroImage;

  stats: HeroStat[];

  showStats?: boolean;

  showSecondaryButton?: boolean;

  showImage?: boolean;
}

/**
 * ============================================================================
 * SERVICES
 * ============================================================================
 */

export interface Service {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface ServicesSection {
  badge: string;

  title: string;

  description: string;
  subtitle: string;
  columns?: 2 | 3 | 4;
}

/**
 * ============================================================================
 * TESTIMONIALS
 * ============================================================================
 */

export interface Testimonial {
  id: number;

  name: string;

  image: string;

  rating: number;

  comment: string;

  location?: string;
}

export interface TestimonialsSection {
  badge: string;

  title: string;

  description: string;

  maxStars: number;

  columns: number;

  showLocation: boolean;
}

/**
 * ============================================================================
 * FAQ
 * ============================================================================
 */

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQSection {
  badge: string;

  title: string;

  description: string;

  items: FAQ[];
}

/**
 * ============================================================================
 * SETTINGS
 * ============================================================================
 */

export interface Settings {
  showStickyCTA: boolean;

  showWhatsAppButton: boolean;

  showServices: boolean;

  showTestimonials: boolean;
  showGallery: boolean;

  showFAQ: boolean;

  showMap: boolean;

  showContactForm: boolean;

  showFooterPhone: boolean;
  showFooterEmail: boolean;
  showFooterAddress: boolean;
  showFooterDeveloperCredit: boolean;
}

/**
 * ============================================================================
 * GALLERY version
 * ============================================================================
 */

export interface GallerySection {
  badge: string;
  title: string;
  description: string;

  previewCount: number;

  buttonText: string;
  buttonHref: string;
}

export interface GalleryCategory {
  id: string | number;
  name: string;
  slug: string;
}

export interface GalleryImage {
  id: string | number;

  src: string;

  alt: string;

  title: string;

  description?: string;

  categorySlug: string;

  isfeatured?: boolean;

  order?: number;
  blurDataURL?: string;
}

export interface GalleryData {
  section: GallerySection;
  categories: GalleryCategory[];
  images: GalleryImage[];
}
/**
 * ============================================================================
 * CTA FINAL
 * ============================================================================
 */

export interface CTAFinalButton {
  label: string;
  type: "phone" | "whatsapp";
}

export interface CTAFinalSection {
  badge: string;
  title: string;
  description: string;

  phoneButton: CTAFinalButton;
  whatsappButton: CTAFinalButton;
}

/**
 * ============================================================================
 * SEO
 * ============================================================================
 */

export interface SEO {
  title: string;

  description: string;

  keywords: string[];

  siteUrl: string;

  ogImage: string;
}

/**
 * ============================================================================
 * ROOT DATA
 * ============================================================================
 */

export interface BusinessData {
  business: Business;

  heroSection: HeroSection;

  servicesSection: ServicesSection;
  services: Service[];

  navigation: NavigationItem[];

  testimonials: Testimonial[];

  testimonialsSection: TestimonialsSection;

  faqSection: FAQSection;

  settings: Settings;

  seo: SEO;

  ctaFinal: CTAFinalSection;
}
