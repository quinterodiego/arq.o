import Link from "next/link";
import { Container } from "./Container";
import { mainNavigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10 md:py-14">
      <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.35em]">
            ARQ.O
          </div>
          <p className="max-w-xs text-sm text-muted">
            Estudio de arquitectura contemporánea orientado al desarrollo
            integral de proyectos que buscan trascender el tiempo.
          </p>
        </div>

        <div className="grid gap-8 text-sm md:grid-cols-3">
          <div>
            <div className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-muted">
              Navegación
            </div>
            <ul className="space-y-1.5">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-muted"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-muted">
              Contacto
            </div>
            <div className="space-y-1.5">
              <p>info@arq-o.com</p>
              <p>+54 9 11 0000 0000</p>
              <p className="text-muted">Buenos Aires, Argentina</p>
            </div>
          </div>

          <div>
            <div className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-muted">
              Redes
            </div>
            <div className="space-y-1.5">
              <a
                href="#"
                className="block transition-colors duration-200 hover:text-muted"
              >
                Instagram
              </a>
              <a
                href="#"
                className="block transition-colors duration-200 hover:text-muted"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

