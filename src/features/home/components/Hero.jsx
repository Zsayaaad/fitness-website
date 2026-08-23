import { PATHS } from "../../../routes/paths.js";
import { Container } from "../../../components/layout/Container.jsx";
import { Button } from "../../../components/ui/Button.jsx";
import heroImage from "../../../assets/images/hero-image.webp";
import heroPattern from "../../../assets/images/hero-pattern.png";

export function Hero() {
  return (
    <section className="pt-20 lg:pt-[90px] xl:pt-0">
      <div className="mx-auto w-full max-w-[1780px] px-5 lg:px-[30px]">
        <div className="relative overflow-hidden rounded-[30px] bg-primary py-20 lg:py-[100px] xl:py-[150px]">
          <img
            src={heroImage}
            alt=""
            className="absolute inset-y-0 right-0 h-full w-[90%] object-cover object-right"
          />
          <img
            src={heroPattern}
            alt=""
            className="absolute left-0 top-0 h-[820px] w-full max-w-[70%] opacity-30"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#063434_0%,#0634345e_70%)]" />

          <Container className="relative z-10">
            <div className="grid gap-[15px] xl:grid-cols-2 xl:gap-5">
              <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:gap-5 lg:text-left">
                <p className="font-display text-3xl font-semibold text-white lg:text-4xl xl:text-[38px]">
                  Hi, I&apos;m Muhammad
                </p>

                <h1 className="font-display text-[45px] font-semibold leading-[55px] text-white lg:text-[65px] lg:leading-[75px] xl:text-[82px] xl:leading-[90px]">
                  Your <span className="text-accent">fitness</span> trainer
                </h1>

                <p className="max-w-xl text-base text-white lg:text-[17px] xl:text-lg">
                  Transform your body and mind with personalized workout plans
                  designed for your goals. Reach new heights with targeted
                  training programs built around your progress.
                </p>

                <Button
                  to={PATHS.packages}
                  variant="lime"
                  size="md"
                  arrow
                  chip="white"
                >
                  Explore packages
                </Button>
              </div>

              <div className="hidden h-[200px] place-self-start xl:block" />
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
