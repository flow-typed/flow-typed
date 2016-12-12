import type { CSSTransitionGroup } from 'npm$namespace$___React'

declare module 'react-addons-css-transition-group' {
	declare type CSSTransitionGroup = ___React.CSSTransitionGroup;

				declare module.exports: CSSTransitionGroup


}

declare module 'npm$namespace$___React' {
	declare type CSSTransitionGroup = ComponentClass<CSSTransitionGroupProps>;

	declare interface CSSTransitionGroupTransitionName {
		enter: string,
		enterActive?: string,
		leave: string,
		leaveActive?: string,
		appear?: string,
		appearActive?: string
	}

	declare interface CSSTransitionGroupProps {
		transitionName: string | CSSTransitionGroupTransitionName,
		transitionAppear?: boolean,
		transitionAppearTimeout?: number,
		transitionEnter?: boolean,
		transitionEnterTimeout?: number,
		transitionLeave?: boolean,
		transitionLeaveTimeout?: number
	}

			
}

declare module '___Addons' {
					
}