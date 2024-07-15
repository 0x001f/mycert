import styles from "./SocialLinks.module.scss";

export type Link = { title: "GitHub" | "LinkedIn" | "Email"; link: string };
export const link: Link[] = [
  { title: "GitHub", link: "https://github.com/0x001f" },
  { title: "LinkedIn", link: "https://www.linkedin.com/in/yatfuchan" },
  { title: "Email", link: "mailto:yfchan.career@gmail.com" },
];

type SocialLinksProps = {
  animateIn?: boolean;
};
export function SocialLinks(props: SocialLinksProps) {
  return (
    <div className={styles.links}>
      {link.map((entry, index) => (
        <a
          href={entry.link}
          target="_blank"
          key={entry.title}
          className={
            props.animateIn ? "animate__animated animate__fadeInUp" : ""
          }
          style={{ animationDelay: `${index * 0.25 + 1.65}s` }}
        >
          {entry.title}
        </a>
      ))}
    </div>
  );
}
