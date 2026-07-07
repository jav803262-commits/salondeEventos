/**
 * ============================================================================
 * SECTION HEADER
 * ============================================================================
 *
 * Encabezado reutilizable para las diferentes secciones del sitio.
 *
 * Características:
 * - Badge opcional.
 * - Título principal.
 * - Subtítulo opcional.
 * - Alineación centrada o izquierda.
 * - Nivel semántico configurable (h1, h2, h3).
 * - Compatible con aria-labelledby.
 * - Permite personalizar estilos mediante className.
 *
 * Ejemplo:
 *
 * <SectionHeader
 *   badge="Servicios"
 *   title="Todo lo que ofrecemos"
 *   subtitle="Conoce nuestros principales servicios."
 * />
 *
 * ============================================================================
 */

/**
 * ============================================================================
 * SECTION HEADER
 * ============================================================================
 *
 * Encabezado reutilizable para las diferentes secciones del sitio.
 *
 * Características:
 * - Badge opcional.
 * - Título principal.
 * - Subtítulo opcional.
 * - Alineación centrada o izquierda.
 * - Nivel semántico configurable (h1, h2 o h3).
 * - Compatible con aria-labelledby.
 * - Permite agregar clases personalizadas.
 * ============================================================================
 */

interface SectionHeaderProps {
  /**
   * Texto mostrado encima del título.
   */
  badge?: string;

  /**
   * Título principal de la sección.
   */
  title: string;

  /**
   * Descripción opcional.
   */
  subtitle?: string;

  /**
   * Centra el contenido.
   *
   * true  -> Centrado (por defecto)
   * false -> Alineado a la izquierda
   */
  center?: boolean;

  /**
   * ID del encabezado para usar con aria-labelledby.
   */
  headingId?: string;

  /**
   * Clases adicionales.
   */
  className?: string;

  /**
   * Nivel semántico del encabezado.
   *
   * h1 | h2 | h3
   */
  as?: "h1" | "h2" | "h3";
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  center = true,
  headingId,
  className = "",
  as = "h2",
}: SectionHeaderProps) {
  const Heading = as;

  return (
    <div
      className={`
        ${center ? "mx-auto max-w-3xl text-center" : ""}
        ${className}
      `}
    >
      {badge && (
        <span
          className="
            inline-flex
            rounded-full
            bg-primary/10
            px-4
            py-1
            text-xs
            font-semibold
            uppercase
            tracking-widest
            text-primary
          "
        >
          {badge}
        </span>
      )}

      <Heading
        id={headingId}
        className="mt-4 text-3xl font-bold tracking-tight md:text-5xl"
      >
        {title}
      </Heading>

      {subtitle && (
        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-base
            leading-7
            text-muted-foreground
            md:text-lg
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}