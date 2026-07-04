interface CardProps {
  title: string;
  description: string;
}

export default function Card({
  title,
  description,
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
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <h3 className="mb-3 text-xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </article>
  );
}