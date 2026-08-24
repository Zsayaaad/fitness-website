import { AboutPreview, ClassesSection, Hero, PricingSection, VideoSection } from "../features/home/index.js";
import { TestimonialsCarousel } from "../features/testimonials/index.js";
import { TransformationsGallery } from "../features/transformations/index.js";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClassesSection />
      <AboutPreview />
      <VideoSection />
      <TestimonialsCarousel />
      <PricingSection />
      <TransformationsGallery />
    </>
  );
}
