import { useState } from "react";
import { SITE_CONFIG } from "../../../constants/siteConfig.js";
import { cn } from "../../../utils/cn.js";
import { Container } from "../../../components/layout/Container.jsx";
import whatsappIcon from "../../../assets/icons/social-whatsapp.svg";
import facebookIcon from "../../../assets/icons/social-facebook.svg";
import instagramIcon from "../../../assets/icons/social-instagram.svg";

const FAQS = [
  {
    question: "How do I choose the right plan for me?",
    answer:
      "Choose a plan based on your goals, fitness level, and schedule. I'll help you pick the right one for your journey and long-term progress.",
  },
  {
    question: "What if I miss a scheduled training session?",
    answer:
      "Life happens — just let me know in advance and we'll reschedule your session at no extra cost, as long as it's within the same week.",
  },
  {
    question: "Can I switch my plan later?",
    answer:
      "Yes. You can upgrade, downgrade, or switch between online and private coaching at the start of any new month.",
  },
  {
    question: "How can I contact you for support?",
    answer:
      "You can reach me anytime on WhatsApp, Facebook, or Instagram — I usually reply within a few hours.",
  },
  {
    question: "Are there any long-term commitments?",
    answer:
      "No. All plans are month-to-month, but the 3 and 6 month long-term plans come with discounted rates if you want to commit to your progress.",
  },
];

const CONTACT_LINKS = [
  { label: "WhatsApp", hint: "Fastest reply", url: SITE_CONFIG.whatsapp, icon: whatsappIcon },
  { label: "Facebook", hint: "Send a message", url: SITE_CONFIG.socials[0].url, icon: facebookIcon },
  { label: "Instagram", hint: "DM me", url: SITE_CONFIG.socials[3].url, icon: instagramIcon },
];

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="rounded-lg bg-neutral-100">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-2.5 p-5 text-left"
      >
        <h3 className="flex-1 font-display text-[19px] font-semibold text-heading lg:text-xl xl:text-[22px]">
          {faq.question}
        </h3>
        <span
          className={cn(
            "relative block size-5 shrink-0 transition-transform duration-300",
            isOpen && "rotate-45",
          )}
        >
          <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-sm bg-[#133e3e]" />
          <span className="absolute left-1/2 top-0 h-5 w-0.5 -translate-x-1/2 rounded-sm bg-[#133e3e]" />
        </span>
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="max-w-[600px] px-5 pb-5 text-base text-muted lg:text-[17px] xl:text-lg">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  function toggle(index) {
    setOpenIndex((current) => (current === index ? -1 : index));
  }

  return (
    <section className="py-20 lg:py-[100px] xl:py-[150px]">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-[32px] font-semibold leading-[1.1] text-heading lg:text-[38px] xl:text-[48px]">
          Have questions or need help? I&rsquo;m here to assist you
        </h2>

        <div className="mt-10 flex flex-col gap-8 lg:mt-[50px] lg:flex-row lg:gap-[50px]">
          <div className="flex flex-1 flex-col gap-2.5 lg:gap-3">
            {FAQS.map((faq, index) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>

          <div className="flex w-full shrink-0 flex-col rounded-[30px] bg-primary p-8 text-white xl:w-[420px] xl:p-10">
            <div className="flex items-center gap-3">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="grid size-12 place-items-center rounded-[14px] bg-accent transition-transform duration-300 hover:scale-110"
                >
                  <img src={link.icon} alt="" className="h-6 w-6" />
                </a>
              ))}
            </div>

            <h3 className="mt-8 font-display text-2xl font-semibold lg:text-3xl">
              Still have questions?
            </h3>
            <p className="mt-3 text-base text-white/70 lg:text-[17px]">
              Can&rsquo;t find the answer you&rsquo;re looking for? Reach out
              directly — I usually reply within a few hours.
            </p>

            <ul className="mt-8 flex flex-col divide-y divide-white/10 border-t border-white/10">
              {CONTACT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-4"
                  >
                    <img src={link.icon} alt="" className="h-5 w-5 brightness-0 invert" />
                    <span className="flex-1">
                      <span className="block font-medium">{link.label}</span>
                      <span className="block text-sm text-white/60">{link.hint}</span>
                    </span>
                    <svg
                      viewBox="0 0 13 13"
                      fill="none"
                      aria-hidden="true"
                      className="h-3 w-3 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      <path
                        d="M2.5 10.5 10.5 2.5M3.5 2.5h7v7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
