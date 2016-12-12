

declare module 'react-holder' {
		declare interface ReactHolderProp {
		width: string | number,
		height: string | number,
		updateOnResize: boolean,
		theme?: string,
		random?: boolean,
		bg?: string,
		fg?: string,
		text?: string,
		size?: number,
		font?: string,
		align?: string,
		outline?: boolean,
		lineWrap?: number
	}

		declare class ReactHolder extends React$Component<ReactHolderProp, any> {
		
	}

	declare module.exports: undefined


}