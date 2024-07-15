import { SocialLinks } from "./SocialLinks";
import LoadingHeading from "@/components/LoadingHeading";
import LoadingCurtain from "./LoadingCurtain";

export function Header() {
  return (
    <header>
      <LoadingCurtain />
      <LoadingHeading type="h1">My Certificates</LoadingHeading>
      <div className="mx-auto w-fit">
        <SocialLinks animateIn />
      </div>
    </header>
  );
}
