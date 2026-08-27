import { Container } from "../../../components/layout/Container.jsx";

const SPECIALTY_COLUMNS = [
  ["Personal training", "Strength coaching", "Fat loss", "Muscle building"],
  ["Functional fitness", "Mobility training", "Weight management"],
];

const STATS = [
  { value: "190+", label: "Clients transformed with proven results" },
  { value: "5+", label: "Advanced training specializations" },
  { value: "2,000+", label: "Personalized sessions delivered with care" },
];

const SOCIALS = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="size-4"
      >
        <path
          d="M17.5 3h-3a5 5 0 0 0-5 5v3h-3v4h3v8h4v-8h3l1-4h-4V8a1 1 0 0 1 1-1h3V3Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="size-4"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="3.8"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="17" cy="7" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="size-4"
      >
        <path
          d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="m10 15 5-3-5-3v6Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Vimeo",
    href: "https://vimeo.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="size-4"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" fill="currentColor" />
        <path d="M10 8.5v7l6-3.5-6-3.5Z" fill="#fff" />
      </svg>
    ),
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="size-4 shrink-0"
    >
      <path
        d="M1.5 8h12M9.7 4.2 13.5 8l-3.8 3.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Content() {
  return (
    <Container as="section" className="pb-24 pt-8">
      <div className="mx-auto w-full max-w-[900px]">
        <div className="grid gap-x-[60px] gap-y-14 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-[2rem] font-bold leading-tight text-heading">
              Mission
            </h2>
            <p className="mt-6 max-w-[340px] text-[15px] leading-[1.65] text-primary/60">
              My mission is to help individuals build strength, confidence, and
              healthy habits through personalized training, expert guidance, and
              sustained motivation. I design fitness programs that are
              realistic, sustainable, and tailored to each client's unique
              goals.
            </p>
          </div>

          <div>
            <h2 className="font-display text-[2rem] font-bold leading-tight text-heading">
              Vision
            </h2>
            <p className="mt-6 max-w-[380px] text-[15px] leading-[1.65] text-primary/60">
              To build a culture where fitness becomes a sustainable, rewarding
              part of everyday life.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4">
              {SPECIALTY_COLUMNS.map((column) => (
                <ul key={column[0]} className="space-y-4">
                  {column.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[15px] font-medium text-primary"
                    >
                      <ArrowIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.value}>
              <p className="font-display text-5xl font-bold leading-none text-heading">
                {stat.value}
              </p>
              <p className="mt-4 max-w-[210px] text-sm leading-[1.55] text-primary/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-[52px] flex flex-col items-center justify-between gap-6 rounded-3xl bg-primary/5 px-6 py-8 sm:px-11 lg:flex-row">
          <h2 className="text-[17px] font-semibold text-heading">
            Follow for more fitness inspiration
          </h2>

          <ul className="flex items-center gap-3.5">
            {SOCIALS.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="grid size-9 place-items-center rounded-[10px] bg-white text-primary transition-colors duration-300 hover:bg-accent"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
