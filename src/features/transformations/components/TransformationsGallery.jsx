import { PATHS } from "../../../routes/paths.js";
import { Container } from "../../../components/layout/Container.jsx";
import { Button } from "../../../components/ui/Button.jsx";

// First strip images
import strip1Img1 from "../../../assets/images/transformations/transformation-1.jpg";
import strip1Img2 from "../../../assets/images/transformations/transformation-2.jpg";

// Second strip images
import strip2Img1 from "../../../assets/images/transformations/transformation-3.jpg";
import strip2Img2 from "../../../assets/images/transformations/transformation-4.jpg";

const FIRST_STRIP_IMAGES = [strip1Img1, strip1Img2];
const SECOND_STRIP_IMAGES = [strip2Img1, strip2Img2];

function MarqueeRow({
  images,
  reverse = false,
  altPrefix = "Body transformation",
}) {
  if (!images || images.length === 0) return null;

  // Duplicate items if needed so track width is wide enough for seamless looping
  const displayItems = images.length < 4 ? [...images, ...images] : images;
  const loopItems = [...displayItems, ...displayItems];

  return (
    <div className="overflow-hidden">
      <ul
        className={
          reverse
            ? "marquee-track marquee-track--reverse flex w-max"
            : "marquee-track flex w-max"
        }
      >
        {loopItems.map((src, index) => (
          <li
            key={index}
            className="w-[calc(50vw-30px)] shrink-0 pr-10 lg:w-[400px] xl:w-[570px]"
          >
            <img
              src={src}
              alt={`${altPrefix} ${(index % images.length) + 1}`}
              loading="eager"
              draggable="false"
              className="aspect-[4/3] w-full rounded-[20px] object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TransformationsGallery() {
  return (
    <section className="pt-20 lg:pt-[100px] xl:pt-[150px]">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-5">
          <h2 className="max-w-md font-display text-[32px] font-semibold leading-[1.1] text-heading lg:text-[38px] xl:text-[48px]">
            Latest body transformations
          </h2>
          <Button to={PATHS.classes} variant="lime" size="md" arrow>
            View all classes
          </Button>
        </div>
      </Container>

      <div className="mt-[30px] flex flex-col gap-10 lg:mt-[50px]">
        <MarqueeRow
          images={FIRST_STRIP_IMAGES}
          altPrefix="Transformation strip 1"
        />
        <MarqueeRow
          images={SECOND_STRIP_IMAGES}
          reverse
          altPrefix="Transformation strip 2"
        />
      </div>
    </section>
  );
}
