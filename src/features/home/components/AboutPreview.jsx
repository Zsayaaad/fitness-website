import { PATHS } from "../../../routes/paths.js";
import { Container } from "../../../components/layout/Container.jsx";
import { Button } from "../../../components/ui/Button.jsx";
import aboutPortrait from "../../../assets/images/about-portrait.png";

const CREDENTIALS = [
  "Certified personal trainer",
  "Nutrition specialist",
  "Strength and conditioning coach",
  "Trusted by 190+ clients",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="mt-1 h-[18px] w-[18px] shrink-0 text-primary"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" />
      <path
        d="M6 10.2l2.6 2.6L14 7.4"
        stroke="#fff"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AboutPreview() {
  return (
    <section className="pb-20 pt-[60px] lg:pb-[100px] lg:pt-0 xl:pb-[150px]">
      <Container>
        <div className="flex flex-col gap-[30px] lg:flex-row lg:items-start xl:items-center xl:gap-[90px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] lg:flex-1 lg:aspect-auto lg:h-[550px] xl:aspect-[4/5] xl:h-auto">
            <img
              src={aboutPortrait}
              alt="Mike — personal trainer"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1d2121e6]" />
            <div className="absolute inset-x-5 bottom-5 z-10 flex flex-col items-end text-right xl:inset-x-[30px] xl:bottom-[30px]">
              <p className="font-display text-[60px] font-semibold leading-none text-accent lg:text-[85px] xl:text-[170px]">
                4+
              </p>
              <p className="font-display text-[19px] font-semibold leading-[1.3] text-white lg:text-xl xl:text-[22px]">
                Years of experience
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-col">
            <div className="flex flex-col gap-2.5 pb-[30px] xl:pb-[50px]">
              <p className="font-display text-[19px] font-semibold text-primary lg:text-xl xl:text-[22px]">
                Who I Am
              </p>
              <h2 className="font-display text-[32px] font-semibold leading-[1.1] text-heading lg:text-[38px] xl:text-[48px]">
                Experienced personal trainer
              </h2>
              <p className="text-base text-muted lg:text-[17px] xl:text-lg">
                My approach combines science-backed training methods with
                personalized workout plans tailored to your specific goals —
                whether building muscle, losing weight, or improving overall
                health.
              </p>
              <Button
                to={PATHS.about}
                variant="lime"
                size="md"
                arrow
                className="mt-4 self-start"
              >
                Get to know me
              </Button>
            </div>

            <div className="border-t border-mist pt-[30px] xl:pt-[50px]">
              <h3 className="font-display text-[19px] font-semibold text-heading lg:text-xl xl:text-[22px]">
                Certifications
              </h3>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5 xl:mt-[25px]">
                {CREDENTIALS.map((item) => (
                  <li
                    key={item}
                    className="flex w-[300px] max-w-full items-start gap-2"
                  >
                    <CheckIcon />
                    <span className="text-base text-heading lg:text-[17px] xl:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
