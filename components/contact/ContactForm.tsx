"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitted");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-2xl border border-border bg-[#f9f9f9] p-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em]">
            Envíenos un mensaje
          </p>
          <p className="text-sm leading-relaxed text-muted">
            Contanos sobre tu proyecto. Te respondemos a la brevedad.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-[0.22em]" htmlFor="name">
              Nombre y apellido
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Tu nombre"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-foreground"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-[0.22em]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="tu@email.com"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-foreground"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-[0.22em]" htmlFor="phone">
              Teléfono
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+54 ..."
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-foreground"
            />
          </div>
        </div>

        <div className="mt-4 space-y-1.5">
          <label className="text-[10px] uppercase tracking-[0.22em]" htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Contanos tu idea, ubicación y plazos."
            className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-foreground"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full border border-foreground bg-foreground px-6 py-3 text-xs uppercase tracking-[0.25em] text-background transition-colors duration-200 hover:bg-background hover:text-foreground"
          >
            Enviar mensaje
          </button>
        </div>
      </div>

      {status === "submitted" && (
        <p className="text-xs text-muted">
          El formulario es demostrativo. Podés reemplazar este comportamiento por un envío real más adelante.
        </p>
      )}
    </form>
  );
}

