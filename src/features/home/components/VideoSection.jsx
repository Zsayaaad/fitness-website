import { useRef, useState } from "react";
import { SITE_CONFIG } from "../../../constants/siteConfig.js";
import videoPauseIcon from "../../../assets/icons/video-pause.svg";
import facebookIcon from "../../../assets/icons/social-facebook.svg";
import linkedinIcon from "../../../assets/icons/social-linkedin.svg";
import youtubeIcon from "../../../assets/icons/social-youtube.svg";
import instagramIcon from "../../../assets/icons/social-instagram.svg";
import fitnessVideo from "../../../assets/videos/fitness-activity.mp4";

const SOCIAL_ICONS = {
  Facebook: facebookIcon,
  LinkedIn: linkedinIcon,
  YouTube: youtubeIcon,
  Instagram: instagramIcon,
};

export function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  return (
    <section>
      <div className="mx-auto w-full max-w-[1780px] px-5 lg:px-[30px]">
        <div className="grid overflow-hidden rounded-[30px] bg-primary lg:grid-cols-2 xl:grid-cols-5">
          <div className="relative aspect-video overflow-hidden lg:aspect-auto xl:col-span-3">
            <video
              ref={videoRef}
              src={fitnessVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="absolute bottom-[30px] right-[30px] hidden size-12 place-items-center rounded-full bg-white lg:grid"
            >
              {isPlaying ? (
                <img src={videoPauseIcon} alt="" className="h-5 w-4" />
              ) : (
                <svg
                  viewBox="0 0 16 21"
                  aria-hidden="true"
                  className="ml-0.5 h-5 w-4 fill-heading"
                >
                  <path d="M1 1.5v18l14-9z" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex flex-col justify-center gap-10 px-5 py-10 lg:px-10 xl:col-span-2 xl:gap-[60px] xl:p-20">
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-[30px] font-semibold leading-[1.3] text-white lg:text-4xl xl:text-[38px]">
                Helping you achieve your fitness potential is my mission.
              </h2>
              <div className="flex items-center gap-2.5">
                <span className="h-px w-[30px] bg-[#d7dddd]" />
                <p className="text-base text-white lg:text-[17px] xl:text-lg">
                  Muhammad Ashraf
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
              <p className="text-base text-[#d7dddd] lg:text-[17px] xl:text-lg">
                Follow me:
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
          </div>
        </div>
      </div>
    </section>
  );
}
