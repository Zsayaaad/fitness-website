import { Link } from "react-router-dom";
import { cn } from "../../../utils/cn.js";

export function ClassCard({ title, description, image, href, className }) {
  return (
    <Link
      to={href}
      className={cn(
        "flex h-[435px] flex-col justify-between overflow-hidden rounded-[20px] bg-mist lg:h-[470px] xl:h-[510px]",
        className,
      )}
    >
      <div className="p-5 xl:p-10">
        <h3 className="font-display text-2xl font-semibold text-heading lg:text-[26px] xl:text-[28px]">
          {title}
        </h3>
        <p className="mt-2.5 max-w-[650px] text-base text-muted lg:text-[17px] xl:text-lg">
          {description}
        </p>
      </div>

      <div className="relative min-h-0 flex-1 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-5 right-5 grid size-11 place-items-center rounded-full bg-white text-primary xl:bottom-[30px] xl:right-[30px]"
        >
          <svg viewBox="0 0 13 13" fill="none" className="h-3.5 w-3.5">
            <path
              d="M2.5 10.5 10.5 2.5M3.5 2.5h7v7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
