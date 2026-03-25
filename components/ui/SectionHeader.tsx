import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {/* {eyebrow ? (
        <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
          {eyebrow}
        </span>
      ) : null} */}
      <h2 className="text-2xl font-medium leading-[1.5] text-foreground tracking-tight md:text-3xl">
        {title}
      </h2>
      {description ? (
        <div className="max-w-xl text-sm leading-relaxed text-gray-500 tracking-tight md:text-base">
          {description}
        </div>
      ) : null}
    </div>
  );
}
