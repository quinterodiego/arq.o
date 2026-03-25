"use client";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <p className="text-md font-medium uppercase tracking-[0.25em] text-foreground">
            Envíenos un mensaje
          </p>
          {/* <p className="text-md leading-relaxed text-gray-500 tracking-tight md:text-base">
            Contanos sobre tu proyecto. Te respondemos a la brevedad.
          </p> */}
        </div>

        <div className="mt-6 grid gap-4">
          <div className="space-y-1.5">
            <label className="text-[12px] font-medium uppercase tracking-[0.22em] text-gray-500" htmlFor="name">
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
            <label className="text-[12px] font-medium uppercase tracking-[0.22em] text-gray-500" htmlFor="email">
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
            <label className="text-[12px] font-medium uppercase tracking-[0.22em] text-gray-500" htmlFor="phone">
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
          <label className="text-[12px] font-medium uppercase tracking-[0.22em] text-gray-500" htmlFor="message">
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
            className="w-full border border-foreground bg-foreground px-6 py-3 text-[14px] uppercase tracking-[0.25em] text-background transition-colors duration-200 hover:bg-background hover:text-foreground flex items-center justify-center gap-2 rounded-none cursor-pointer"
          >
            Enviar mensaje <span className="ml-2"><FontAwesomeIcon icon={ faChevronRight } /></span> 
          </button> 
        </div>
      </div>
    </form>
  );
}
