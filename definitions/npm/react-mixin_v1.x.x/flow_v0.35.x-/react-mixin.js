

declare module 'react-mixin' {
					declare module.exports: ReactMixin


}

declare module 'reactMixin' {
		declare export interface ClassDecorator {
		(target: TFunction): TFunction | void
	}

	declare interface ReactMixin {
		decorate(mixin: React.Mixin<any, any>): ClassDecorator,
		onClass<S>(clazz: any, mixin: React.Mixin<any, any>): React.ComponentClass<S>,
		(clazz: any, mixin: React.Mixin<any, any>): React.ComponentClass<S>
	}

			
}