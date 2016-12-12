

declare module 'jsnox' {
		declare interface ReactLikeObject {
		createElement<P>(
		type: React.ComponentClass<P> | string, props: P, children: React.ReactNode
	): React.ReactElement<P>
	}

	declare interface Module {
		(reactObj: ReactLikeObject): CreateElement
	}

	declare interface CreateElement {
		(specString: string, children: React.ReactNode): React.DOMElement<P, Element>,
		(specString: string, props?: React.HTMLAttributes, children?: React.ReactNode): React.DOMElement<P, Element>,
		(component: React.ComponentClass<P>, children: React.ReactNode): React.ReactElement<P>,
		(component: React.ComponentClass<P>, props?: P, children?: React.ReactNode): React.ReactElement<P>
	}

			declare module.exports: Module


}