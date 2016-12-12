

declare module 'classnames' {
	declare type ClassValue = string | number | ClassDictionary | ClassArray;

	declare interface ClassDictionary {
		[id: string]: boolean
	}

	declare interface ClassArray {
		
	}

	declare interface ClassNamesFn {
		(...classes: ClassValue[]): string
	}

			declare module.exports: ClassNamesFn


}