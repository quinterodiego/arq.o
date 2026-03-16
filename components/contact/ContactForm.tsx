"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitted");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-[0.22em]" htmlFor="name">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors duration-200 focus:border-foreground"
          />
        </div>
        <div className="space-y-1.5">
          <label
            className="text-xs uppercase tracking-[0.22em]"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors duration-200 focus:border-foreground"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label
          className="text-xs uppercase tracking-[0.22em]"
          htmlFor="message"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full resize-none border-b border-border bg-transparent py-2 text-sm outline-none transition-colors duration-200 focus:border-foreground"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full border border-foreground bg-foreground px-6 py-3 text-xs uppercase tracking-[0.25em] text-background transition-colors duration-200 hover:bg-background hover:text-foreground"
      >
        Enviar mensaje
      </button>

      {status === "submitted" && (
        <p className="text-xs text-muted">
          El formulario es demostrativo. Podés reemplazar este comportamiento
          por un envío real más adelante.
        </p>
      )}
    </form>
  );
}

