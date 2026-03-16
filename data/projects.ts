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
    const images = getProjectImages("torre-central");
    return {
      slug: "torre-central",
      title: "Torre Central",
      category: "Vivienda familiar",
      location: "Buenos Aires",
      year: 2022,
      area: "2.400 m²",
      coverImage: images.cover,
      thumbnail: images.thumbnail,
      gallery: images.gallery,
      description:
        "Edificio residencial concebido a partir de la luz natural, la ventilación cruzada y la flexibilidad de planta, asegurando unidades funcionales y eficientes en su uso cotidiano.",
      featured: true
    };
  })(),
  (() => {
    const images = getProjectImages("casa-delta");
    return {
      slug: "casa-delta",
      title: "Casa Delta",
      category: "Vivienda contemporánea",
      location: "Tigre",
      year: 2021,
      area: "320 m²",
      coverImage: images.cover,
      thumbnail: images.thumbnail,
      gallery: images.gallery,
      description:
        "Vivienda entre canales que incorpora la topografía y el paisaje como parte activa del proyecto, priorizando visuales abiertas y espacios de transición interior-exterior."
    };
  })(),
  (() => {
    const images = getProjectImages("oficinas-atlas");
    return {
      slug: "oficinas-atlas",
      title: "Oficinas Atlas",
      category: "Espacio corporativo",
      location: "Buenos Aires",
      year: 2020,
      area: "780 m²",
      coverImage: images.cover,
      thumbnail: images.thumbnail,
      gallery: images.gallery,
      description:
        "Reconfiguración integral de planta libre para oficinas corporativas, con énfasis en confort acústico, iluminación eficiente y flexibilidad programática."
    };
  })(),
  (() => {
    const images = getProjectImages("plaza-urbana-sur");
    return {
      slug: "plaza-urbana-sur",
      title: "Plaza Urbana Sur",
      category: "Espacio público",
      location: "Buenos Aires",
      year: 2019,
      area: "5.200 m²",
      coverImage: images.cover,
      thumbnail: images.thumbnail,
      gallery: images.gallery,
      description:
        "Proyecto de espacio público que articula áreas verdes, sectores de descanso y equipamiento urbano, promoviendo la integración social y el uso intensivo del espacio abierto."
    };
  })()
];

