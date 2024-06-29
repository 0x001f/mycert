import { SocialLinks } from "./SocialLinks";

export function Header() {
  return (
    <header>
      <h1 className="animate__animated animate__fadeInUp text-5xl md:text-6xl text-wrap max-w-full my-3">
        My Certificates
      </h1>
      <div className="mx-auto w-fit">
        <SocialLinks animateIn />
      </div>
    </header>
  );
}
