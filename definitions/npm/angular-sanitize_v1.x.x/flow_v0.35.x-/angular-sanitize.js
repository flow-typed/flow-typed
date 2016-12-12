

declare module 'angular-sanitize' {
					declare module.exports: undefined


}

declare module 'sanitize' {
		declare interface ISanitizeService {
		(html: string): string
	}

			
}

declare module 'filter' {
		declare interface ILinky {
		(text: string, target: string, attributes?: {
		[attribute: string]: string
	} | ((url: string) => {
		[attribute: string]: string
	})): string
	}

			
}

declare module 'npm$namespace$angular' {
		declare interface IFilterService {
		(name: "linky"): angular.sanitize.filter.ILinky
	}

			
}