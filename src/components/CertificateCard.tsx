export type CertificateCardProps = {
  path: string;
  setModalPdfPath: (imagePath: string | null) => void;
};

export function CertificateCard(props: CertificateCardProps) {
  const filename = props.path.split("/").pop()?.split(".").shift();

  const handleClick = () => {
    const isDesktop = !/Mobi|Android/i.test(navigator.userAgent);

    if (isDesktop) {
      props.setModalPdfPath(`/certs/pdf/${filename}.pdf`);
    } else {
      window.open(`/certs/pdf/${filename}.pdf`, "_blank");
    }
  };

  return (
    <div className="grid gird-rows-2 gap-y-2">
      <img
        src={props.path}
        alt={filename}
        className="w-96 overflow-hidden rounded-lg hover:scale-[101%] transition-transform hover:ease-out duration-500 cursor-zoom-in min-w-32"
        onClick={handleClick}
      />
      <div className="text-sm font-semibold">{filename}</div>
    </div>
  );
}
