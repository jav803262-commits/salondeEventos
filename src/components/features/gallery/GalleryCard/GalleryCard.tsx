import Image from "next/image";

import type { GalleryImage } from "@/types";

interface GalleryCardProps {
  image: GalleryImage;
  priority?: boolean;
  className?: string;
  onClick?: (image: GalleryImage) => void;
}

export default function GalleryCard({
  image,
  priority = false,
  className = "",
  onClick,
}: GalleryCardProps) {
  const clickable = typeof onClick === "function";

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (!clickable) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick(image);
    }
  };

  return (
    <div
      className={`
        group
        w-full
        overflow-hidden
        rounded-xl
        bg-white
        shadow-sm
        transition-shadow
        ${
          clickable
            ? "cursor-pointer [@media(hover:hover)]:hover:shadow-lg"
            : "cursor-default"
        }
        ${className}
      `}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      aria-label={clickable ? `Ver imagen: ${image.alt}` : undefined}
      onClick={clickable ? () => onClick(image) : undefined}
      onKeyDown={handleKeyDown}
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 [@media(hover:hover)]:group-hover:scale-105"
          priority={priority}
        />
      </div>
    </div>
  );
}