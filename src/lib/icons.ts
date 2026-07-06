import {
  ArrowRight,
  ArrowLeft,
  Phone,
  MessageCircle,
  MapPin,
  Building,
  Martini,
  PartyPopper
} from "lucide-react";

export const iconMap = {
  ArrowRight,
  ArrowLeft,
  Phone,
  MessageCircle,
  MapPin,
  Building,
  Martini,
  PartyPopper
} as const;

export type IconName = keyof typeof iconMap;