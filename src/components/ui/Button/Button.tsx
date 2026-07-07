import Link from "next/link";
import type { ReactNode } from "react";

import { iconMap, type IconName } from "@/lib/icons";
import { buttonStyles } from "@/styles/components/button";

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  icon?: IconName;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary" | "outline" | "ghost";

}

const variantStyles: Record<
  NonNullable<ButtonProps["variant"]>,
  string
> = {
  primary: buttonStyles.primary,
  secondary: buttonStyles.secondary,
  outline: buttonStyles.outline,
  ghost: buttonStyles.ghost,
};
export default function Button({
  href,
  children,
  className = "",
  external = false,
  icon,
  iconPosition = "right",  
  variant = "primary"
}: ButtonProps) {
  const Icon = icon ? iconMap[icon] : null;

  const classes = `
    ${buttonStyles.base}
    ${variantStyles[variant]}
    ${className}
  `;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="h-5 w-5 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="h-5 w-5 shrink-0" />}
    </>
  );

  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {content}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}