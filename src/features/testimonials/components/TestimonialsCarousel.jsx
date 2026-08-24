import { Container } from "../../../components/layout/Container.jsx";
import comment1 from "../../../assets/images/comment-1.svg";
import comment2 from "../../../assets/images/comment-2.svg";
import comment3 from "../../../assets/images/comment-3.svg";
import comment4 from "../../../assets/images/comment-4.svg";
import comment5 from "../../../assets/images/comment-5.svg";
import comment6 from "../../../assets/images/comment-6.svg";

const COMMENTS = [comment1, comment2, comment3, comment4, comment5, comment6];

export function TestimonialsCarousel() {
  return (
    <section className="py-20 lg:py-[100px] xl:py-[150px]">
      <Container>
        <h2 className="font-display text-[32px] font-semibold leading-[1.1] text-heading lg:text-[38px] xl:text-[48px]">
          What my clients say
        </h2>
      </Container>

      <div className="mt-[30px] overflow-hidden lg:mt-[50px]">
        <ul className="marquee-track flex w-max">
          {[...COMMENTS, ...COMMENTS].map((src, index) => (
            <li
              key={index}
              className="w-[calc(50vw-30px)] shrink-0 pr-10 lg:w-[400px] xl:w-[570px]"
            >
              <img
                src={src}
                alt={`Client comment ${(index % COMMENTS.length) + 1}`}
                loading="eager"
                draggable="false"
                className="aspect-[4/3] w-full rounded-[20px] object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
