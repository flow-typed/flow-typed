

declare module 'knockout.viewmodel' {
		declare interface KnockoutViewModelStatic {
		toModel(viewmodel: any): any,
		fromModel(model: any, options?: any): any,
		updateFromModel(viewmodel: any, model: any),
		logging: boolean
	}

	declare interface KnockoutStatic {
		viewmodel: KnockoutViewModelStatic
	}

			
}