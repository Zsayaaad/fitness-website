import { Link } from "react-router-dom";
import { MAIN_NAV } from "../../constants/navigation.js";
import { PATHS } from "../../routes/paths.js";
import { SITE_CONFIG } from "../../constants/siteConfig.js";
import { Container } from "./Container.jsx";
import logoLight from "../../assets/images/logo-light.svg";
import facebookIcon from "../../assets/icons/social-facebook.svg";
import linkedinIcon from "../../assets/icons/social-linkedin.svg";
import youtubeIcon from "../../assets/icons/social-youtube.svg";
import instagramIcon from "../../assets/icons/social-instagram.svg";

const SOCIAL_ICONS = {
  Facebook: facebookIcon,
  LinkedIn: linkedinIcon,
  YouTube: youtubeIcon,
  Instagram: instagramIcon,
};

const FOOTER_LINKS = [
  ...MAIN_NAV,
  { label: "Packages", path: PATHS.packages },
  { label: "Privacy Policy", path: PATHS.privacyPolicy },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <Container className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-3 lg:py-16">
        <div className="flex flex-col items-start gap-[30px]">
          <Link to={PATHS.home} aria-label="FitCoach — Home">
            <img
              src={logoLight}
              alt="FitCoach"
              className="h-[35px] w-auto xl:h-11"
            />
          </Link>
          <p className="max-w-xs text-base text-white/70 lg:text-[17px]">
            {SITE_CONFIG.description}
          </p>
          <ul className="flex items-center gap-[15px]">
            {SITE_CONFIG.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-9 place-items-center rounded-[10px] bg-accent transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={SOCIAL_ICONS[social.label]}
                    alt=""
                    className="h-5 w-5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-[30px]">
          <h2 className="font-display text-[19px] font-semibold text-white lg:text-xl xl:text-[22px]">
            Pages link
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="text-base text-white transition-colors hover:text-accent lg:text-[17px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-[30px]">
          <h2 className="font-display text-[19px] font-semibold text-white lg:text-xl xl:text-[22px]">
            Begin your fitness journey
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-base text-white/70">Feel free to call me</p>
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, "")}`}
                className="mt-1 inline-block font-display text-lg font-semibold text-white transition-colors hover:text-accent lg:text-xl"
              >
                {SITE_CONFIG.phone}
              </a>
            </div>
            <div>
              <p className="text-base text-white/70">Email me on</p>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="mt-1 inline-block font-display text-lg font-semibold text-white transition-colors hover:text-accent lg:text-xl"
              >
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container className="py-6 text-center">
          <p className="text-sm text-[#d7dddd] lg:text-base">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
