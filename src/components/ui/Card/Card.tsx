import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  header?: ReactNode;
  children?: ReactNode;
}

export default function Card({
  title,
  description,
  header,
  children,
}: CardProps) {
  return (
    <article
      className="
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        [@media(hover:hover)]:hover:-translate-y-2
        [@media(hover:hover)]:hover:shadow-xl
      "
    >
      {header && (
        <div className="mb-4 text-primary">
          {header}
        </div>
      )}

      <h3 className="mb-3 text-xl font-semibold">
        {title}
      </h3>

      {description && (
        <p className="text-gray-600">
          {description}
        </p>
      )}

      {children && (
        <div className={description ? "mt-5" : ""}>
          {children}
        </div>
      )}
    </article>
  );
}