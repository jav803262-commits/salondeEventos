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
    transition-all
    duration-300
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-offset-2
    disabled:pointer-events-none
    disabled:opacity-50
  `,

  primary: `
    bg-primary
    
    hover:opacity-90
  `,

  secondary: `
    bg-white
    text-primary
    border
    border-primary
    hover:bg-gray-100
  `,
} as const;