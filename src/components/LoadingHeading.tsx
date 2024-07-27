"use client"
import styles from "./LoadingHeading.module.scss"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { createElement, useRef } from "react"

export type LoadingHeadingProps = {
	children?: React.ReactNode | string
	type?: Parameters<typeof createElement>[0]
}
export default function LoadingHeading({
	type = "h1",
	children,
}: LoadingHeadingProps) {
	const headingRef = useRef<HTMLHeadingElement>(null)

	useGSAP(() => {
		const halfViewportHeight = window.innerHeight / 2
		const headingRect = headingRef.current!.getBoundingClientRect()

		gsap.set(headingRef.current, {
			y: halfViewportHeight - headingRect.top - headingRect.height / 2,
		})

		gsap.set("body", {
			overflow: "hidden",
		})

		gsap.set("body", {
			overflow: "unset",
			delay: 1.5,
		})

		gsap.to(headingRef.current, {
			opacity: 1,
			duration: 1.2,
			delay: 0.3,
			ease: "power1.out",
		})
	}, [])

	return (
		<>
			<div className={styles.curtain} />
			{createElement(
				type,
				{
					ref: headingRef,
					className: styles.heading,
				} as Parameters<typeof createElement>[1],
				children
			)}
		</>
	)
}
