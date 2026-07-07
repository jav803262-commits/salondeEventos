import {
  ArrowRight,
  ArrowLeft,
  Phone,
  MessageCircle,
  MapPin,
  Building,
  Martini,
  PartyPopper,
  MapPinned,
  Mail,
  Clock3,
  Star,
  Check,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

export const iconMap = {
  ArrowRight,
  ArrowLeft,
  Phone,
  MessageCircle,
  MapPin,
  Building,
  Martini,
  PartyPopper,
  MapPinned,
  Mail,
  Clock3,
  Star,
  Check,
  ChevronRight,
  Menu,
  X,
} as const;

export type IconName = keyof typeof iconMap;