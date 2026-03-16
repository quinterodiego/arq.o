export const IMAGE_BASE_PATH = "/images";

export const PLACEHOLDERS = {
  projectCover: `${IMAGE_BASE_PATH}/placeholders/project-cover.jpg`,
  projectThumb: `${IMAGE_BASE_PATH}/placeholders/project-thumb.jpg`,
  hero: `${IMAGE_BASE_PATH}/placeholders/hero.jpg`,
  gallery: `${IMAGE_BASE_PATH}/placeholders/gallery.jpg`,
  studio: `${IMAGE_BASE_PATH}/placeholders/studio.jpg`
} as const;

export const HOME_IMAGES = {
  hero: `${IMAGE_BASE_PATH}/home/hero-main.jpg`,
  feature1: `${IMAGE_BASE_PATH}/home/project-feature-1.jpg`,
  feature2: `${IMAGE_BASE_PATH}/home/project-feature-2.jpg`,
  feature3: `${IMAGE_BASE_PATH}/home/project-feature-3.jpg`
} as const;

export const STUDIO_IMAGES = {
  hero: `${IMAGE_BASE_PATH}/studio/hero.jpg`,
  enfoque: `${IMAGE_BASE_PATH}/studio/enfoque.jpg`,
  metodologia: `${IMAGE_BASE_PATH}/studio/metodologia.jpg`,
  experiencia: `${IMAGE_BASE_PATH}/studio/experiencia.jpg`,
  objetivo: `${IMAGE_BASE_PATH}/studio/objetivo.jpg`
} as const;

export const SERVICES_IMAGES = {
  hero: `${IMAGE_BASE_PATH}/services/hero.jpg`,
  service1: `${IMAGE_BASE_PATH}/services/service-1.jpg`,
  service2: `${IMAGE_BASE_PATH}/services/service-2.jpg`,
  service3: `${IMAGE_BASE_PATH}/services/service-3.jpg`
} as const;

export const CONTACT_IMAGES = {
  hero: `${IMAGE_BASE_PATH}/contact/hero.jpg`
} as const;

export type ProjectSlug =
  | "akira-sushi"
  | "garibaldi-carwash"
  | "torre-central"
  | "casa-delta"
  | "oficinas-atlas"
  | "plaza-urbana-sur";

export type ProjectImageConfig = {
  cover: string;
  thumbnail: string;
  gallery: string[];
};

export const PROJECT_IMAGES: Record<ProjectSlug, ProjectImageConfig> = {
  "akira-sushi": {
    cover: `${IMAGE_BASE_PATH}/projects/akira-sushi/cover.jpg`,
    thumbnail: `${IMAGE_BASE_PATH}/projects/akira-sushi/thumb.jpg`,
    gallery: [
      `${IMAGE_BASE_PATH}/projects/akira-sushi/gallery-1.jpg`,
      `${IMAGE_BASE_PATH}/projects/akira-sushi/gallery-2.jpg`,
      `${IMAGE_BASE_PATH}/projects/akira-sushi/gallery-3.jpg`,
      `${IMAGE_BASE_PATH}/projects/akira-sushi/gallery-4.jpg`
    ]
  },
  "garibaldi-carwash": {
    cover: `${IMAGE_BASE_PATH}/projects/garibaldi-carwash/cover.jpg`,
    thumbnail: `${IMAGE_BASE_PATH}/projects/garibaldi-carwash/thumb.jpg`,
    gallery: [
      `${IMAGE_BASE_PATH}/projects/garibaldi-carwash/gallery-1.jpg`,
      `${IMAGE_BASE_PATH}/projects/garibaldi-carwash/gallery-2.jpg`,
      `${IMAGE_BASE_PATH}/projects/garibaldi-carwash/gallery-3.jpg`,
      `${IMAGE_BASE_PATH}/projects/garibaldi-carwash/gallery-4.jpg`
    ]
  },
  "torre-central": {
    cover: `${IMAGE_BASE_PATH}/projects/torre-central/cover.jpg`,
    thumbnail: `${IMAGE_BASE_PATH}/projects/torre-central/thumb.jpg`,
    gallery: [
      `${IMAGE_BASE_PATH}/projects/torre-central/gallery-1.jpg`,
      `${IMAGE_BASE_PATH}/projects/torre-central/gallery-2.jpg`,
      `${IMAGE_BASE_PATH}/projects/torre-central/gallery-3.jpg`,
      `${IMAGE_BASE_PATH}/projects/torre-central/gallery-4.jpg`
    ]
  },
  "casa-delta": {
    cover: `${IMAGE_BASE_PATH}/projects/casa-delta/cover.jpg`,
    thumbnail: `${IMAGE_BASE_PATH}/projects/casa-delta/thumb.jpg`,
    gallery: [
      `${IMAGE_BASE_PATH}/projects/casa-delta/gallery-1.jpg`,
      `${IMAGE_BASE_PATH}/projects/casa-delta/gallery-2.jpg`,
      `${IMAGE_BASE_PATH}/projects/casa-delta/gallery-3.jpg`,
      `${IMAGE_BASE_PATH}/projects/casa-delta/gallery-4.jpg`
    ]
  },
  "oficinas-atlas": {
    cover: `${IMAGE_BASE_PATH}/projects/oficinas-atlas/cover.jpg`,
    thumbnail: `${IMAGE_BASE_PATH}/projects/oficinas-atlas/thumb.jpg`,
    gallery: [
      `${IMAGE_BASE_PATH}/projects/oficinas-atlas/gallery-1.jpg`,
      `${IMAGE_BASE_PATH}/projects/oficinas-atlas/gallery-2.jpg`,
      `${IMAGE_BASE_PATH}/projects/oficinas-atlas/gallery-3.jpg`,
      `${IMAGE_BASE_PATH}/projects/oficinas-atlas/gallery-4.jpg`
    ]
  },
  "plaza-urbana-sur": {
    cover: `${IMAGE_BASE_PATH}/projects/plaza-urbana-sur/cover.jpg`,
    thumbnail: `${IMAGE_BASE_PATH}/projects/plaza-urbana-sur/thumb.jpg`,
    gallery: [
      `${IMAGE_BASE_PATH}/projects/plaza-urbana-sur/gallery-1.jpg`,
      `${IMAGE_BASE_PATH}/projects/plaza-urbana-sur/gallery-2.jpg`,
      `${IMAGE_BASE_PATH}/projects/plaza-urbana-sur/gallery-3.jpg`,
      `${IMAGE_BASE_PATH}/projects/plaza-urbana-sur/gallery-4.jpg`
    ]
  }
};

export function getProjectImages(slug: ProjectSlug | string): ProjectImageConfig {
  if (slug in PROJECT_IMAGES) {
    return PROJECT_IMAGES[slug as ProjectSlug];
  }

  return {
    cover: PLACEHOLDERS.projectCover,
    thumbnail: PLACEHOLDERS.projectThumb,
    gallery: [PLACEHOLDERS.gallery]
  };
}

