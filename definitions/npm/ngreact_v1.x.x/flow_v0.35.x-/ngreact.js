

declare module 'ngreact' {
	declare type ReactDirective = (
		reactComponentName: string | ___React.ComponentClass<any>, propNames?: string[], conf?: Object, injectableProps?: Object
	) => angular.IDirective;

				
}