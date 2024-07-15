"use client";
import clsx from "clsx";
import styles from "./LoadingHeading.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { createElement, FC, useRef } from "react";

export type LoadingHeadingProps = {
  children?: React.ReactNode | string;
  type?: Parameters<typeof createElement>[0];
};
export default function LoadingHeading({
  type = "div",
  children,
}: LoadingHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const halfViewportHeight = window.innerHeight / 2;
    const headingRect = headingRef.current!.getBoundingClientRect();

    gsap.set(headingRef.current, {
      y: halfViewportHeight - headingRect.top - headingRect.height / 2 - 16,
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

  return createElement(
    type,
    {
      ref: headingRef,
      className: clsx(
        "relative text-5xl md:text-6xl text-wrap max-w-full my-3 z-20 mix-blend-exclusion invert dark:invert-0",
        styles.heading
      ),
    } as Parameters<typeof createElement>[1],
    children
  );
}
