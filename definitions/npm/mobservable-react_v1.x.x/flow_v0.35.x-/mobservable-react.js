

declare module 'mobservable-react' {
			declare export function reactiveComponent<P>(clazz: React.ClassicComponentClass<P>): React.ClassicComponentClass<P>

	declare export function reactiveComponent<TFunction>(target: TFunction): void

	declare export function reactiveComponent<P>(clazz: React.ComponentClass<P>): React.ComponentClass<P>

	declare export function reactiveComponent<P>(
		renderFunction: (props: P) => React.ReactElement<any>
	): React.ClassicComponentClass<P>

		
}