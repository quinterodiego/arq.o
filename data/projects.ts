import { getProjectImages } from "@/lib/images";

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: number;
  area: string;
  coverImage: string;
  thumbnail: string;
  gallery: string[];
  description: string;
  featured?: boolean;
};

export const projects: Project[] = [
  (() => {
    const images = getProjectImages("akira-sushi");
    return {
      slug: "akira-sushi",
      title: "Akira Sushi",
      category: "Restaurante",
      location: "Buenos Aires",
      year: 2024,
      area: "300 m²",
      coverImage: images.cover,
      thumbnail: images.thumbnail,
      gallery: images.gallery,
      description:
        "El proyecto Akira Sushi propone un espacio contemporáneo donde la arquitectura y la gastronomía dialogan. El diseño prioriza materiales nobles, iluminación cálida y una distribución que favorece la experiencia del usuario.",
      featured: true
    };
  })(),
  (() => {
    const images = getProjectImages("garibaldi-carwash");
    return {
      slug: "garibaldi-carwash",
      title: "Garibaldi Carwash",
      category: "Comercial",
      location: "Buenos Aires",
      year: 2023,
      area: "450 m²",
      coverImage: images.cover,
      thumbnail: images.thumbnail,
      gallery: images.gallery,
      description:
        "Una intervención funcional y precisa que optimiza circulaciones, áreas de servicio y espacios de espera, integrando una imagen contemporánea y reconocible para la marca.",
      featured: true
    };
  })(),
  (() => {
    const images = getProjectImages("garibaldis-grill");
    return {
      slug: "garibaldis-grill",
      title: "Garibaldi's Grill",
      category: "Restaurante",
      location: "Buenos Aires",
      year: 2021,
      area: "150 m²",
      coverImage: images.cover,
      thumbnail: images.thumbnail,
      gallery: images.gallery,
      description:
        "Restaurante en Garibaldi, Buenos Aires, Argentina. 2021. 150 m². Restaurante.",
      featured: true
    };
  })(),
  (() => {
    const images = getProjectImages("vivienda-ramirez");
    return {
      slug: "vivienda-ramirez",
      title: "Vivienda en Ramírez",
      category: "Vivienda familiar",
      location: "Buenos Aires",
      year: 2022,
      area: "100 m²",
      coverImage: images.cover,
      thumbnail: images.thumbnail,
      gallery: images.gallery,
      description:
        "Vivienda en Ramírez, Buenos Aires, Argentina. 2022. 100 m². Vivienda familiar.",
      featured: true
    };
  })()
];

