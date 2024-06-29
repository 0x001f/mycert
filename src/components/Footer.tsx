import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="pt-24 pb-8 px-4 sm:px-12 flex justify-between align-middle h-fit text-xs">
      <div className="text-gray-500 text-xs">
        © Chan Yat Fu. {new Date().getFullYear()}
      </div>
      <SocialLinks />
    </footer>
  );
}
