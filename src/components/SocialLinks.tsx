import FadeInUp from "./FadeInUp";
import styles from "./SocialLinks.module.scss";

export type Link = { title: "GitHub" | "LinkedIn" | "Email"; link: string };
export const link: Link[] = [
  { title: "GitHub", link: "https://github.com/0xc1fa" },
  { title: "LinkedIn", link: "https://www.linkedin.com/in/yatfuchan" },
  { title: "Email", link: "mailto:career@yfchan.me" },
];

type SocialLinksProps = {
  animateIn?: boolean;
};
export function SocialLinks(props: SocialLinksProps) {
  return (
    <div className={styles.links}>
      {link.map((entry, index) => (
        <FadeInUp
          delay={index * 0.25 + 1.65}
          disabled={!props.animateIn}
          key={entry.title}
        >
          <a href={entry.link} target="_blank">
            {entry.title}
          </a>
        </FadeInUp>
      ))}
    </div>
  );
}
