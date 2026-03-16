const items = [
  "Anteproyecto",
  "Proyecto ejecutivo",
  "Cómputo y presupuesto",
  "Documentación técnica",
  "Dirección de obra"
];

export function ExperienceList() {
  return (
    <ul className="grid gap-2 text-sm md:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center justify-between border-b border-border py-2 text-muted"
        >
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

