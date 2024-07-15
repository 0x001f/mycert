"use client";
import clsx from "clsx";
import styles from "./LoadingHeading.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function LoadingHeading() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const halfViewportHeight = window.innerHeight / 2;
    const headingRect = headingRef.current!.getBoundingClientRect();

    gsap.set(headingRef.current, {
      y: halfViewportHeight - headingRect.top - headingRect.height / 2 - 8,
    });

    gsap.to(headingRef.current, {
      y: halfViewportHeight - headingRect.top - headingRect.height / 2,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(headingRef.current, {
      opacity: 1,
      duration: 1.1,
      ease: "power2.out",
    });
  }, []);

  return (
    <h1
      ref={headingRef}
      className={clsx(
        "relative text-5xl md:text-6xl text-wrap max-w-full my-3 z-20 mix-blend-exclusion invert dark:invert-0",
        styles.heading
      )}
    >
      My Certificates
    </h1>
  );
}
