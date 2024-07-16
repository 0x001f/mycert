"use client"
import FadeInUp from "./FadeInUp"
import styles from "./SocialLinks.module.scss"

export type Link =
	| { title: string; link: string; type: "link" }
	| { title: string; callback: () => void; type: "action" }

type SocialLinksProps = {
	animateIn?: boolean
}
export function SocialLinks(props: SocialLinksProps) {
	const link: Link[] = [
		{ title: "GitHub", link: "https://github.com/0xc1fa", type: "link" },
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/yatfuchan",
			type: "link",
		},
		{ title: "Email", link: "mailto:career@yfchan.me", type: "link" },
	]

	return (
		<div className={styles.links}>
			{link.map((entry, index) => (
				<FadeInUp
					delay={index * 0.25 + 1.65}
					disabled={!props.animateIn}
					key={entry.title}
				>
					{entry.type === "link" ? (
						<a href={entry.link} target="_blank">
							{entry.title}
						</a>
					) : (
						<button onClick={entry.callback}>{entry.title}</button>
					)}
				</FadeInUp>
			))}
		</div>
	)
}
