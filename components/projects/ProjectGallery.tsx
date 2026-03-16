import Image from "next/image";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  if (!images.length) return null;

  const [first, second, third, fourth, ...rest] = images;

  return (
    <section className="space-y-6">
      {first && (
        <div className="relative aspect-[5/3] overflow-hidden rounded-2xl border border-border bg-[#f5f5f5]">
          <Image
            src={first}
            alt={title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 960px, 100vw"
          />
        </div>
      )}

      {(second || third) && (
        <div className="grid gap-4 md:grid-cols-2">
          {second && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-[#f5f5f5]">
              <Image
                src={second}
                alt={title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 100vw"
              />
            </div>
          )}
          {third && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-[#f5f5f5]">
              <Image
                src={third}
                alt={title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 100vw"
              />
            </div>
          )}
        </div>
      )}

      {fourth && (
        <div className="relative aspect-[6/3] overflow-hidden rounded-2xl border border-border bg-[#f5f5f5]">
          <Image
            src={fourth}
            alt={title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 960px, 100vw"
          />
        </div>
      )}

      {rest.length ? (
        <div className="grid gap-4 md:grid-cols-3">
          {rest.map((image) => (
            <div
              key={image}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-[#f5f5f5]"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 320px, 100vw"
              />
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}

