import { listPublicDir } from "@/utils/listPublicDir"
import { Header } from "@/components/Header"
import { CertSection } from "@/components/CertSection"
import { Footer } from "@/components/Footer"

export default async function Home() {
	const thumbnailPaths = await listPublicDir({
		subpath: ["certs", "thumbnails"],
		suffix: "jpg",
	})

	const pdfPaths = await listPublicDir({
		subpath: ["certs", "pdf"],
		suffix: "pdf",
	})

	return (
		<>
			<Header pdfLinks={pdfPaths} />
			<main>
				<CertSection thumbnailPaths={thumbnailPaths} />
			</main>
			<Footer />
		</>
	)
}
