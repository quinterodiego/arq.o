"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

function GalleryImageButton({
  src,
  alt,
  sizes,
  className,
  aspectClassName,
  onOpen
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  aspectClassName: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-border bg-[#f5f5f5] text-left outline-none ring-offset-background transition hover:ring-2 hover:ring-foreground/20 focus-visible:ring-2 focus-visible:ring-foreground ${aspectClassName} ${className ?? ""}`}
      aria-label={`Ampliar imagen: ${alt}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        sizes={sizes}
      />
    </button>
  );
}

function Lightbox({
  images,
  title,
  index,
  onClose,
  onPrev,
  onNext
}: {
  images: string[];
  title: string;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [handleKeyDown]);

  const current = images[index];
  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Vista ampliada, imagen ${index + 1} de ${images.length}`}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Cerrar vista ampliada"
        onClick={onClose}
      />

      <div className="relative z-[1] flex max-h-[90vh] w-full max-w-6xl flex-col items-center gap-4">
        <div className="relative h-[min(85vh,90vw)] w-full">
          <Image
            src={current}
            alt={`${title} — imagen ${index + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {images.length > 1 ? (
          <p className="text-xs text-white/70">
            {index + 1} / {images.length}
          </p>
        ) : null}
      </div>

      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-[2] flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/50 text-lg text-white transition hover:bg-black/70 md:right-6 md:top-6"
        aria-label="Cerrar"
      >
        ×
      </button>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-2 top-1/2 z-[2] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white transition hover:bg-black/70 md:left-6"
            aria-label="Imagen anterior"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-2 top-1/2 z-[2] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white transition hover:bg-black/70 md:right-6"
            aria-label="Imagen siguiente"
          >
            ›
          </button>
        </>
      ) : null}
    </div>
  );
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!images.length) return null;

  const [first, second, third, fourth, ...rest] = images;

  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => {
    setLightboxIndex((i) => {
      if (i === null) return i;
      return i <= 0 ? images.length - 1 : i - 1;
    });
  };

  const goNext = () => {
    setLightboxIndex((i) => {
      if (i === null) return i;
      return i >= images.length - 1 ? 0 : i + 1;
    });
  };

  return (
    <section className="space-y-6">
      {first && (
        <GalleryImageButton
          src={first}
          alt={title}
          sizes="(min-width: 1024px) 960px, 100vw"
          aspectClassName="aspect-[5/3]"
          onOpen={() => setLightboxIndex(0)}
        />
      )}

      {(second || third) && (
        <div className="grid gap-4 md:grid-cols-2">
          {second && (
            <GalleryImageButton
              src={second}
              alt={title}
              sizes="(min-width: 1024px) 480px, 100vw"
              aspectClassName="aspect-[4/3]"
              onOpen={() => setLightboxIndex(1)}
            />
          )}
          {third && (
            <GalleryImageButton
              src={third}
              alt={title}
              sizes="(min-width: 1024px) 480px, 100vw"
              aspectClassName="aspect-[4/3]"
              onOpen={() => setLightboxIndex(2)}
            />
          )}
        </div>
      )}

      {fourth && (
        <GalleryImageButton
          src={fourth}
          alt={title}
          sizes="(min-width: 1024px) 960px, 100vw"
          aspectClassName="aspect-[6/3]"
          onOpen={() => setLightboxIndex(3)}
        />
      )}

      {rest.length ? (
        <div className="grid gap-4 md:grid-cols-3">
          {rest.map((image, i) => (
            <GalleryImageButton
              key={image}
              src={image}
              alt={title}
              sizes="(min-width: 1024px) 320px, 100vw"
              aspectClassName="aspect-[4/3]"
              onOpen={() => setLightboxIndex(4 + i)}
            />
          ))}
        </div>
      ) : null}

      {lightboxIndex !== null ? (
        <Lightbox
          images={images}
          title={title}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      ) : null}
    </section>
  );
}
