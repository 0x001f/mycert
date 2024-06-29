export type CertModalProps = {
  pdfPath: string;
  setPdfPath: (imagePath: string | null) => void;
};

export function CertModal(props: CertModalProps) {
  return (
    <div className="inset-0 fixed z-50">
      <div
        className="fixed w-full h-full bg-opacity-80 cursor-zoom-out backdrop-blur-md"
        onClick={() => props.setPdfPath(null)}
      />
      <div className="fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] w-[70%] h-[80%]">
        <iframe
          src={props.pdfPath}
          className="w-full h-full"
          title="PDF Viewer"
        />
      </div>
    </div>
  );
}
