// src/features/about/components/CredentialsList.jsx
//
// Certificate photos live in src/assets/images/.
// Drop your own files there using these names (adjust the extension if needed).
import certPersonalTrainer from "../../../assets/images/aboutPage/cert-personal-trainer.jpg";
import certNutrition from "../../../assets/images/aboutPage/cert-nutrition.jpg";
import certFitnessAward from "../../../assets/images/aboutPage/cert-fitness-award.jpg";
import certAchievement from "../../../assets/images/aboutPage/cert-achievement.jpg";
import { Container } from "../../../components/layout/Container.jsx";

const CREDENTIALS = [
  "Certified personal trainer (CPT)",
  "Nutrition coach certification",
  "Weight loss specialist",
  "Strength and conditioning specialist",
];

const CERTIFICATES = [
  { src: certPersonalTrainer, alt: "Personal Trainer Award certificate" },
  { src: certNutrition, alt: "Nutrition Coach Certification certificate" },
  { src: certFitnessAward, alt: "Fitness Award certificate" },
  { src: certAchievement, alt: "Certificate of Achievement" },
];

function SealCheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="size-5 shrink-0 text-primary"
    >
      <path
        d="M10 1.2l1.9 1.4 2.3-.3.9 2.2 2.2.9-.3 2.3 1.4 1.9-1.4 1.9.3 2.3-2.2.9-.9 2.2-2.3-.3-1.9 1.4-1.9-1.4-2.3.3-.9-2.2-2.2-.9.3-2.3L1.2 10l1.4-1.9-.3-2.3 2.2-.9.9-2.2 2.3.3L10 1.2z"
        fill="currentColor"
      />
      <path
        d="m6.8 10.1 2.1 2.1 4.2-4.4"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CredentialsList() {
  return (
    <Container as="section" className="pb-24">
      <div className="rounded-3xl bg-primary/5 px-6 py-14 sm:px-10 lg:px-[60px] lg:py-[60px]">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="font-display text-[2rem] font-bold leading-[1.3] text-heading">
              Certifications
              <span className="block">and qualifications</span>
            </h2>

            <ul className="mt-10 space-y-7">
              {CREDENTIALS.map((credential) => (
                <li
                  key={credential}
                  className="flex items-center gap-3 text-[15px] font-medium text-primary"
                >
                  <SealCheckIcon />
                  {credential}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {CERTIFICATES.map((certificate) => (
              <img
                key={certificate.src}
                src={certificate.src}
                alt={certificate.alt}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-lg border border-primary/10 bg-white object-cover shadow-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
