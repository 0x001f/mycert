import { isUserAgentMobile } from "@/utils/isMobile"
import styles from "./CertificateCard.module.scss"

export type CertificateCardProps = {
	path: string
	setModalPdfPath: (imagePath: string | null) => void
}

export function CertificateCard(props: CertificateCardProps) {
	const filename = props.path.split("/").pop()?.split(".").shift()

	const handleClick = () => {
		if (isUserAgentMobile()) {
			window.open(`/certs/pdf/${filename}.pdf`, "_blank")
		} else {
			props.setModalPdfPath(`/certs/pdf/${filename}.pdf`)
		}
	}

	return (
		<div className="grid gird-rows-2 gap-y-2">
			<img
				src={props.path}
				alt={filename}
				className={styles.thumbnail}
				onClick={handleClick}
			/>
			<div className="text-sm font-semibold">{filename}</div>
		</div>
	)
}
