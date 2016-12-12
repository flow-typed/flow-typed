import type { Packager } from 'npm$namespace$ElectronPackager'

declare module 'electron-packager' {
		declare interface NodeRequireFunction {
		(id: "electron-packager"): ElectronPackager.Packager
	}

			declare module.exports: Packager


}

declare module 'npm$namespace$ElectronPackager' {
		declare export interface Options {
		dir: string,
		name: string,
		platform?: string | string[],
		arch?: string,
		version: string,
		all?: boolean,
		out?: string,
		icon?: string,
		app-bundle-id?: string,
		app-version?: string,
		build-version?: string,
		helper-bundle-id?: string,
		version-string?: VersionString,
		cache?: string,
		ignore?: RegExp,
		prune?: boolean,
		overwrite?: boolean,
		asar?: boolean,
		asar-unpack?: string,
		sign?: string
	}

	declare export interface VersionString {
		CompanyName?: string,
		LegalCopyright?: string,
		FileDescription?: string,
		OriginalFilename?: string,
		FileVersion?: string,
		ProductVersion?: string,
		ProductName?: string,
		InternalName?: string
	}

	declare export interface Callback {
		(err: Error, appPath: string | string[]): void
	}

	declare export interface Packager {
		(opts: Options, callback: Callback): void
	}

			
}