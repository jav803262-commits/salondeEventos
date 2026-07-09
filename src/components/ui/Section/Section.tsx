import Container from "../Container/Container";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
}

export default function Section({
  children,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className="py-16 md:py-16"
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}