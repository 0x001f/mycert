"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import { CertModal } from "./CertModal";
import { CertificateCard } from "./CertificateCard";
import styles from "./CertSection.module.scss";
import FadeInUp from "./FadeInUp";

export type CertSectionProps = {
  thumbnailPaths: string[];
};

export function CertSection(props: CertSectionProps) {
  const [modalPdfPath, setModalPdfPath] = useState<string | null>(null);

  return (
    <>
      <div className={styles.container}>
        {props.thumbnailPaths.map((path, index) => (
          <FadeInUp key={path} delay={index * 0.1 + 1.65}>
            <CertificateCard path={path} setModalPdfPath={setModalPdfPath} />
          </FadeInUp>
        ))}
      </div>
      {createPortal(
        modalPdfPath ? (
          <CertModal pdfPath={modalPdfPath} setPdfPath={setModalPdfPath} />
        ) : null,
        document.body
      )}
    </>
  );
}
