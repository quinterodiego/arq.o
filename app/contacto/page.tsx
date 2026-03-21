import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="border-t border-border bg-background py-16 md:py-24">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow="Contacto"
          title="Contacto"
          description="Si tenés un proyecto en mente o querés conversar sobre una posible colaboración, escribinos y coordinamos una reunión."
        />

        <section className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <ContactForm />

          <div className="space-y-4 text-sm leading-relaxed text-muted">
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.24em] text-foreground">
                Datos de contacto
              </h2>
              <div className="mt-3 space-y-1.5">
                <p>info@arq-o.com</p>
                <p>+54 9 11 0000 0000</p>
                <p>Buenos Aires, Argentina</p>
              </div>
            </div>

            <div className="pt-4">
              <h2 className="text-xs font-medium uppercase tracking-[0.24em] text-foreground">
                WhatsApp
              </h2>
              <p className="mt-3">
                Si preferís una conversación directa, podés escribirnos por
                WhatsApp.
              </p>
              <div className="mt-4">
                <Button
                  href="https://wa.me/"
                  variant="primary"
                  className="rounded-none text-[10px]"
                >
                  Escribir por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

