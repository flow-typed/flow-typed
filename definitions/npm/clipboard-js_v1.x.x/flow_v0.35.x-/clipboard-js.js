import type { IClipboardJsStatic } from 'npm$namespace$clipboard'

declare module 'clipboard-js' {
					declare module.exports: IClipboardJsStatic


}

declare module 'npm$namespace$clipboard' {
		declare interface IClipboardJsStatic {
		copy(val: string | Element): Promise<void>,
		paste(): Promise<string>
	}

			
}