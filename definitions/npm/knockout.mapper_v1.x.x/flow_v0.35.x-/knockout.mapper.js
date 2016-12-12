

declare module 'knockout.mapper' {
		declare interface KnockoutMapper {
		fromJS(value: any, options?: any, target?: any, wrap?: boolean): any,
		toJS(value: any, options?: any): any
	}

	declare interface KnockoutStatic {
		mapper: KnockoutMapper
	}

			
}