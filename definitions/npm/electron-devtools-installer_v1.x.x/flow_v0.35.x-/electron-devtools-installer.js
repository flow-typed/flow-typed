

declare module 'electron-devtools-installer' {
		declare interface ExtensionReference {
		id: string,
		electron: string
	}

	declare export default function Promise(
		extensionReference: ExtensionReference | string, forceDownload?: boolean
	): Promise<string>

		
}