import LoadingHeading from "@/components/LoadingHeading"
import LoadingCurtain from "./LoadingCurtain"
import { HeaderLinks } from "./HeaderLinks"

export function Header(props: { pdfLinks: string[] }) {
	return (
		<header>
			<LoadingCurtain />
			<LoadingHeading type="h1">My Certificates</LoadingHeading>
			<div className="mx-auto w-fit">
				<HeaderLinks animateIn pdfLinks={props.pdfLinks} />
			</div>
		</header>
	)
}
