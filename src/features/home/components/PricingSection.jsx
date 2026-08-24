import { Container } from "../../../components/layout/Container.jsx";
import { PackagesGrid } from "../../packages/index.js";

const PRIVATE_PLANS = [
  {
    tier: "bronze",
    name: "Private Start",
    price: "1000",
    features: [
      "3 Sessions / Week (Day On - Day Off)",
      "In-Gym Personal Coaching",
    ],
  },
  {
    tier: "silver",
    name: "Private Pro",
    price: "1600",
    dark: true,
    features: ["5 Sessions / Week", "In-Gym Personal Coaching"],
  },
  {
    tier: "gold",
    name: "Private Elite",
    price: "2000",
    features: ["6 Sessions / Week", "In-Gym Personal Coaching"],
  },
];

const ONLINE_PLANS = [
  {
    tier: "bronze",
    name: "Start",
    price: "700",
    features: [
      "Customized Workout Program",
      "Exercise Guidance",
      "Weekly Check-In",
      "Monthly Program Update",
    ],
  },
  {
    tier: "silver",
    name: "Pro",
    price: "1200",
    dark: true,
    badge: "Most Popular",
    features: [
      "Customized Workout Program",
      "Personalized Nutrition Plan",
      "Weekly Follow-Up",
      "Program & Nutrition Adjustments",
      "WhatsApp Support",
    ],
  },
  {
    tier: "gold",
    name: "Elite",
    price: "1700",
    features: [
      "Everything in PRO",
      "Priority Support",
      "Frequent Follow-Up",
      "Form Check (Exercise Videos)",
      "Unlimited Adjustments",
    ],
  },
];

const LONG_TERM_PLANS = [
  {
    name: "PRO",
    rows: [
      ["1 Month", "1200"],
      ["3 Months", "3300"],
      ["6 Months", "6000"],
    ],
  },
  {
    name: "ELITE",
    rows: [
      ["1 Month", "1700"],
      ["3 Months", "4800"],
      ["6 Months", "9000"],
    ],
  },
];

function GroupTitle({ icon, children }) {
  return (
    <h3 className="flex items-center gap-3 font-display text-2xl font-semibold text-heading lg:text-3xl">
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-mist text-primary">
        {icon}
      </span>
      {children}
    </h3>
  );
}

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export function PricingSection() {
  return (
    <section
    // className="py-20 lg:py-[100px] xl:py-[150px]"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="font-display text-[19px] font-semibold text-primary lg:text-xl xl:text-[22px]">
            Pricing &amp; Memberships
          </p>
          <h2 className="mt-2.5 font-display text-[32px] font-semibold leading-[1.1] text-heading lg:text-[38px] xl:text-[48px]">
            Your Goal, My Mission
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted lg:text-lg">
            Personalized coaching programs designed to fit your lifestyle and
            fitness ambitions — from dedicated one-on-one private sessions to
            flexible online guidance with M.A Coaching.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-8 lg:mt-20">
          <GroupTitle
            icon={
              <svg {...ICON_PROPS} className="h-5 w-5">
                <path d="m6.5 6.5 11 11" />
                <path d="m21 21-1-1" />
                <path d="m3 3 1 1" />
                <path d="m18 22 4-4" />
                <path d="m2 6 4-4" />
                <path d="m3 10 7-7" />
                <path d="m14 21 7-7" />
              </svg>
            }
          >
            Private Coaching
          </GroupTitle>
          <PackagesGrid packages={PRIVATE_PLANS} />
        </div>

        <div className="mt-16 flex flex-col gap-8">
          <GroupTitle
            icon={
              <svg {...ICON_PROPS} className="h-5 w-5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            }
          >
            Online Coaching
          </GroupTitle>
          <PackagesGrid packages={ONLINE_PLANS} />
        </div>

        <div className="mt-16 flex flex-col gap-8">
          <GroupTitle
            icon={
              <svg {...ICON_PROPS} className="h-5 w-5">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            }
          >
            Long-Term Plans
          </GroupTitle>
          <div className="grid gap-8 md:grid-cols-2">
            {LONG_TERM_PLANS.map((plan) => (
              <div
                key={plan.name}
                className="rounded-[30px] bg-primary p-8 xl:p-10"
              >
                <h4 className="font-display text-2xl font-semibold text-white">
                  {plan.name}
                </h4>
                <ul className="mt-4 divide-y divide-white/10">
                  {plan.rows.map(([duration, price]) => (
                    <li
                      key={duration}
                      className="flex items-center justify-between gap-4 py-4"
                    >
                      <span className="text-base text-white">{duration}</span>
                      <span className="font-display text-xl font-semibold text-accent">
                        {price} EGP
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
