import { SocialLinks } from "./SocialLinks";

export function Header() {
  return (
    <header>
      <div className="animate__animated curtainUp loadingCurtain z-10" />
      <h1 className="animate__animated pageLoadHeaderTransition relative text-5xl md:text-6xl text-wrap max-w-full my-3 z-20 mix-blend-exclusion invert dark:invert-0">
        My Certificates
      </h1>
      <div className="mx-auto w-fit">
        <SocialLinks animateIn />
      </div>
    </header>
  );
}
