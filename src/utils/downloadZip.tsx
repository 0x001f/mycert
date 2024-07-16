"use client"
import React from "react"
import JSZip from "jszip"
import { saveAs } from "file-saver"
import axios from "axios"

export const downloadAllAsZip = async (filePaths: string[]) => {
	const zip = new JSZip()

	const fetchFilePromises = filePaths.map(async url => {
		const response = await axios.get(url, { responseType: "blob" })
		const fileName = url.split("/").pop() || "unknown" // Extract file name from URL
		zip.file(fileName, response.data)
	})

	await Promise.all(fetchFilePromises)

	// Generate the ZIP file
	const content = await zip.generateAsync({ type: "blob" })

	// Trigger the download
	saveAs(content, "certifications.zip")
}

const DownloadZip = (props: { filePaths: string[] }) => {
	return (
		<div>
			<button onClick={() => downloadAllAsZip(props.filePaths)}>
				Download Files as ZIP
			</button>
		</div>
	)
}

export default DownloadZip
