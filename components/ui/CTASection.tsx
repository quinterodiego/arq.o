import { Container } from "@/components/layout/Container";
import { Button } from "./Button";
import { ROUTES } from "@/lib/routes";

export function CTASection() {
  return (
    <section className="border-t border-border bg-[url('/images/studio/proyecto.png')] bg-cover bg-center py-16 md:py-24">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.3em] text-white">
            Próximo proyecto
          </p>
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl text-white">
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-gray-200">
            Trabajamos cada encargo desde un enfoque integral, acompañando el
            proceso desde la idea inicial hasta la materialización de la obra.
          </p>
        </div>

        <Button href={ROUTES.CONTACT} variant="primary">
          Contáctanos
        </Button>
      </Container>
    </section>
  );
}

