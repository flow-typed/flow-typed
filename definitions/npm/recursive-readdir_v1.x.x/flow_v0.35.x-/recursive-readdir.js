

declare module 'recursive-readdir' {
					declare module.exports: readdir


}

declare module 'RecursiveReaddir' {
		declare interface readdir {
		(path: string, callback: (error: Error, files: string[]) => any): void,
		(path: string, ignorePattern: (string | ((file: string, stats: fs.Stats) => void))[], callback: (error: Error, files: string[]) => any): void,
		(path: string, ignoreFunction: (file: string, stats: fs.Stats) => void, callback: (error: Error, files: string[]) => any): void
	}

			
}