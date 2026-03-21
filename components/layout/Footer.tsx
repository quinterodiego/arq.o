import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { mainNavigation } from "@/data/navigation";

export function Footer() {
  const year = new Date().getFullYear();
  const sections = mainNavigation.filter((item) => item.href !== "/");

  return (
    <footer className="bg-foreground text-background">
      <div className="border-t border-border" />

      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="relative h-24 w-24 shrink-0">
                <Image
                  src="/images/brand/logo-blanco.png"
                  alt="Logo ARQ.O blanco"
                  fill
                  className="object-contain"
                />
              </span>
              <span className="relative h-28 w-36 shrink-0 md:h-28 md:w-44">
                <Image
                  src="/images/brand/brand-blanco.png"
                  alt="Brand ARQ.O blanco"
                  fill
                  className="object-contain"
                />
              </span>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-background/70">
              Estudio de arquitectura contemporánea orientado al desarrollo
              integral de proyectos que buscan trascender el tiempo.
            </p>
          </div>

          <div className="md:border-l md:border-border md:pl-10">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-background/90">
              Secciones
            </div>
            <ul className="space-y-2 text-sm">
              {sections.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-background/80 transition-colors duration-200 hover:text-background"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:border-l md:border-border md:pl-10">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-background/90">
              Contacto
            </div>

            <div className="space-y-2 text-sm text-background/80">
              <p>info@arq-o.com</p>
              <p>+54 9 11 0000 0000</p>
              <p>Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-xs text-background/60">
            © {year} | ARQ.O
          </p>
        </div>
      </Container>
    </footer>
  );
}

