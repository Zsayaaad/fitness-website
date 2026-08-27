import groupTrainingPhoto from "../../../assets/images/aboutPage/group-training.jpg";
import benchPressPhoto from "../../../assets/images/aboutPage/fitness.jpg";
import { Container } from "../../../components/layout/Container.jsx";
import { Button } from "../../../components/ui/Button.jsx";

export function AboutHero() {
  return (
    <Container as="section" className="pb-16 pt-16 lg:pb-24 lg:pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-[2.5rem] font-semibold leading-[1.15] text-primary sm:text-5xl lg:text-[4.5rem]">
          Muhammad Ashraf,
          <span className="block text-black">your fitness trainer</span>
        </h1>

        <div className="mt-9 flex justify-center">
          <Button
            to="/classes"
            variant="outline"
            arrow
            chip="primary"
            className="[&_svg]:-rotate-45"
          >
            Explore my classes
          </Button>
        </div>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
        <img
          src={groupTrainingPhoto}
          alt="Clients training with dumbbells during a group session"
          className="aspect-square w-full rounded-2xl object-cover"
          loading="eager"
        />

        <div className="flex flex-col items-center justify-between rounded-2xl bg-accent px-6 py-9 text-center text-primary">
          <div>
            <h2 className="text-3xl font-semibold">My experience</h2>
            <p className="mt-6 text-xl font-semibold leading-relaxed text-primary/80">
              I believe real fitness comes from personalized training,
              consistency, and a mindset built for success.
            </p>
          </div>
          <p className="mt-10 font-display text-6xl font-semibold lg:text-7xl">
            14+
          </p>
        </div>

        <img
          src={benchPressPhoto}
          alt="Mike spotting a client during a barbell bench press"
          className="aspect-square w-full rounded-2xl object-cover"
          loading="eager"
        />
      </div>
    </Container>
  );
}
