import type { onClickOutside } from 'npm$namespace$ReactOnClickOutside'

declare module 'react-onclickoutside' {
					declare module.exports: onClickOutside


}

declare module 'npm$namespace$ReactOnClickOutside' {
		declare interface OnClickOutsideComponent {
		handleClickOutside(e: React.MouseEvent): void
	}

	declare interface OnClickOutsideProps {
		disableOnClickOutside?: boolean | Function,
		enableOnClickOutside?: Function,
		eventTypes?: string | Array<string>,
		outsideClickIgnoreClass?: string,
		preventDefault?: boolean,
		stopPropagation?: boolean
	}

	declare interface onClickOutside {
		(component: React.ComponentClass<A> | React.StatelessComponent<A>): React.ComponentClass<A & OnClickOutsideProps>
	}

			
}