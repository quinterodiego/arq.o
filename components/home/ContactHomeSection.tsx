import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/contact/ContactForm";

function ContactIcon({ type }: { type: "mail" | "phone" | "pin" }) {
  switch (type) {
    case "mail":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M4 6h16v12H4V6Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M4 7l8 6 8-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M6.5 3.5h3l1.2 4-2 1.5c1.5 3 4.2 5.7 7.2 7.2l1.5-2 4 1.2v3c0 1.1-.9 2-2 2-9.4 0-17-7.6-17-17 0-1.1.9-2 2-2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M12 22s7-4.5 7-12a7 7 0 0 0-14 0c0 7.5 7 12 7 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function ContactHomeSection() {
  return (
    <section className="border-t border-border bg-background py-16 md:py-24">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow="Contacto"
          title="Contacto"
          description="Si tenés un proyecto en mente o querés conversar sobre una posible colaboración, escribinos y coordinamos una reunión."
        />

        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <div className="space-y-6 text-sm leading-relaxed text-muted">
            <div className="space-y-3">
              <h2 className="text-xs font-medium uppercase tracking-[0.24em] text-foreground">
                Datos de contacto
              </h2>

              <div className="mt-3 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-foreground">
                    <ContactIcon type="mail" />
                  </span>
                  <p className="text-muted">info@arq-o.com</p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-foreground">
                    <ContactIcon type="phone" />
                  </span>
                  <p className="text-muted">+54 9 11 0000 0000</p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-foreground">
                    <ContactIcon type="pin" />
                  </span>
                  <p className="text-muted">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h2 className="text-xs font-medium uppercase tracking-[0.24em] text-foreground">
                WhatsApp
              </h2>
              <p className="mt-3 text-muted">
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

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

