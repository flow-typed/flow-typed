

declare module 'wiredep' {
		declare interface PathFiles {
		[type: string]: string[]
	}

	declare interface WiredepParams {
		src?: string | string[],
		directory?: string,
		bowerJson?: string,
		cwd?: string,
		dependencies?: boolean,
		devDependencies?: boolean,
		includeSelf?: boolean,
		exclude?: Array<string | RegExp>,
		ignorePath?: string | RegExp,
		overrides?: Object,
		onError?: (err: Error) => void,
		onFileUpdated?: (filePath: string) => void,
		onPathInjected?: (fileObject: FileObject) => void,
		onMainNotFound?: (pkg: string) => void,
		fileTypes?: FileTypes
	}

	declare interface FileObject {
		block: string,
		file: string,
		path: string
	}

	declare interface FileTypes {
		fileExtension: {
		block: RegExp,
		detect: {
		typeOfBowerFile: RegExp
	},
		replace: {
		typeOfBowerFile: string,
		anotherTypeOfBowerFile: (filePath: string) => string
	}
	},
		html: {
		block: RegExp,
		detect: {
		js: RegExp,
		css: RegExp
	},
		replace: {
		js: string,
		css: string
	}
	},
		jade: {
		block: RegExp,
		detect: {
		js: RegExp,
		css: RegExp
	},
		replace: {
		js: string,
		css: string
	}
	},
		less: {
		block: RegExp,
		detect: {
		css: RegExp,
		less: RegExp
	},
		replace: {
		css: string,
		less: string
	}
	},
		scss: {
		block: RegExp,
		detect: {
		css: RegExp,
		sass: RegExp,
		scss: RegExp
	},
		replace: {
		css: string,
		sass: string,
		scss: string
	}
	},
		styl: {
		block: RegExp,
		detect: {
		css: RegExp,
		styl: RegExp
	},
		replace: {
		css: string,
		styl: string
	}
	},
		yaml: {
		block: RegExp,
		detect: {
		js: RegExp,
		css: RegExp
	},
		replace: {
		js: string,
		css: string
	}
	}
	}

	declare function Wiredep(config: WiredepParams): PathFiles

		declare module.exports: undefined


}

declare module 'Wiredep' {
			declare export function stream(config: WiredepParams): NodeJS.ReadWriteStream

		
}