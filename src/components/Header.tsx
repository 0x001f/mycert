import { SocialLinks } from "./SocialLinks";
import LoadingHeading from "@/components/LoadingHeading";
import styles from "./Header.module.scss";
import clsx from "clsx";
import LoadingCurtain from "./LoadingCurtain";

export function Header() {
  return (
    <header>
      <LoadingCurtain />
      <LoadingHeading />
      <div className="mx-auto w-fit">
        <SocialLinks animateIn />
      </div>
    </header>
  );
}
