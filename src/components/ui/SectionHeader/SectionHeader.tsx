interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  center = true,
}: SectionHeaderProps) {
  return (
    <div
      className={
        center
          ? "mx-auto mb-16 max-w-3xl text-center"
          : "mb-16"
      }
    >
      {badge && (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}