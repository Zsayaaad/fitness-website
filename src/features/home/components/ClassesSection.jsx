import { useRef } from "react";
import { classDetailPath } from "../../../routes/paths.js";
import { cn } from "../../../utils/cn.js";
import { Container } from "../../../components/layout/Container.jsx";
import { ClassCard } from "../../classes/index.js";
import personalTraining from "../../../assets/images/class-personal-training.jpg";
import nutritionalGuidance from "../../../assets/images/class-nutritional-guidance.jpg";
import onlineCoaching from "../../../assets/images/class-online-coaching.jpg";
import groupTraining from "../../../assets/images/class-group-training.jpg";

const CLASSES = [
  {
    slug: "personal-training",
    title: "Personal training",
    description:
      "Get one-on-one coaching with customized workout plans designed to meet your specific fitness goals.",
    image: personalTraining,
  },
  {
    slug: "nutritional-guidance",
    title: "Nutritional guidance",
    description:
      "Receive expert advice on meal planning and nutrition to complement your training.",
    image: nutritionalGuidance,
  },
  {
    slug: "online-coaching",
    title: "Online coaching",
    description:
      "Achieve your fitness goals from the comfort of your home with virtual training sessions.",
    image: onlineCoaching,
  },
  {
    slug: "group-training",
    title: "Group training",
    description:
      "Join small group sessions that combine peer motivation with personalized coaching.",
    image: groupTraining,
  },
];

function CircleArrowIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
    >
      <path
        d="M4 12h15m-6-7 7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClassesSection() {
  const trackRef = useRef(null);

  function scrollByCard(direction) {
    const track = trackRef.current;
    if (!track) return;

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = track.firstElementChild.offsetWidth + gap;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const atStart = track.scrollLeft <= 0;
    const atEnd = track.scrollLeft >= maxScroll - 1;

    if (direction === 1 && atEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction === -1 && atStart) {
      track.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      track.scrollBy({ left: direction * step, behavior: "smooth" });
    }
  }

  const arrows = (
    <div className="flex items-center gap-2.5 lg:gap-5">
      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        aria-label="Previous classes"
        className="grid size-8 place-items-center rounded-full text-primary transition-colors hover:text-primary/60 lg:size-12"
      >
        <CircleArrowIcon className="rotate-180" />
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        aria-label="Next classes"
        className="grid size-8 place-items-center rounded-full text-primary transition-colors hover:text-primary/60 lg:size-12"
      >
        <CircleArrowIcon />
      </button>
    </div>
  );

  return (
    <section className="py-20 lg:py-[100px] xl:py-[150px]">
      <Container>
        <div className="flex items-center justify-between gap-5">
          <h2 className="text-balance font-display text-[32px] font-semibold leading-[1.1] text-heading lg:max-w-[60%] lg:text-[38px] xl:max-w-[40%] xl:text-[48px]">
            What&rsquo;s your fitness goal?
          </h2>
          <div className="hidden lg:block">{arrows}</div>
        </div>

        <ul
          ref={trackRef}
          className="mt-[30px] flex snap-x snap-mandatory gap-5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mt-[50px] xl:gap-10"
        >
          {CLASSES.map((item, index) => (
            <li
              key={item.slug}
              className="w-full shrink-0 snap-start lg:w-[calc(50%-10px)] xl:w-[calc(33.333%-26.67px)]"
            >
              <ClassCard
                title={item.title}
                description={item.description}
                image={item.image}
                href={classDetailPath(item.slug)}
                className={index % 2 === 0 ? "bg-mist" : "bg-neutral-100"}
              />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center lg:hidden">{arrows}</div>
      </Container>
    </section>
  );
}
