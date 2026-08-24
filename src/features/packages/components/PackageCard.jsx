import { PATHS } from "../../../routes/paths.js";
import { cn } from "../../../utils/cn.js";
import { Button } from "../../../components/ui/Button.jsx";

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

const TIER_COLORS = {
  bronze: "#cd7f32",
  silver: "#8e99ab",
  gold: "#d9a514",
};

function TierIcon({ tier }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      stroke={TIER_COLORS[tier]}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 13 17 22l-5-3-5 3 1.5-9" />
    </svg>
  );
}

export function PackageCard({
  tier,
  name,
  price,
  period = "Month",
  features,
  dark = false,
  badge,
  className,
}) {
  return (
    <div className={cn("relative flex flex-col", className)}>
      {badge && (
        <span className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-5 py-2 text-sm font-medium text-primary">
          {badge}
        </span>
      )}

      <div
        className={cn(
          "flex flex-col items-start gap-6 rounded-[30px] p-8 xl:p-10",
          dark ? "bg-primary text-white" : "bg-mist",
        )}
      >
        <span className="grid size-14 place-items-center rounded-full bg-white">
          <TierIcon tier={tier} />
        </span>

        <div>
          <p className={cn("text-base", dark ? "text-white/80" : "text-muted")}>
            {name}
          </p>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span
              className={cn(
                "font-display text-4xl font-semibold lg:text-5xl",
                dark ? "text-accent" : "text-heading",
              )}
            >
              {price} EGP
            </span>
            <span
              className={cn(
                "font-display text-lg font-semibold",
                dark ? "text-white/70" : "text-muted",
              )}
            >
              /{period}
            </span>
          </div>
        </div>

        <Button
          to={PATHS.contact}
          variant={dark ? "light" : "outline"}
          className="w-full"
        >
          Get started
        </Button>
      </div>

      <ul className="flex flex-col gap-3 px-8 pb-2 pt-7 xl:px-10">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <CheckIcon />
            <span className="text-base text-heading">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
