"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { CertModal } from "./CertModal";
import { CertificateCard } from "./CertificateCard";

export type CertSectionProps = {
  thumbnailPaths: string[];
};

export function CertSection(props: CertSectionProps) {
  const [modalPdfPath, setModalPdfPath] = useState<string | null>(null);

  return (
    <>
      <div
        className="w-screen grid
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        gap-8 p-4 gap-y-16"
      >
        {props.thumbnailPaths.map((path) => (
          <CertificateCard
            path={path}
            key={path}
            setModalPdfPath={setModalPdfPath}
          />
        ))}
      </div>
      {modalPdfPath &&
        createPortal(
          <CertModal pdfPath={modalPdfPath} setPdfPath={setModalPdfPath} />,
          document.body,
          modalPdfPath
        )}
    </>
  );
}
