import Container from "@/components/ui/Container/Container";
import { businessData } from "@/data/business";

export default function Footer() {
  const { business, settings } = businessData;

  return (
    <footer className="bg-black py-10 text-white">
      <Container>
        <div className="space-y-3 text-center">
          <h2 className="text-xl font-bold">{business.name}</h2>

          {settings.showFooterPhone && (
            <a href={`tel:${business.phone}`} className="hover:text-primary">
              {" "}
              {business.displayPhone}{" "}
            </a>
          )}

          {settings.showFooterAddress && (
            <p className="leading-relaxed">
              <span className="block">{business.address.street}</span>
              <span className="block">
                {business.address.city}, {business.address.state}
              </span>
            </p>
          )}

          {settings.showFooterEmail && (
            <a href={`mailto:${business.email}`} className="hover:text-primary">
              {business.email}
            </a>
          )}
          <div className="border-t border-white/10 pt-4 text-sm text-white/60">
            © {new Date().getFullYear()} {business.name}
          </div>
        </div>
        {settings.showFooterDeveloperCredit && (
          <div className="mt-2 text-center text-xs text-white/40">
            Desarrollado por JFAV Web
          </div>
        )}
      </Container>
    </footer>
  );
}
