

declare module 'reactcss' {
	declare export type LoopableProps = ReactCSS.LoopableProps;

		declare export function hover<A>(
		component: React.ComponentClass<A> | React.StatelessComponent<A>
	): React.ComponentClass<A>

	declare export function loop(i: number, length: number): ReactCSS.LoopableProps

	declare export default function reactCSS(classes: ReactCSS.Classes, ...activations: Array<any>): any

		
}

declare module 'npm$namespace$ReactCSS' {
		declare interface LoopableProps {
		first-child?: boolean,
		last-child?: boolean,
		even?: boolean,
		odd?: boolean,
		[nthChild: string]: boolean
	}

	declare interface HoverProps {
		hover?: boolean
	}

	declare interface Classes {
		default: any,
		[scope: string]: any
	}

			
}