"use client"
import { downloadAllAsZip } from "@/utils/downloadZip"
import FadeInUp from "./FadeInUp"
import styles from "./SocialLinks.module.scss"

export type Link =
	| { title: string; link: string; type: "link" }
	| { title: string; callback: () => void; type: "action" }

type HeaderLinksProps = {
	animateIn?: boolean
	pdfLinks: string[]
}
export function HeaderLinks(props: HeaderLinksProps) {
	const link: Link[] = [
		{
			title: "Download ZIP",
			callback: async () => await downloadAllAsZip(props.pdfLinks),
			type: "action",
		},
		{
			title: "Source Code",
			link: "https://github.com/0xc1fa/certifications.yfchan.me",
			type: "link",
		},
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
