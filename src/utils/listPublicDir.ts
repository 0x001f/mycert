import fs from "fs/promises"
import path from "path"

export type ListPublicDirOptions = {
	subpath: string[]
	suffix: string
}

export async function listPublicDir(options: ListPublicDirOptions) {
	const thumbnailsDir = path.join(process.cwd(), "public", ...options.subpath)
	const thumbnailPaths = await fs.readdir(thumbnailsDir)
	const thumbnailSubpaths = thumbnailPaths
		.filter(p => p.endsWith(`.${options.suffix}`))
		.map(p => "/" + path.join(...options.subpath, p))
	return thumbnailSubpaths
}
