import { listPublicDir } from "@/utils/listPublicDir";
import { Header } from "@/components/Header";
import { CertSection } from "@/components/CertSection";

export default async function Home() {
  const thumbnailPaths = await listPublicDir({
    subpath: ["certs", "thumbnails"],
    suffix: "jpg",
  });

  return (
    <main>
      <Header />
      <CertSection thumbnailPaths={thumbnailPaths} />
    </main>
  );
}
