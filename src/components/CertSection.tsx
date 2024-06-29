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
    <main>
      <div
        className="max-w-max w-screen grid
        grid-cols-1 md:grid-cols-2 xl:grid-cols-3
        gap-8 p-4 gap-y-16 mx-auto"
      >
        {props.thumbnailPaths.map((path, index) => (
          <div
            key={path}
            className="animate__animated animate__fadeInUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CertificateCard path={path} setModalPdfPath={setModalPdfPath} />
          </div>
        ))}
      </div>
      {modalPdfPath &&
        createPortal(
          <CertModal pdfPath={modalPdfPath} setPdfPath={setModalPdfPath} />,
          document.body,
          modalPdfPath
        )}
    </main>
  );
}
