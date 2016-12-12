import type { Vex } from 'npm$namespace$vex'

declare module 'vex-js' {
					
}

declare module 'npm$namespace$vex' {
		declare interface ICSSAttributes {
		[property: string]: string | number
	}

	declare interface IVexOptions {
		afterClose?: (() => void),
		afterOpen?: ((vexContent: JQuery) => void),
		content?: string,
		showCloseButton?: boolean,
		escapeButtonCloses?: boolean,
		overlayClosesOnClick?: boolean,
		appendLocation?: HTMLElement | JQuery | string,
		className?: string,
		css?: ICSSAttributes,
		overlayClassName?: string,
		overlayCSS?: ICSSAttributes,
		contentClassName?: string,
		contentCSS?: ICSSAttributes,
		closeClassName?: string,
		closeCSS?: ICSSAttributes
	}

	declare interface Vex {
		open(options: IVexOptions): JQuery,
		close(id?: number): boolean,
		closeAll(): boolean,
		closeByID(id: number): boolean
	}

			
}

declare module 'vex' {
					declare module.exports: undefined


}