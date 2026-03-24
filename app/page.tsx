import { HomeHero } from "@/components/home/HomeHero";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { ServicesHomeSection } from "@/components/home/ServicesHomeSection";
import { StudioHomeSection } from "@/components/home/StudioHomeSection";
import { ContactHomeSection } from "@/components/home/ContactHomeSection";

export default function HomePage() {
  return (
    <div>
      <HomeHero />
      <FeaturedProjects />
      <ServicesHomeSection />
      <StudioHomeSection />
      <ContactHomeSection />
    </div>
  );
}
