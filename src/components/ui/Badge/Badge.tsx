interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span
      className="
        inline-block
        rounded-full
        px-4
        py-2
        text-sm
        font-medium
      "
      style={{
        backgroundColor: "var(--primary)",
      }}
    >
      {children}
    </span>
  );
}