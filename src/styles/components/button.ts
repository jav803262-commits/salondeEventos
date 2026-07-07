export const buttonStyles = {
  base: `
    inline-flex
    items-center
    justify-center
    gap-2

    rounded-xl

    px-6
    py-3

    text-sm
    font-semibold
    whitespace-nowrap

    transition-all
    duration-300

    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-primary
    focus-visible:ring-offset-2

    disabled:pointer-events-none
    disabled:opacity-50
  `,

  primary: `
    bg-primary
    text-white

    hover:opacity-90
  `,

  secondary: `
    border
    border-primary

    bg-white
    text-primary

    hover:bg-gray-100
  `,

  outline: `
    border
    border-white/20

    bg-transparent
    text-white

    hover:border-white
    hover:bg-white/10
  `,

  ghost: `
    bg-transparent
    text-primary

    hover:bg-primary/10
  `,
} as const;