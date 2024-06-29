export type CertificateCardProps = {
  path: string;
  setModalPdfPath: (imagePath: string | null) => void;
};

export function CertificateCard(props: CertificateCardProps) {
  const filename = props.path.split("/").pop()?.split(".").shift();

  return (
    <div className="grid gird-rows-2 gap-y-2">
      <img
        src={props.path}
        alt={filename}
        className="w-96 overflow-hidden rounded-lg hover:scale-[102%] transition-transform hover:ease-out duration-500 cursor-zoom-in min-w-32"
        onClick={() => props.setModalPdfPath(`/certs/pdf/${filename}.pdf`)}
      />
      <div className="text-sm font-semibold">{filename}</div>
    </div>
  );
}
