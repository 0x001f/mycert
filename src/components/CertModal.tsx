export type CertModalProps = {
  pdfPath: string;
  setPdfPath: (imagePath: string | null) => void;
};

export function CertModal(props: CertModalProps) {
  return (
    <div className="inset-0 fixed z-50">
      <div
        className="fixed w-full h-full bg-slate-600 bg-opacity-80 cursor-zoom-out"
        onClick={() => props.setPdfPath(null)}
      />
      <div className="fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] w-[70%] h-[80%]">
        <embed
          src={props.pdfPath}
          className="absolute top-0 left-0 w-full h-full"
          type="application/pdf"
        ></embed>
      </div>
    </div>
  );
}
