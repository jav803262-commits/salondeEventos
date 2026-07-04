import Link from "next/link";
import type { ReactNode } from "react";

import { buttonStyles } from "@/styles/components/button";

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `
    ${buttonStyles.base}
    ${buttonStyles.primary}
    ${className}
  `;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}