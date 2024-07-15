export type CertModalProps = {
  pdfPath: string;
  setPdfPath: (imagePath: string | null) => void;
};

export function CertModal(props: CertModalProps) {
  return (
    <div className="inset-0 fixed z-50">
      <div
        className="fixed w-full h-full backdrop-blur-md cursor-zoom-out"
        onClick={() => props.setPdfPath(null)}
      />
      <div className="fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-3/4">
        <iframe src={props.pdfPath} className="w-full h-full" />
      </div>
    </div>
  );
}
